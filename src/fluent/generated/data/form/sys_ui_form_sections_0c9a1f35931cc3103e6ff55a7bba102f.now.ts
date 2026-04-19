import { Form, default_view } from '@servicenow/sdk/core'

Form({
    table: 'x_1985693_franchis_franchise_request',
    view: default_view,
    sections: [
        {
            caption: 'Application Information',
            content: [
                {
                    layout: 'two-column',
                    leftElements: [
                        {
                            field: 'number',
                            type: 'table_field',
                        },
                        {
                            field: 'operator_name',
                            type: 'table_field',
                        },
                        {
                            field: 'franchise_type',
                            type: 'table_field',
                        },
                        {
                            field: 'dti_sec_registration_number',
                            type: 'table_field',
                        },
                        {
                            field: 'garage_address',
                            type: 'table_field',
                        },
                    ],
                    rightElements: [
                        {
                            field: 'region',
                            type: 'table_field',
                        },
                        {
                            field: 'or_number',
                            type: 'table_field',
                        },
                        {
                            field: 'cr_number',
                            type: 'table_field',
                        },
                        {
                            field: 'plate_number',
                            type: 'table_field',
                        },
                        {
                            field: 'active',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
        {
            caption: 'Official Review',
            content: [
                {
                    layout: 'one-column',
                    elements: [
                        {
                            field: 'state',
                            type: 'table_field',
                        },
                        {
                            field: 'officer_remarks',
                            type: 'table_field',
                        },
                        {
                            field: 'ai_status',
                            type: 'table_field',
                        },
                    ],
                },
            ],
        },
    ],
})
