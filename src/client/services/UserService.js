export class UserService {
    constructor() {
        this.tableName = 'sys_user'
        this.roleTableName = 'sys_user_has_role'
        this.sysRoleTableName = 'sys_user_role'
        this.operatorRoleName = 'x_1985693_franchis.operator'
        this.officerRoleName = 'x_1985693_franchis.officer'
    }

    // Attempt to log in a user by checking if their username exists
    async login(username, password) {
        try {
            const searchParams = new URLSearchParams()
            searchParams.set('sysparm_query', `user_name=${username}`)
            searchParams.set('sysparm_fields', 'sys_id,user_name,first_name,last_name,email')

            const response = await fetch(`/api/now/table/${this.tableName}?${searchParams.toString()}`, {
                method: 'GET',
                headers: { Accept: 'application/json', 'X-UserToken': window.g_ck },
            })

            if (!response.ok) throw new Error(`HTTP error ${response.status}`)
            const { result } = await response.json()
            
            if (!result || result.length === 0) {
                throw new Error("Invalid username or password.")
            }

            const user = result[0]

            // Check if they are an Officer
            const roleParams = new URLSearchParams()
            roleParams.set('sysparm_query', `user=${user.sys_id}^role.name=${this.officerRoleName}`)
            const roleRes = await fetch(`/api/now/table/${this.roleTableName}?${roleParams.toString()}`, {
                method: 'GET',
                headers: { Accept: 'application/json', 'X-UserToken': window.g_ck }
            })
            
            const roleData = await roleRes.json()
            user.isOfficer = roleData.result && roleData.result.length > 0

            return user
        } catch (error) {
            console.error('Login error:', error)
            throw error
        }
    }

    // Register a new user and assign the Operator role
    async register(userData) {
        try {
            // 1. Create the User in sys_user
            const response = await fetch(`/api/now/table/${this.tableName}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                    'X-UserToken': window.g_ck,
                },
                body: JSON.stringify({
                    user_name: userData.username,
                    first_name: userData.firstName,
                    last_name: userData.lastName,
                    email: userData.email,
                    user_password: userData.password
                }),
            })

            if (!response.ok) {
                const errorData = await response.json()
                throw new Error(errorData.error?.message || "Failed to create user.")
            }

            const { result: newUser } = await response.json()

            // 2. Find the sys_id of the Operator role
            const roleSearch = new URLSearchParams()
            roleSearch.set('sysparm_query', `name=${this.operatorRoleName}`)
            const roleSearchRes = await fetch(`/api/now/table/${this.sysRoleTableName}?${roleSearch.toString()}`, {
                method: 'GET',
                headers: { Accept: 'application/json', 'X-UserToken': window.g_ck }
            })
            const roleSearchData = await roleSearchRes.json()
            
            if (roleSearchData.result && roleSearchData.result.length > 0) {
                const operatorRoleId = roleSearchData.result[0].sys_id
                
                // 3. Assign the Operator role to the new user in sys_user_has_role
                await fetch(`/api/now/table/${this.roleTableName}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Accept: 'application/json',
                        'X-UserToken': window.g_ck,
                    },
                    body: JSON.stringify({
                        user: newUser.sys_id,
                        role: operatorRoleId
                    })
                })
            }

            newUser.isOfficer = false // New users are never officers
            return newUser
        } catch (error) {
            console.error('Registration error:', error)
            throw error
        }
    }
}
