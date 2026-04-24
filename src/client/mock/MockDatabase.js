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

// Separate mock databases to simulate different government agencies
export const MOCK_LTO_DATABASE = [
    {
        plate_number: 'CBA-1234',
        region: 'region_3',
        or_number: '12345-0987654321-12',
        cr_number: '1234-5-678-9012345'
    },
    {
        plate_number: 'NXL-9988',
        region: 'ncr',
        or_number: '00000-1111111111-22',
        cr_number: '9876-5-432-1098765'
    },
    {
        plate_number: 'NDS-3456',
        region: 'ncr',
        or_number: '12345-0987654321-12',
        cr_number: '1234-5-678-9012345'
    },
    {
        plate_number: 'GYW-9012',
        region: 'region_7',
        or_number: '230100457',
        cr_number: '31456789-1'
    },
    {
        plate_number: '123-NSK',
        region: 'ncr',
        or_number: '99999-8888888888-77',
        cr_number: '5555-4-333-2222222'
    },
    {
        plate_number: 'YAH-555',
        region: 'car',
        or_number: '99999-8888888888-77',
        cr_number: '5555-4-333-2222222'
    }
]

export const MOCK_DTI_DATABASE = [
    '123456789012', // Linked to CBA-1234 operator
    '987654321098', // Linked to NXL-9988 operator
    '5419876',      // Linked to NDS-3456 operator
    '9023830840983',// Linked to GYW-9012 operator
    '5418123',      // Linked to 123-NSK operator
    '555555555555', // Linked to YAH-555 operator
    '21351235',
    '7801625',
]

export const validateApplication = (formData) => {
    if (!formData.plate_number) return null

    // Normalize plate by removing spaces and dashes for robust comparison
    const normalizedInputPlate = formData.plate_number.replace(/[^A-Z0-9]/gi, '').toUpperCase()

    // 1. Check if plate number exists in our mock LTO DB
    const ltoRecord = MOCK_LTO_DATABASE.find(
        record => record.plate_number.replace(/[^A-Z0-9]/gi, '').toUpperCase() === normalizedInputPlate
    )

    const isRenewalOrCancellation = ['renewal', 'cancellation'].includes(formData.request_type?.toLowerCase())
    const isRegistration = formData.request_type?.toLowerCase() === 'registration'

    if (ltoRecord) {

        // If it exists in LTO DB, ensure region matches the DB record
        if (ltoRecord.region !== formData.region) {
            return `Data Mismatch: This plate number is registered in ${ltoRecord.region}, not ${formData.region}.`
        }

        // Validate OR and CR against LTO Database
        if (formData.or_number && formData.or_number !== ltoRecord.or_number) {
            return `Document Mismatch: The provided OR Number does not match LTO records for this vehicle.`
        }
        if (formData.cr_number && formData.cr_number !== ltoRecord.cr_number) {
            return `Document Mismatch: The provided CR Number does not match LTO records for this vehicle.`
        }
    } else {
        if (isRenewalOrCancellation) {
            return `Record Not Found: Cannot process a ${formData.request_type} because this plate number does not exist in the LTO Database.`
        }

        // If it doesn't exist in the mock DB, we still enforce the physical prefix rule
        // Extract only the letters to support formats like 232-GZL where numbers come first
        const lettersOnly = formData.plate_number.replace(/[^A-Z]/gi, '')
        const firstLetter = lettersOnly.charAt(0).toUpperCase()
        const validPrefixes = REGION_PREFIXES[formData.region]

        if (validPrefixes && !validPrefixes.includes(firstLetter)) {
            return `Format Error: The alphabetic part of plate numbers in this region must start with one of: ${validPrefixes.join(', ')}`
        }
    }

    // 2. Validate DTI/SEC Number against DTI Database
    if (formData.dti_sec_registration_number) {
        const dtiExists = MOCK_DTI_DATABASE.includes(formData.dti_sec_registration_number)
        if (!dtiExists) {
            return `Verification Failed: The provided Business Name No. or SEC Registration No. (${formData.dti_sec_registration_number}) does not exist in the DTI/SEC Database.`
        }
    }

    return null // No errors
}
