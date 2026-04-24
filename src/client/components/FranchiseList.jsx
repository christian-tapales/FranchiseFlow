import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import './FranchiseList.css'

export default function FranchiseList({ franchises, onEdit, onRefresh, service, userRole }) {
    const [searchQuery, setSearchQuery] = useState('')
    const [statusFilter, setStatusFilter] = useState('all')

    const handleDelete = async (franchise) => {
        if (!confirm(`Are you sure you want to delete ${franchise.number?.display_value}?`)) {
            return
        }

        try {
            const sysId = typeof franchise.sys_id === 'object' ? franchise.sys_id.value : franchise.sys_id
            await service.delete(sysId)
            onRefresh()
        } catch (error) {
            console.error('Failed to delete franchise:', error)
            alert('Failed to delete franchise: ' + (error.message || 'Unknown error'))
        }
    }

    const formatLabel = (val) => {
        if (!val) return 'N/A'
        return typeof val === 'object' ? val.display_value : val
    }

    // Filter Logic
    const filteredFranchises = franchises.filter(franchise => {
        const number = (franchise.number?.display_value || '').toLowerCase()
        const plate = (typeof franchise.plate_number === 'object' ? franchise.plate_number.display_value : franchise.plate_number || '').toLowerCase()
        const progress = typeof franchise.progress === 'object' ? franchise.progress.value : franchise.progress
        
        const matchesSearch = number.includes(searchQuery.toLowerCase()) || plate.includes(searchQuery.toLowerCase())
        const matchesStatus = statusFilter === 'all' || progress === statusFilter

        return matchesSearch && matchesStatus
    })

    return (
        <div className="franchise-dashboard">
            <div className="dashboard-stats">
                <div className="stat-card">
                    <span className="stat-label">Total Applications</span>
                    <span className="stat-value">{franchises.length}</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">Pending Review</span>
                    <span className="stat-value">
                        {franchises.filter(f => {
                            const prog = typeof f.progress === 'object' ? f.progress.value : f.progress
                            return prog === 'ltfrb_review'
                        }).length}
                    </span>
                </div>
            </div>

            <div className="dashboard-controls">
                <div className="search-box">
                    <span className="search-icon">🔍</span>
                    <input 
                        type="text" 
                        placeholder="Search Plate or Request Number..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="search-input"
                    />
                </div>
                <div className="filter-box">
                    <select 
                        value={statusFilter} 
                        onChange={(e) => setStatusFilter(e.target.value)}
                        className="filter-select"
                    >
                        <option value="all">All Statuses</option>
                        <option value="draft">Draft</option>
                        <option value="ltfrb_review">LTFRB Review</option>
                        <option value="done">Approved</option>
                    </select>
                </div>
            </div>

            <div className="franchise-grid">
                {filteredFranchises.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">📂</div>
                        <h3>No applications found</h3>
                        <p>{franchises.length === 0 ? 'Applications you submit will appear here.' : 'Try adjusting your search or filters.'}</p>
                    </div>
                ) : (
                    filteredFranchises.map((franchise) => {
                        const sysId = typeof franchise.sys_id === 'object' ? franchise.sys_id.value : franchise.sys_id
                        const progress = typeof franchise.progress === 'object' ? franchise.progress.value : franchise.progress
                        const number = franchise.number?.display_value || 'REQ-NEW'
                        
                        return (
                            <div key={sysId} className={`franchise-card status-${progress}`}>
                                <div className="card-header">
                                    <span className="request-number">{number}</span>
                                    <span className={`badge type-${typeof franchise.request_type === 'object' ? franchise.request_type.value : franchise.request_type}`}>
                                        {formatLabel(franchise.request_type).toLowerCase() === 'extension' ? 'Renewal' : formatLabel(franchise.request_type)}
                                    </span>
                                </div>

                                <div className="card-body">
                                    <div className="info-row">
                                        <span className="info-label">Operator</span>
                                        <span className="info-value" style={{fontWeight: 600}}>{formatLabel(franchise.operator_name) || 'Unknown'}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Plate Number</span>
                                        <span className="info-value highlighted">{formatLabel(franchise.plate_number)}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Region</span>
                                        <span className="info-value">{formatLabel(franchise.region)}</span>
                                    </div>
                                    <div className="info-row">
                                        <span className="info-label">Franchise Type</span>
                                        <span className="info-value">{formatLabel(franchise.franchise_type)}</span>
                                    </div>
                                    
                                    <ProgressBar value={progress} />

                                    {franchise.officer_remarks && (
                                        <div className="remarks-box">
                                            <strong>Officer Remarks:</strong>
                                            <p>{formatLabel(franchise.officer_remarks)}</p>
                                        </div>
                                    )}
                                </div>

                                <div className="card-footer">
                                    <div className="footer-actions">
                                        <button className="btn-secondary" onClick={() => onEdit(franchise)}>
                                            {userRole === 'officer' ? 'Review' : 'Edit'}
                                        </button>
                                        {userRole === 'operator' && progress === 'draft' && (
                                            <button className="btn-danger" onClick={() => handleDelete(franchise)}>
                                                Delete
                                            </button>
                                        )}
                                    </div>
                                    <span className="opened-date">
                                        {formatLabel(franchise.opened_at)}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
        </div>
    )
}
