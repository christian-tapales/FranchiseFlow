import React, { useState, useEffect, useRef } from 'react'
import './FranchiseForm.css'

export default function FranchiseForm({ franchise, onSubmit, onCancel, userRole }) {
    const isEditing = !!franchise
    const isOfficer = userRole === 'officer'
    const fileInputRef = useRef(null)

    // Initialize form state
    const [formData, setFormData] = useState({
        request_type: 'registration',
        franchise_type: 'puj_public_utility_jeepney',
        region: 'ncr',
        plate_number: '',
        or_number: '',
        cr_number: '',
        dti_sec_registration_number: '',
        expiration_date: '',
        progress: 'draft',
        officer_remarks: ''
    })

    const [errors, setErrors] = useState({})
    const [isScanning, setIsScanning] = useState(false)

    // Load data if editing
    useEffect(() => {
        if (franchise) {
            const getValue = (field) => (typeof field === 'object' ? field.value : field)
            setFormData({
                request_type: getValue(franchise.request_type) || 'registration',
                franchise_type: getValue(franchise.franchise_type) || 'puj_public_utility_jeepney',
                region: getValue(franchise.region) || 'ncr',
                plate_number: getValue(franchise.plate_number) || '',
                or_number: getValue(franchise.or_number) || '',
                cr_number: getValue(franchise.cr_number) || '',
                dti_sec_registration_number: getValue(franchise.dti_sec_registration_number) || '',
                expiration_date: getValue(franchise.expiration_date) || '',
                progress: getValue(franchise.progress) || 'draft',
                officer_remarks: getValue(franchise.officer_remarks) || ''
            })
        }
    }, [franchise])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
    }

    const handleScanDoc = () => fileInputRef.current.click()

    const handleFileChange = async (e) => {
        const file = e.target.files[0]
        if (!file) return
        
        setIsScanning(true)
        
        // Mocking the AI scan for now since Tesseract couldn't install
        setTimeout(() => {
            setFormData(prev => ({ 
                ...prev, 
                or_number: '123456789', 
                cr_number: '987654321' 
            }))
            setIsScanning(false)
        }, 2000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.region === 'region_3' && !formData.plate_number.toUpperCase().startsWith('C')) {
            setErrors({ plate_number: "Region 3 plates must start with 'C'" })
            return
        }
        // If Operator is submitting for the first time
        const nextStatus = !isEditing ? 'ai_check' : formData.progress
        onSubmit({ ...formData, progress: nextStatus })
    }

    const handleOfficerAction = (newStatus) => {
        onSubmit({ ...formData, progress: newStatus })
    }

    return (
        <div className="form-overlay">
            <div className={`form-container ${isOfficer ? 'officer-mode' : ''}`}>
                <div className="form-header">
                    <h2>{isOfficer ? 'Review Application' : (isEditing ? 'Edit Application' : 'New Application')}</h2>
                    <button type="button" className="close-button" onClick={onCancel}>×</button>
                </div>

                <form onSubmit={handleSubmit}>
                    <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept="image/*" onChange={handleFileChange} />
                    
                    <div className="form-section">
                        <h3>General Details</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Request Type</label>
                                <select name="request_type" value={formData.request_type} onChange={handleChange} disabled={isOfficer}>
                                    <option value="registration">Registration</option>
                                    <option value="verification">Verification</option>
                                    <option value="extension">Extension</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Region</label>
                                <select name="region" value={formData.region} onChange={handleChange} disabled={isOfficer}>
                                    <option value="ncr">National Capital Region (NCR)</option>
                                    <option value="car">Cordillera Administrative Region (CAR)</option>
                                    <option value="region_1">Region 1 (Ilocos Region)</option>
                                    <option value="region_2">Region 2 (Cagayan Valley)</option>
                                    <option value="region_3">Region 3 (Central Luzon)</option>
                                    <option value="region_4_a">Region 4-A (CALABARZON)</option>
                                    <option value="region_4_b">Region 4-B (MIMAROPA)</option>
                                    <option value="region_5">Region 5 (Bicol Region)</option>
                                    <option value="region_6">Region 6 (Western Visayas)</option>
                                    <option value="region_7">Region 7 (Central Visayas)</option>
                                    <option value="region_8">Region 8 (Eastern Visayas)</option>
                                    <option value="region_9">Region 9 (Zamboanga Peninsula)</option>
                                    <option value="region_10">Region 10 (Northern Mindanao)</option>
                                    <option value="region_11">Region 11 (Davao Region)</option>
                                    <option value="region_12">Region 12 (SOCCSKSARGEN)</option>
                                    <option value="region_13">Region 13 (Caraga)</option>
                                    <option value="barmm">Bangsamoro Autonomous Region in Muslim Mindanao (BARMM)</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Plate Number</label>
                            <input name="plate_number" value={formData.plate_number} onChange={handleChange} disabled={isOfficer} className={errors.plate_number ? 'error' : ''} />
                            {errors.plate_number && <span className="error-text">{errors.plate_number}</span>}
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="section-header">
                            <h3>Documents</h3>
                            {!isOfficer && (
                                <button type="button" className="scan-button" onClick={handleScanDoc} disabled={isScanning}>
                                    {isScanning ? '⏳ Reading...' : '📷 Scan OR/CR'}
                                </button>
                            )}
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>OR Number</label>
                                <input name="or_number" value={formData.or_number} onChange={handleChange} disabled={isOfficer} />
                            </div>
                            <div className="form-group">
                                <label>CR Number</label>
                                <input name="cr_number" value={formData.cr_number} onChange={handleChange} disabled={isOfficer} />
                            </div>
                        </div>
                    </div>

                    {isOfficer && (
                        <div className="form-section">
                            <h3>Officer Review</h3>
                            <div className="form-group">
                                <label>Remarks</label>
                                <textarea name="officer_remarks" value={formData.officer_remarks} onChange={handleChange} rows={3} />
                            </div>
                        </div>
                    )}

                    <div className="form-actions">
                        <button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>
                        {isOfficer ? (
                            <>
                                <button type="button" className="btn-danger" onClick={() => handleOfficerAction('draft')}>Reject</button>
                                <button type="button" className="submit-button" onClick={() => handleOfficerAction('done')}>Approve</button>
                            </>
                        ) : (
                            <button type="submit" className="submit-button" disabled={isScanning}>Submit</button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}
