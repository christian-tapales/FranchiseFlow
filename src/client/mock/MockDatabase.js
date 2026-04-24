export const REGION_PREFIXES = {
    ncr: ['N', 'P', 'Q', 'T', 'U'],
    car: ['Y'],
    region_1: ['A'],
    region_2: ['B'],
    region_3: ['C'],
    region_4_a: ['D'],
    region_4_b: ['V'],
    region_5: ['E'],
    region_6: ['F'],
    region_7: ['G'],
    region_8: ['H'],
    region_9: ['J'],
    region_10: ['K'],
    region_11: ['L'],
    region_12: ['M'],
    region_13: ['Z'],
    barmm: ['X']
}

// Sample correctly formatted mock database
export const MOCK_LTFRB_DATABASE = [
    {
        plate_number: 'CBA-1234',
        region: 'region_3', // Starts with C
        or_number: '12345-0987654321-12',
        cr_number: '1234-5-678-9012345',
        dti_sec_registration_number: '123456789012'
    },
    {
        plate_number: 'NXL-9988',
        region: 'ncr', // Starts with N, P, Q, T, U, W, X
        or_number: '00000-1111111111-22',
        cr_number: '9876-5-432-1098765',
        dti_sec_registration_number: '987654321098'
    },
    {
        plate_number: 'NDS-3456',
        region: 'ncr', // Starts with N
        or_number: '12345-0987654321-12',
        cr_number: '1234-5-678-9012345',
        dti_sec_registration_number: '5419876' // Sync with uploaded DTI sample
    },
    {
        plate_number: 'GYW-9012', // From training material image
        region: 'region_7', // Starts with G
        or_number: '230100457',
        cr_number: '31456789-1',
        dti_sec_registration_number: '9023830840983'
    },
    {
        plate_number: '123-NSK', // From Dashboard screenshot
        region: 'ncr', // Starts with N
        or_number: '99999-8888888888-77',
        cr_number: '5555-4-333-2222222',
        dti_sec_registration_number: '5418123' // Sync with uploaded DTI sample #2
    },
    {
        plate_number: 'YAH-555',
        region: 'car', // Starts with Y
        or_number: '99999-8888888888-77',
        cr_number: '5555-4-333-2222222',
        dti_sec_registration_number: '555555555555'
    }
]

export const validateApplication = (formData) => {
    if (!formData.plate_number) return null

    // Normalize plate by removing spaces and dashes for robust comparison
    const normalizedInputPlate = formData.plate_number.replace(/[^A-Z0-9]/gi, '').toUpperCase()

    // 1. Check if plate number exists in our mock DB
    const dbRecord = MOCK_LTFRB_DATABASE.find(
        record => record.plate_number.replace(/[^A-Z0-9]/gi, '').toUpperCase() === normalizedInputPlate
    )

    if (dbRecord) {
        // If it exists in DB, ensure region matches the DB record
        if (dbRecord.region !== formData.region) {
            return `Mismatch Error: The plate number ${formData.plate_number.toUpperCase()} is registered in a different region. Please correct the selected Region.`
        }

        // Validate OR / CR / DTI if provided
        if (formData.or_number && formData.or_number !== dbRecord.or_number) {
            return `Validation Error: OR Number does not match LTFRB records for this plate.`
        }
        if (formData.cr_number && formData.cr_number !== dbRecord.cr_number) {
            return `Validation Error: CR Number does not match LTFRB records for this plate.`
        }
        if (formData.dti_sec_registration_number && formData.dti_sec_registration_number !== dbRecord.dti_sec_registration_number) {
            return `Validation Error: DTI/SEC Registration Number does not match LTFRB records.`
        }

    } else {
        // If it doesn't exist in the mock DB, we still enforce the physical prefix rule
        // Extract only the letters to support formats like 232-GZL where numbers come first
        const lettersOnly = formData.plate_number.replace(/[^A-Z]/gi, '')
        const firstLetter = lettersOnly.charAt(0).toUpperCase()
        const validPrefixes = REGION_PREFIXES[formData.region]

        if (validPrefixes && !validPrefixes.includes(firstLetter)) {
            return `Format Error: The alphabetic part of plate numbers in this region must start with: ${validPrefixes.join(', ')}`
        }
    }

    return null // No errors
}
