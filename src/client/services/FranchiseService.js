export class FranchiseService {
    constructor() {
        this.tableName = 'x_1985693_franchis_franchise_request'
    }

    // Return franchises, filtered if user is an operator
    async list(currentUser) {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_display_value', 'all')
            searchParams.set('sysparm_fields', 'sys_id,number,plate_number,request_type,progress,expiration_date,opened_at,region,franchise_type,operator_name,cr_number,or_number,dti_sec_registration_number,ai_status,officer_remarks')
            
            let query = 'ORDERBYDESCopened_at'
            if (currentUser && !currentUser.isOfficer) {
                // The Operator Name field in ServiceNow is a Reference to the sys_user table.
                // We must query using the user's sys_id, not their text name or sys_created_by.
                query = `operator_name=${currentUser.sys_id}^ORDERBYDESCopened_at`
            }
            
            searchParams.set('sysparm_query', query)

            const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            const { result } = await response.json()
            return result || []
        } catch (error) {
            console.error('Error fetching franchises:', error)
            throw error
        }
    }

    // Get a single franchise by sys_id
    async get(sysId) {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_display_value', 'all')

            const response = await fetch(`/api/now/table/${this.tableName}/${sysId}?${searchParams.toString()}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            const { result } = await response.json()
            return result
        } catch (error) {
            console.error(`Error fetching franchise ${sysId}:`, error)
            throw error
        }
    }

    // Create a new franchise
    async create(data) {
        try {
            const response = await fetch(`/api/now/table/${this.tableName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
                body: JSON.stringify({
                    ...data,
                    caller_id: '6816f79cc0a8016401c5a33be04be441',
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            return response.json()
        } catch (error) {
            console.error('Error creating franchise:', error)
            throw error
        }
    }

    // Update an franchise
    async update(sysId, data) {
        try {
            const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            return response.json()
        } catch (error) {
            console.error(`Error updating franchise ${sysId}:`, error)
            throw error
        }
    }

    // Delete an franchise
    async delete(sysId) {
        try {
            const response = await fetch(`/api/now/table/${this.tableName}/${sysId}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || `HTTP error ${response.status}`)
            }

            return response.ok
        } catch (error) {
            console.error(`Error deleting franchise ${sysId}:`, error)
            throw error
        }
    }
}
