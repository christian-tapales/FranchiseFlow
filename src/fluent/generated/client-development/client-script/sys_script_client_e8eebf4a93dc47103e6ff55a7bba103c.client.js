function onLoad() {
    // This checks the logged-in user's roles
    var isOfficer = g_user.hasRoleExactly('x_1985693_franchis.officer');

    if (isOfficer) {
        // List every field in the Application section using their backend names
        // Pro-tip: Double check these 'u_...' names by right-clicking the labels on your form
        var fields = [
            'operator_name', 
            'plate_number', 
            'cr_number',
            'or_number',
            'garage_address',
			'franchise_type',
			'dti_sec_registration_number',
			'region',
        ]; 
        
        for (var i = 0; i < fields.length; i++) {
            g_form.setReadOnly(fields[i], true);
        }
    }
}