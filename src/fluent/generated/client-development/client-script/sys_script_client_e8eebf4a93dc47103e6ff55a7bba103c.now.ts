import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['e8eebf4a93dc47103e6ff55a7bba103c'],
    type: 'onLoad',
    table: 'x_1985693_franchis_franchise_request',
    isolateScript: true,
    script: Now.include('./sys_script_client_e8eebf4a93dc47103e6ff55a7bba103c.client.js'),
    name: 'Lock Application Fields for Officers',
    description: 'Makes it so that the officer can only read the application form section.',
    uiType: 'all',
})
