import React from 'react'
import ProgressBar from './ProgressBar'
import './FranchiseList.css'

export default function FranchiseList({ franchises, onEdit, onRefresh, service, userRole }) {
    
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
                            return prog === 'ai_check' || prog === 'ltfrb_review'
                        }).length}
                    </span>
                </div>
            </div>

            <div className="franchise-grid">
                {franchises.length === 0 ? (
                    <div className="empty-state">
                        <div className="empty-icon">📂</div>
                        <h3>No applications found</h3>
                        <p>Applications you submit will appear here.</p>
                    </div>
                ) : (
                    franchises.map((franchise) => {
                        const sysId = typeof franchise.sys_id === 'object' ? franchise.sys_id.value : franchise.sys_id
                        const progress = typeof franchise.progress === 'object' ? franchise.progress.value : franchise.progress
                        const number = franchise.number?.display_value || 'REQ-NEW'
                        
                        return (
                            <div key={sysId} className={`franchise-card status-${progress}`}>
                                <div className="card-header">
                                    <span className="request-number">{number}</span>
                                    <span className={`badge type-${typeof franchise.request_type === 'object' ? franchise.request_type.value : franchise.request_type}`}>
                                        {formatLabel(franchise.request_type)}
                                    </span>
                                </div>

                                <div className="card-body">
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
