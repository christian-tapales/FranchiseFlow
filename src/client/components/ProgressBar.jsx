import React from 'react'
import './ProgressBar.css'

const PROGRESS_MAP = {
    'draft': { percent: 10, label: 'Draft', color: '#94a3b8' },
    'ai_check': { percent: 40, label: 'AI Verifying', color: '#3b82f6' },
    'ltfrb_review': { percent: 75, label: 'LTFRB Review', color: '#f59e0b' },
    'done': { percent: 100, label: 'Approved', color: '#10b981' }
}

export default function ProgressBar({ value }) {
    const status = PROGRESS_MAP[value] || { percent: 0, label: 'Unknown', color: '#ccc' }

    return (
        <div className="progress-container">
            <div className="progress-info">
                <span className="progress-label">{status.label}</span>
                <span className="progress-percent">{status.percent}%</span>
            </div>
            <div className="progress-track">
                <div 
                    className="progress-fill" 
                    style={{ 
                        width: `${status.percent}%`,
                        backgroundColor: status.color,
                        boxShadow: `0 0 10px ${status.color}44`
                    }}
                ></div>
            </div>
        </div>
    )
}
