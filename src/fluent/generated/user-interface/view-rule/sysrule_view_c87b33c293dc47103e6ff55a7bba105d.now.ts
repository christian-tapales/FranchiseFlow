import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c87b33c293dc47103e6ff55a7bba105d'],
    table: 'sysrule_view',
    data: {
        active: true,
        advanced: true,
        device_type: 'browser',
        match_conditions: 'ALL',
        name: 'FranchiseFlow Role Switcher',
        order: 100,
        overrides_user_preference: true,
        script: `(function overrideView(view, table) {
    // 1. Check for Officer first (Most privileged role in the workflow)
    if (gs.hasRole('x_1985693_franchis.officer')) {
        answer = "Officer"; 
    } 
    // 2. Then check for Operator
    else if (gs.hasRole('x_1985693_franchis.operator')) {
        answer = "Operator"; 
    } 
    // 3. Fallback for everyone else (Admins, System, etc.)
    else {
        answer = ""; // This defaults to the "Default View"
    }
})(view, table);`,
        sys_domain: 'global',
        sys_domain_path: '/',
        table: 'x_1985693_franchis_franchise_request',
    },
})
