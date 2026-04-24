import { Table, ChoiceColumn, StringColumn, ReferenceColumn, DueDateColumn } from '@servicenow/sdk/core'

export const x_1985693_franchis_franchise_request = Table({
    actions: ['read', 'update', 'create'],
    allowClientScripts: true,
    allowNewFields: true,
    allowUiActions: true,
    allowWebServiceAccess: true,
    autoNumber: {
        prefix: 'FRN',
    },
    extends: 'task',
    label: 'Franchise Request',
    name: 'x_1985693_franchis_franchise_request',
    schema: {
        ai_status: ChoiceColumn({
            choices: {
                flagged: {
                    label: 'Flagged',
                    sequence: 2,
                },
                pending: {
                    label: 'Pending',
                    sequence: 0,
                },
                verified: {
                    label: 'Verified',
                    sequence: 1,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    label: 'AI Status',
                    plural: 'AI Status',
                },
            ],
        }),
        request_type: ChoiceColumn({
            choices: {
                verification: {
                    label: 'Verification',
                    sequence: 0,
                },
                extension: {
                    label: 'Extension',
                    sequence: 1,
                },
                substitution: {
                    label: 'Substitution',
                    sequence: 2,
                },
                registration: {
                    label: 'Registration',
                    sequence: 0,
                },
                cancellation: {
                    label: 'Cancellation',
                    sequence: 2,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    label: 'Request Type',
                },
            ],
        }),
        or_number: StringColumn({
            label: [
                {
                    label: 'OR Number',
                    plural: 'OR Numbers',
                },
            ],
        }),
        cr_number: StringColumn({
            label: [
                {
                    label: 'CR Number',
                    plural: 'CR Numbers',
                },
            ],
        }),
        dti_sec_registration_number: StringColumn({
            label: [
                {
                    label: 'DTI / SEC Registration Number',
                    plural: 'DTI / SEC Registration Numbers',
                },
            ],
        }),
        franchise_type: ChoiceColumn({
            choices: {
                taxi_regular_airport: {
                    label: 'Taxi (Regular / Airport)',
                    sequence: 3,
                },
                truck_for_hire: {
                    label: 'Truck-for-Hire',
                    sequence: 6,
                },
                uv_express: {
                    label: 'UV Express',
                    sequence: 5,
                },
                bus_city_provincial: {
                    label: 'Bus ( City / Provincial )',
                    sequence: 2,
                },
                puv_public_utility_vehicle: {
                    label: 'PUV (Public Utility Vehicle)',
                    sequence: 1,
                },
                tnvs_transport_network_vehicle_service: {
                    label: 'TNVS ( Transport Network Vehicle Service )',
                    sequence: 4,
                },
                puj_public_utility_jeepney: {
                    label: 'PUJ (Public Utility Jeepney)',
                    sequence: 0,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    label: 'Franchise Type',
                    plural: 'Franchise Types',
                },
            ],
        }),
        operator_name: ReferenceColumn({
            label: [
                {
                    label: 'Operator Name',
                    plural: 'Operator Names',
                },
            ],
            referenceTable: 'sys_user',
        }),
        region: ChoiceColumn({
            choices: {
                nir: {
                    label: 'NIR',
                    sequence: 17,
                },
                region_1: {
                    label: 'Region 1',
                    sequence: 2,
                },
                region_8: {
                    label: 'Region 8',
                    sequence: 10,
                },
                mimaropa_region_4_b: {
                    label: 'MIMAROPA / Region 4 - B',
                    sequence: 6,
                },
                region_7: {
                    label: 'Region 7',
                    sequence: 9,
                },
                region_4_a: {
                    label: 'Region 4 - A',
                    sequence: 5,
                },
                ncr: {
                    label: 'NCR',
                    sequence: 0,
                },
                car: {
                    label: 'CAR',
                    sequence: 1,
                },
                barmm: {
                    label: 'BARMM',
                    sequence: 16,
                },
                region_11: {
                    label: 'Region 11',
                    sequence: 13,
                },
                region_13: {
                    label: 'Region 13',
                    sequence: 15,
                },
                region_10: {
                    label: 'Region 10',
                    sequence: 12,
                },
                region_6: {
                    label: 'Region 6',
                    sequence: 8,
                },
                region_3: {
                    label: 'Region 3',
                    sequence: 4,
                },
                region_5: {
                    label: 'Region 5',
                    sequence: 7,
                },
                region_2: {
                    label: 'Region 2',
                    sequence: 3,
                },
                region_12: {
                    label: 'Region 12',
                    sequence: 14,
                },
                region_9: {
                    label: 'Region 9',
                    sequence: 11,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    label: 'Region',
                    plural: 'Regions',
                },
            ],
        }),
        garage_address: StringColumn({
            label: [
                {
                    label: 'Garage Address',
                    plural: 'Garage Address',
                },
            ],
        }),
        plate_number: StringColumn({
            label: [
                {
                    label: 'Plate Number',
                    plural: 'Plate Numbers',
                },
            ],
        }),
        officer_remarks: StringColumn({
            label: [
                {
                    label: 'Officer Remarks',
                    plural: 'Officer Remarks',
                },
            ],
            maxLength: 1000,
        }),
        progress: ChoiceColumn({
            choices: {
                done: {
                    label: 'Done',
                    sequence: 3,
                },
                ltfrb_review: {
                    label: 'LTFRB Review',
                    sequence: 2,
                },
                draft: {
                    label: 'Draft',
                    sequence: 0,
                },
                ai_check: {
                    label: 'AI Check',
                    sequence: 1,
                },
            },
            dropdown: 'dropdown_without_none',
            label: [
                {
                    label: 'Progress',
                    plural: 'Progress',
                },
            ],
        }),
        old: StringColumn({
            label: [
                {
                    label: 'Old',
                    plural: 'Olds',
                },
            ],
        }),
        expiration_date: DueDateColumn({
            label: [
                {
                    label: 'Expiration Date',
                    plural: 'Expiration Dates',
                },
            ],
        }),
    },
})
