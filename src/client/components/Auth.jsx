import React, { useState, useMemo } from 'react'
import { UserService } from '../services/UserService'
import './Auth.css'

export default function Auth({ onLogin }) {
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)

    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    const userService = useMemo(() => new UserService(), [])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        if (error) setError(null)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            if (isLogin) {
                // Perform Login
                const user = await userService.login(formData.username, formData.password)
                onLogin(user)
            } else {
                // Perform Registration
                const newUser = await userService.register(formData)
                // Automatically log them in after registration
                onLogin({ user_name: newUser.user_name, first_name: newUser.first_name, last_name: newUser.last_name })
            }
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="auth-overlay">
            <div className="auth-container">
                <div className="auth-header">
                    <h1>FranchiseFlow 🚍</h1>
                    <p>{isLogin ? 'Welcome back, please log in.' : 'Create a new operator account.'}</p>
                </div>

                {error && <div className="auth-error">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    {!isLogin && (
                        <div className="auth-row">
                            <div className="auth-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required={!isLogin} />
                            </div>
                            <div className="auth-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required={!isLogin} />
                            </div>
                        </div>
                    )}

                    {!isLogin && (
                        <div className="auth-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required={!isLogin} />
                        </div>
                    )}

                    <div className="auth-group">
                        <label>Username</label>
                        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                    </div>

                    <div className="auth-group password-group">
                        <label>Password</label>
                        <div className="password-input-wrapper">
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                            />
                            <button 
                                type="button" 
                                className="password-toggle" 
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? '👁️' : '👁️‍🗨️'}
                            </button>
                        </div>
                    </div>

                    <button type="submit" className="auth-submit" disabled={loading}>
                        {loading ? 'Processing...' : (isLogin ? 'Sign In' : 'Register')}
                    </button>
                </form>

                <div className="auth-footer">
                    <button type="button" className="auth-switch" onClick={() => setIsLogin(!isLogin)}>
                        {isLogin ? "Don't have an account? Register" : "Already have an account? Log In"}
                    </button>
                </div>
            </div>
        </div>
    )
}
