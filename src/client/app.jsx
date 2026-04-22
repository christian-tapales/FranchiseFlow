import React, { useState, useEffect, useMemo } from 'react'
import { FranchiseService } from './services/FranchiseService'
import FranchiseList from './components/FranchiseList'
import FranchiseForm from './components/FranchiseForm'
import './app.css'

export default function App() {
    const [franchises, setFranchises] = useState([])
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [selectedFranchise, setSelectedFranchise] = useState(null)
    const [error, setError] = useState(null)
    
    // Phase 2: Persona Switcher State
    const [userRole, setUserRole] = useState('operator') // 'operator' or 'officer'

    const franchiseService = useMemo(() => new FranchiseService(), [])

    const refreshFranchises = async () => {
        try {
            setLoading(true)
            setError(null)
            const data = await franchiseService.list()
            setFranchises(data)
        } catch (err) {
            setError('Failed to load franchises: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        void refreshFranchises()
    }, [])

    const handleCreateClick = () => {
        setSelectedFranchise(null)
        setShowForm(true)
    }

    const handleEditClick = (franchise) => {
        setSelectedFranchise(franchise)
        setShowForm(true)
    }

    const handleFormClose = () => {
        setShowForm(false)
        setSelectedFranchise(null)
    }

    const handleFormSubmit = async (formData) => {
        setLoading(true)
        try {
            if (selectedFranchise) {
                const sysId =
                    typeof selectedFranchise.sys_id === 'object'
                        ? selectedFranchise.sys_id.value
                        : selectedFranchise.sys_id
                await franchiseService.update(sysId, formData)
            } else {
                await franchiseService.create(formData)
            }
            setShowForm(false)
            await refreshFranchises()
        } catch (err) {
            setError('Failed to save franchise: ' + (err.message || 'Unknown error'))
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const toggleRole = () => {
        const nextRole = userRole === 'operator' ? 'officer' : 'operator'
        setUserRole(nextRole)
    }

    return (
        <div className={`franchise-app role-${userRole}`}>
            <header className="app-header">
                <div className="header-left">
                    <h1>FranchiseFlow</h1>
                    <div className="persona-badge">{userRole.toUpperCase()} VIEW</div>
                </div>
                
                <div className="header-actions">
                    <div className="persona-switcher">
                        <span>Switch View:</span>
                        <button className={`toggle-btn ${userRole}`} onClick={toggleRole}>
                            <div className="toggle-thumb"></div>
                        </button>
                    </div>

                    {userRole === 'operator' && (
                        <button className="create-button" onClick={handleCreateClick}>
                            + New Application
                        </button>
                    )}
                </div>
            </header>

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            <main className="app-main">
                {loading ? (
                    <div className="loading-container">
                        <div className="loader"></div>
                        <p>Fetching LTFRB Records...</p>
                    </div>
                ) : (
                    <FranchiseList
                        franchises={franchises}
                        onEdit={handleEditClick}
                        onRefresh={refreshFranchises}
                        service={franchiseService}
                        userRole={userRole}
                    />
                )}
            </main>

            {showForm && (
                <FranchiseForm 
                    franchise={selectedFranchise} 
                    onSubmit={handleFormSubmit} 
                    onCancel={handleFormClose} 
                    userRole={userRole}
                />
            )}
        </div>
    )
}


