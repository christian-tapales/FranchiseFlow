import React from 'react'
import './FranchiseList.css'

export default function FranchiseList({ franchises, onEdit, onRefresh, service }) {
    const handleDelete = async (franchise) => {
        if (!confirm(`Are you sure you want to delete ${franchise.number.display_value}?`)) {
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

    const getStateClass = (state) => {
        const stateValue = typeof state === 'object' ? state.display_value : state

        switch (stateValue) {
            case 'New':
                return 'state-new'
            case 'In Progress':
                return 'state-in-progress'
            case 'On Hold':
                return 'state-on-hold'
            case 'Resolved':
                return 'state-resolved'
            case 'Closed':
                return 'state-closed'
            default:
                return ''
        }
    }

    const getImpactClass = (impact) => {
        const impactValue = typeof impact === 'object' ? impact.value : impact

        switch (impactValue) {
            case '1':
                return 'impact-high'
            case '2':
                return 'impact-medium'
            case '3':
                return 'impact-low'
            default:
                return ''
        }
    }

    return (
        <div className="franchise-list">
            {franchises.length === 0 ? (
                <div className="no-franchises">No franchises found</div>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Description</th>
                            <th>State</th>
                            <th>Impact</th>
                            <th>Opened</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {franchises.map((franchise) => {
                            // Extract primitive values from potential objects
                            const number =
                                typeof franchise.number === 'object' ? franchise.number.display_value : franchise.number
                            const shortDesc =
                                typeof franchise.short_description === 'object'
                                    ? franchise.short_description.display_value
                                    : franchise.short_description
                            const state =
                                typeof franchise.state === 'object' ? franchise.state.display_value : franchise.state
                            const impact =
                                typeof franchise.impact === 'object' ? franchise.impact.display_value : franchise.impact
                            const openedAt =
                                typeof franchise.opened_at === 'object'
                                    ? franchise.opened_at.display_value
                                    : franchise.opened_at

                            return (
                                <tr key={typeof franchise.sys_id === 'object' ? franchise.sys_id.value : franchise.sys_id}>
                                    <td>{number}</td>
                                    <td>{shortDesc}</td>
                                    <td>
                                        <span className={`state-badge ${getStateClass(franchise.state)}`}>{state}</span>
                                    </td>
                                    <td>
                                        <span className={`impact-badge ${getImpactClass(franchise.impact)}`}>
                                            {impact}
                                        </span>
                                    </td>
                                    <td>{openedAt}</td>
                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="edit-button"
                                                onClick={() => onEdit(franchise)}
                                                aria-label={`Edit franchise ${number}`}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                className="delete-button"
                                                onClick={() => handleDelete(franchise)}
                                                aria-label={`Delete franchise ${number}`}
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
        </div>
    )
}
