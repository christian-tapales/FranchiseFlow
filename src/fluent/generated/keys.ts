import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: 'ab17fc1ce3fc40b5b73c1ca5d5f29f36'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '07cba32e7b4246c1b6e7bb733880c845'
                    }
                }
                composite: [
                    {
                        table: 'sys_ui_page'
                        id: '8703e363cc954b7eba4895e4ba59e8cb'
                        key: {
                            endpoint: 'x_1985693_franchis_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'b6053b2cf3654b8abe7e0c9dccc78e61'
                        key: {
                            name: 'x_1985693_franchis/main'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'e87f6cf7cc474deeb1626c9622be2ce5'
                        key: {
                            name: 'x_1985693_franchis/main.js.map'
                        }
                    },
                ]
            }
        }
    }
}
