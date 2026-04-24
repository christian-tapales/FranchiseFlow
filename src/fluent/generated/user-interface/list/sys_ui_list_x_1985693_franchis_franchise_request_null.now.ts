import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_1985693_franchis_franchise_request',
    view: default_view,
    columns: ['number', 'operator_name', 'priority', 'state', 'assigned_to', 'short_description', 'sys_class_name'],
})
