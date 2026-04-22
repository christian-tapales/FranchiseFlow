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

    return (
        <div className="franchise-app">
            <header className="app-header">
                <h1>Franchise Response Manager</h1>
                <button className="create-button" onClick={handleCreateClick}>
                    Create New Franchise
                </button>
            </header>

            {error && (
                <div className="error-message">
                    {error}
                    <button onClick={() => setError(null)}>Dismiss</button>
                </div>
            )}

            {loading ? (
                <div className="loading">Loading...</div>
            ) : (
                <FranchiseList
                    franchises={franchises}
                    onEdit={handleEditClick}
                    onRefresh={refreshFranchises}
                    service={franchiseService}
                />
            )}

            {showForm && (
                <FranchiseForm franchise={selectedFranchise} onSubmit={handleFormSubmit} onCancel={handleFormClose} />
            )}
        </div>
    )
}


