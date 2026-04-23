import React, { useState, useEffect, useRef } from 'react'
import { validateApplication, MOCK_LTFRB_DATABASE } from '../mock/MockDatabase'
import './FranchiseForm.css'

export default function FranchiseForm({ franchise, onSubmit, onCancel, userRole }) {
    const isEditing = !!franchise
    const isOfficer = userRole === 'officer'
    const fileInputRef = useRef(null)

    // Initialize form state
    const [formData, setFormData] = useState({
        request_type: 'registration',
        franchise_type: 'bus_city_provincial',
        region: 'region_8',
        operator_name: '',
        plate_number: '',
        garage_address: '',
        or_number: '',
        cr_number: '',
        dti_sec_registration_number: '',
        expiration_date: '',
        progress: 'draft',
        officer_remarks: ''
    })

    const [errors, setErrors] = useState({})
    const [isScanning, setIsScanning] = useState(false)
    const [scanType, setScanType] = useState(null)

    // Load data if editing
    useEffect(() => {
        if (franchise) {
            const getValue = (field) => (typeof field === 'object' ? field.value : field)
            setFormData({
                request_type: getValue(franchise.request_type) || 'registration',
                franchise_type: getValue(franchise.franchise_type) || 'bus_city_provincial',
                region: getValue(franchise.region) || 'region_8',
                operator_name: getValue(franchise.operator_name) || '',
                plate_number: getValue(franchise.plate_number) || '',
                garage_address: getValue(franchise.garage_address) || '',
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
        const { name, value, type, checked } = e.target
        const val = type === 'checkbox' ? checked : value
        setFormData(prev => ({ ...prev, [name]: val }))
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }))
    }

    const handleScanDoc = (type) => {
        setScanType(type)
        fileInputRef.current.click()
    }

    const handleFileChange = async (e) => {
        const file = e.target.files[0]
        if (!file) return

        setIsScanning(true)

        // Mocking the AI scan
        setTimeout(() => {
            if (scanType === 'or_cr') {
                // Pre-fill with our mock data for demonstration
                setFormData(prev => ({
                    ...prev,
                    or_number: MOCK_LTFRB_DATABASE[2].or_number,
                    cr_number: MOCK_LTFRB_DATABASE[2].cr_number,
                    plate_number: MOCK_LTFRB_DATABASE[2].plate_number // The AI usually extracts plate from OR/CR too
                }))
            } else if (scanType === 'dti') {
                setFormData(prev => ({
                    ...prev,
                    dti_sec_registration_number: MOCK_LTFRB_DATABASE[2].dti_sec_registration_number
                }))
            }
            setIsScanning(false)
            setScanType(null)
            
            // Clear input so same file can be selected again if needed
            if (fileInputRef.current) fileInputRef.current.value = ''
        }, 2000)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        // Use our mock LTFRB database to validate the inputs
        const validationError = validateApplication(formData)
        if (validationError) {
            setErrors({ validation: validationError })
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

                    {errors.validation && (
                        <div className="validation-alert" style={{ backgroundColor: '#fee2e2', color: '#991b1b', padding: '12px', borderRadius: '6px', marginBottom: '16px', border: '1px solid #f87171' }}>
                            <strong>⚠️ Error:</strong> {errors.validation}
                        </div>
                    )}
                    
                    <div className="form-section">
                        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3>Application Information</h3>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Number</label>
                                <input value={isEditing ? franchise.number?.display_value : 'FRN-NEW'} disabled={true} />
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

                        <div className="form-row">
                            <div className="form-group">
                                <label>Operator Name</label>
                                <input name="operator_name" value={isEditing ? franchise?.operator_name?.display_value || 'Unknown' : ''} disabled={true} placeholder="Auto-filled upon submission" />
                            </div>
                            <div className="form-group">
                                <label>Franchise Type</label>
                                <select name="franchise_type" value={formData.franchise_type} onChange={handleChange} disabled={isOfficer}>
                                    <option value="bus_city_provincial">Bus (City / Provincial)</option>
                                    <option value="puj_public_utility_jeepney">PUJ (Public Utility Jeepney)</option>
                                    <option value="taxi">Taxi</option>
                                    <option value="tnvs">TNVS</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label>Garage Address</label>
                                <input name="garage_address" value={formData.garage_address} onChange={handleChange} disabled={isOfficer} />
                            </div>
                            <div className="form-group">
                                <label>Request Type</label>
                                <select name="request_type" value={formData.request_type} onChange={handleChange} disabled={isOfficer}>
                                    <option value="registration">Registration</option>
                                    <option value="renewal">Renewal</option>
                                    <option value="cancellation">Cancellation</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="form-section">
                        <div className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                            <h3>Documents</h3>
                        </div>
                        
                        {!isOfficer && (
                            <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                                <button type="button" className="scan-button" onClick={() => handleScanDoc('or_cr')} disabled={isScanning}>
                                    {isScanning && scanType === 'or_cr' ? '⏳ Scanning OR/CR...' : '📷 Upload OR/CR Document'}
                                </button>
                                <button type="button" className="scan-button" onClick={() => handleScanDoc('dti')} disabled={isScanning}>
                                    {isScanning && scanType === 'dti' ? '⏳ Scanning DTI/SEC...' : '📷 Upload DTI/SEC Document'}
                                </button>
                            </div>
                        )}

                        <div className="form-row">
                            <div className="form-group">
                                <label>Plate Number</label>
                                <input name="plate_number" value={formData.plate_number} onChange={handleChange} disabled={isOfficer} className={errors.plate_number ? 'error' : ''} />
                                {errors.plate_number && <span className="error-text">{errors.plate_number}</span>}
                            </div>
                            <div className="form-group">
                                <label>DTI / SEC Registration Number</label>
                                <input name="dti_sec_registration_number" value={formData.dti_sec_registration_number} onChange={handleChange} disabled={isOfficer} />
                            </div>
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
