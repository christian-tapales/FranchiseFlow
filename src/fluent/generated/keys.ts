import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    '0d75b23d93d4c3103e6ff55a7bba10a3': {
                        table: 'sys_hub_action_instance_v2'
                        id: '0d75b23d93d4c3103e6ff55a7bba10a3'
                    }
                    '0d9e26bd9394c3103e6ff55a7bba108a': {
                        table: 'sys_security_acl'
                        id: '0d9e26bd9394c3103e6ff55a7bba108a'
                    }
                    '13a9afb1939cc3103e6ff55a7bba108f': {
                        table: 'sys_app_module'
                        id: '13a9afb1939cc3103e6ff55a7bba108f'
                    }
                    '2a49a3b1939cc3103e6ff55a7bba1049': {
                        table: 'sys_app_application'
                        id: '2a49a3b1939cc3103e6ff55a7bba1049'
                    }
                    '4d9e26bd9394c3103e6ff55a7bba10db': {
                        table: 'sys_security_acl'
                        id: '4d9e26bd9394c3103e6ff55a7bba10db'
                    }
                    '4d9e26bd9394c3103e6ff55a7bba10e4': {
                        table: 'sys_security_acl'
                        id: '4d9e26bd9394c3103e6ff55a7bba10e4'
                    }
                    '6e586731939cc3103e6ff55a7bba1020': {
                        table: 'sys_app_application'
                        id: '6e586731939cc3103e6ff55a7bba1020'
                        deleted: true
                    }
                    '84c1fbb193dcc3103e6ff55a7bba10e4': {
                        table: 'sys_script_client'
                        id: '84c1fbb193dcc3103e6ff55a7bba10e4'
                        deleted: true
                    }
                    '859e26bd9394c3103e6ff55a7bba109e': {
                        table: 'sys_security_acl'
                        id: '859e26bd9394c3103e6ff55a7bba109e'
                    }
                    '859e26bd9394c3103e6ff55a7bba10a7': {
                        table: 'sys_security_acl'
                        id: '859e26bd9394c3103e6ff55a7bba10a7'
                    }
                    a2c4fab993d4c3103e6ff55a7bba1087: {
                        table: 'sys_hub_trigger_instance_v2'
                        id: 'a2c4fab993d4c3103e6ff55a7bba1087'
                    }
                    bom_json: {
                        table: 'sys_module'
                        id: 'ab17fc1ce3fc40b5b73c1ca5d5f29f36'
                    }
                    c09ea2bd9394c3103e6ff55a7bba10a6: {
                        table: 'sys_wizard_answer'
                        id: 'c09ea2bd9394c3103e6ff55a7bba10a6'
                    }
                    c87b33c293dc47103e6ff55a7bba105d: {
                        table: 'sysrule_view'
                        id: 'c87b33c293dc47103e6ff55a7bba105d'
                    }
                    cd9e26bd9394c3103e6ff55a7bba1080: {
                        table: 'sys_security_acl'
                        id: 'cd9e26bd9394c3103e6ff55a7bba1080'
                    }
                    dec4fab993d4c3103e6ff55a7bba1001: {
                        table: 'sys_hub_flow'
                        id: 'dec4fab993d4c3103e6ff55a7bba1001'
                    }
                    e8eebf4a93dc47103e6ff55a7bba103c: {
                        table: 'sys_script_client'
                        id: 'e8eebf4a93dc47103e6ff55a7bba103c'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '07cba32e7b4246c1b6e7bb733880c845'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary'
                        id: '0095d77d7dbc40dc93df4ea61047b9cc'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'cr_number'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02468465bf3a42b9a57a4d37f2bd4d3d'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                            value: 'verification'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '02fe6bb1910b4e95a5545fcdc7669b03'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                            value: 'extension'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '089a1f35931cc3103e6ff55a7bba108d'
                        key: {
                            sys_ui_section: {
                                id: '889a1f35931cc3103e6ff55a7bba102c'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'officer_remarks'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '08e18c6998cf487797f114d12ed7abdf'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                            value: 'flagged'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '099e26bd9394c3103e6ff55a7bba10d5'
                        key: {
                            sys_security_acl: '859e26bd9394c3103e6ff55a7bba109e'
                            sys_user_role: {
                                id: '419e26bd9394c3103e6ff55a7bba1073'
                                key: {
                                    name: 'x_1985693_franchis.operator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '099e26bd9394c3103e6ff55a7bba10de'
                        key: {
                            sys_security_acl: '859e26bd9394c3103e6ff55a7bba10a7'
                            sys_user_role: {
                                id: 'c99e26bd9394c3103e6ff55a7bba1065'
                                key: {
                                    name: 'x_1985693_franchis.officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0a83460880e643e99d0cdff6128ef855'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'officer_remarks'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0a98a296316740c69a9a348e4069d291'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '0c087b31931007103e6ff55a7bba10fb'
                        deleted: true
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'x_1985693_franchis_franchise_request'
                            view: {
                                id: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                key: {
                                    name: 'officer'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '0c9a1f35931cc3103e6ff55a7bba102f'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '0cb0dc2479fb4742acc79b4a819e66b6'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '0cbc2a13ccc442a09a4d736cc61bf8b0'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '134948671774425d8c64a423edf6f9e5'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'truck_for_hire'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1574a78cd7054c308cafdf585ccf2a29'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '159eb294273e44cda652f5a1f4cd1e0a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'dti_sec_registration_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1730820da3314f09a3a64609e448b8b1'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '182bc140386e44c6b629813471e82466'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'car'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '18be137d931cc3103e6ff55a7bba100d'
                        deleted: true
                        key: {
                            ui_policy: '3fda5b75931cc3103e6ff55a7bba1039'
                            field: 'officer_remarks'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '190e893023ba436a82469952aa81c87d'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '1b11fc8063f84caabdda0de674461b26'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '1fe80251dd0a49d28191afd6c6b2daf6'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '20379c56b43d405bb65b2ff1704d2b38'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '211232ba4d6e4a4a8c59051ddcdd5338'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '213e40d0d59b40adaba6b446ba45bab9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'puj_public_utility_jeepney'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '25769b4f1db447749fb898fde4b493f6'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '29220812931087103e6ff55a7bba106d'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2cddd6b3476a492fa0faeac95c050906'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '2d220812931087103e6ff55a7bba106a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '2f4fb40c1e53430b8c42087f105b0fc8'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'or_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3128f371931007103e6ff55a7bba1005'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '32d7fffd93dcc3103e6ff55a7bba1058'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3309b7f1931007103e6ff55a7bba1058'
                        key: {
                            sys_ui_section: {
                                id: 'f709b7f1931007103e6ff55a7bba1009'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ai_status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '364003719358c3103e6ff55a7bba10f6'
                        deleted: true
                        key: {
                            model: 'fe4003719358c3103e6ff55a7bba10d4'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '36d7fffd93dcc3103e6ff55a7bba1055'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3709b7f1931007103e6ff55a7bba1024'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: '3928b371931007103e6ff55a7bba10f7'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            view: {
                                id: 'fd28b371931007103e6ff55a7bba10ed'
                                key: {
                                    name: 'Operator_view_'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3928f371931007103e6ff55a7bba100a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registratoin_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3928f371931007103e6ff55a7bba101e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7128b371931007103e6ff55a7bba10f6'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3b09b7f1931007103e6ff55a7bba1035'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3d28f371931007103e6ff55a7bba1007'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3ed7fffd93dcc3103e6ff55a7bba105a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f09b7f1931007103e6ff55a7bba1032'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '3f09b7f1931007103e6ff55a7bba103d'
                        key: {
                            sys_ui_section: {
                                id: 'f709b7f1931007103e6ff55a7bba1009'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_policy'
                        id: '3fda5b75931cc3103e6ff55a7bba1039'
                        deleted: true
                        key: {
                            table: 'x_1985693_franchis_franchise_request'
                            short_description: 'Hide Official Review Section for Operators'
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: '419e26bd9394c3103e6ff55a7bba1073'
                        key: {
                            name: 'x_1985693_franchis.operator'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '420dc5e7fc6047aa8bbf5a49d22098d4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'ncr'
                        }
                    },
                    {
                        table: 'sys_number'
                        id: '449ea2bd9394c3103e6ff55a7bba10c1'
                        key: {
                            category: 'x_1985693_franchis_franchise_request'
                            prefix: 'FRN'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '47153c86a8d24a14a34a8830c5b64108'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '4b0429e3896d4334a1386976d616fe98'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'garage_address'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '4c9a1f35931cc3103e6ff55a7bba108c'
                        key: {
                            sys_ui_section: {
                                id: '889a1f35931cc3103e6ff55a7bba102c'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'state'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '549f57db1b5742fa9f4a692a3fb23855'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '54d2ffb2cbad4133a9cdc0e9c1f91c41'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '58c401262b114fb5902673fc4c8e1a1b'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5938139386044a72abdc281599eb1163'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registration_number'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '59e6dd0b8c7c4e9782592166c6fff234'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'taxi_regular_airport'
                        }
                    },
                    {
                        table: 'ua_table_licensing_config'
                        id: '59fd61e3549945cabab657448070137a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                        }
                    },
                    {
                        table: 'sys_db_object'
                        id: '5a3374b122c443fcb2e379af16d4caae'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '5c4e4c5c97ce4c1f9364b59598998879'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '5d7c1891b5474125ba53fe9a147c90e4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'uv_express'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '61220812931087103e6ff55a7bba106a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registration_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '633348a220024d9387776e43c1ed73df'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '6652d3156ea44bcc9a9eff87fb2e3f27'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'mimaropa_region_4_b'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: '6720affd931cc3103e6ff55a7bba10b9'
                        deleted: true
                        key: {
                            ui_policy: '3fda5b75931cc3103e6ff55a7bba1039'
                            field: 'state'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '67aa2acb63f84ae089426953a0af16c2'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '689ea2bd9394c3103e6ff55a7bba10fc'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Application Information'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '69e6fe188d8446ae81e8de1ffb04fddb'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '69ea5f5ea0554fa491d96b43df7fcf44'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'plate_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '6d220812931087103e6ff55a7bba106c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '6e7e624920a643bd8837fdbc7aa2563b'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'operator_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7128b371931007103e6ff55a7bba10f6'
                        deleted: true
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Official Review'
                            view: {
                                id: 'fd28b371931007103e6ff55a7bba10ed'
                                key: {
                                    name: 'Operator_view_'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7128f371931007103e6ff55a7bba1007'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: '724003719358c3103e6ff55a7bba10d9'
                        deleted: true
                        key: {
                            model: 'fe4003719358c3103e6ff55a7bba10d4'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '72d7fffd93dcc3103e6ff55a7bba105a'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7528f371931007103e6ff55a7bba1004'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '76d7fffd93dcc3103e6ff55a7bba1057'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: '7709b7f1931007103e6ff55a7bba1001'
                        key: {
                            name: 'Officer_view'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '78780a25dc0e483d942339a408361da5'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7b09b7f1931007103e6ff55a7bba1023'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '7b9b39e44a2844d9bc40d979824b9435'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7c4f22c3264a443fa1e714fa2d05907b'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7d28f371931007103e6ff55a7bba1009'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7e421e9ee2c84f318661f76293df1a92'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '7f09b7f1931007103e6ff55a7bba1007'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Application Information'
                            view: {
                                id: '7709b7f1931007103e6ff55a7bba1001'
                                key: {
                                    name: 'Officer_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '7f09b7f1931007103e6ff55a7bba1034'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: '809a1f35931cc3103e6ff55a7bba1051'
                        key: {
                            sys_ui_form: {
                                id: '0c9a1f35931cc3103e6ff55a7bba102f'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '889a1f35931cc3103e6ff55a7bba102c'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '819e26bd9394c3103e6ff55a7bba1096'
                        key: {
                            sys_security_acl: 'cd9e26bd9394c3103e6ff55a7bba1080'
                            sys_user_role: {
                                id: '419e26bd9394c3103e6ff55a7bba1073'
                                key: {
                                    name: 'x_1985693_franchis.operator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: '8413b365ad3e438fb3de589bedf31da4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '8703e363cc954b7eba4895e4ba59e8cb'
                        key: {
                            endpoint: 'x_1985693_franchis_incident_manager.do'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: '889a1f35931cc3103e6ff55a7bba102c'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Official Review'
                            view: {
                                id: 'Default view'
                                key: {
                                    name: 'NULL'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: '899e26bd9394c3103e6ff55a7bba10ed'
                        key: {
                            sys_security_acl: '4d9e26bd9394c3103e6ff55a7bba10db'
                            sys_user_role: {
                                id: '419e26bd9394c3103e6ff55a7bba1073'
                                key: {
                                    name: 'x_1985693_franchis.operator'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8d65d840bc5f4a9f8532fb56831b8dc5'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '8e0dd72a30f1407dab62b682a1b6af26'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_9'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '8f8af18c75d948038c965038bac228f6'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '90e4bfeeeb9641dc99b93c34f1e004a8'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: '964eaaf3309c4c3d8143a2ecebf19b29'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: '99da9f4cfc184723b3d8af6911af19d1'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'or_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: '9a46d8435573443cbedc389bb49080ed'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9b35db09e483417196b4b6d00fe4af74'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'nir'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: '9e20c0cfc3fe4fca8e17dfcceb5187ba'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                            value: 'pending'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a0019a594e5d4623a108aa8b594d4ac9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                            value: 'substitution'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a1220812931087103e6ff55a7bba106c'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a14bd21fc4bc45f3a0e14b42bc97e2b8'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'a4b8311e75534df6ba0fea3a69a798b6'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a5220812931087103e6ff55a7bba1069'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_choice_set'
                        id: 'a5ae1d94d0f1461f903bd52943df285a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'a8120a9e8b784e6785329873c639d8c4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'barmm'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'a9733343e33c4b5a9fd287c4912381e5'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'aa822deeae1d4fcb9ca6b875c877d4ab'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'aac4fab993d4c3103e6ff55a7bba1041'
                        deleted: true
                        key: {
                            model: 'dec4fab993d4c3103e6ff55a7bba1001'
                            element: 'table_name'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'aca3e3b6fd7246ab9e433e3c3ea60349'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ad220812931087103e6ff55a7bba106e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'adcb87f59398c3103e6ff55a7bba103f'
                        deleted: true
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'dti_sec_registratoin_number'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b128f371931007103e6ff55a7bba1009'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'or_number'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'b309b7f1931007103e6ff55a7bba101c'
                        key: {
                            sys_ui_form: {
                                id: 'bf09b7f1931007103e6ff55a7bba100a'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b309b7f1931007103e6ff55a7bba1034'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b528f371931007103e6ff55a7bba1006'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '4'
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
                        table: 'sys_documentation'
                        id: 'b64003719358c3103e6ff55a7bba10e5'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_fe4003719358c3103e6ff55a7bba10d4'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6aa11300afd463cb53220f9318c7c01'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                        deleted: true
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'NULL'
                            view: {
                                id: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                key: {
                                    name: 'officer'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b6d7fffd93dcc3103e6ff55a7bba1059'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'b8772fb4aef84c3d9edc90681064fb32'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'puv_public_utility_vehicle'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b928f371931007103e6ff55a7bba1003'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'b94aae9632ce4ba6bcfcbe260e250116'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registration_number'
                            position: '11'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bad7fffd93dcc3103e6ff55a7bba1056'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bb09b7f1931007103e6ff55a7bba1025'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'bb471ceb4f83457d897bc8dc9cf4d09a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bccaac0e5ff54b789ce8e9fae1f8cf54'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.begin_split'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'bd28b371931007103e6ff55a7bba10fc'
                        key: {
                            sys_ui_form: {
                                id: '3928b371931007103e6ff55a7bba10f7'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd28f371931007103e6ff55a7bba101f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7128b371931007103e6ff55a7bba10f6'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ai_status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd7f2d5764a34092aae9e01068c75b14'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bd83b5f9d5ad4606ab997d910b1e146f'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_form'
                        id: 'bf09b7f1931007103e6ff55a7bba100a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            view: {
                                id: '7709b7f1931007103e6ff55a7bba1001'
                                key: {
                                    name: 'Officer_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'bf09b7f1931007103e6ff55a7bba1022'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c09a1f35931cc3103e6ff55a7bba108e'
                        key: {
                            sys_ui_section: {
                                id: '889a1f35931cc3103e6ff55a7bba102c'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'ai_status'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'c09ea2bd9394c3103e6ff55a7bba1081'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'NULL'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'c19e26bd9394c3103e6ff55a7bba10ea'
                        key: {
                            sys_security_acl: '4d9e26bd9394c3103e6ff55a7bba10e4'
                            sys_user_role: {
                                id: 'c99e26bd9394c3103e6ff55a7bba1065'
                                key: {
                                    name: 'x_1985693_franchis.officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'c21c1fd4ba7341f69c45d7000c9b7761'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'c56d34b377c64e6eb51b353878dbaa16'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_6'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'c89a1f35931cc3103e6ff55a7bba104f'
                        key: {
                            sys_ui_form: {
                                id: '0c9a1f35931cc3103e6ff55a7bba102f'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_user_role'
                        id: 'c99e26bd9394c3103e6ff55a7bba1065'
                        key: {
                            name: 'x_1985693_franchis.officer'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cb56ebb7cbd24385915863b080e3d4a9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'cbf7a393b8e846a6afaf220c1d603667'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_3'
                        }
                    },
                    {
                        table: 'sys_security_acl_role'
                        id: 'cd9e26bd9394c3103e6ff55a7bba1092'
                        key: {
                            sys_security_acl: '0d9e26bd9394c3103e6ff55a7bba108a'
                            sys_user_role: {
                                id: 'c99e26bd9394c3103e6ff55a7bba1065'
                                key: {
                                    name: 'x_1985693_franchis.officer'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'cdcba64250a548f9b2aeb13e085caf46'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'garage_address'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd28ceee8ddf54a2986485091734e5776'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd2e1be127e1b412ea4cd4f24e5c30659'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '8'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'd465d4c7068c46cb80ef5a9cd6c75c90'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'active'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'd73cd1486cad4e7093f4a78da731bdf9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'bus_city_provincial'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'db4a14e11f944aa9bceaacaa1841e857'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'cr_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'dd922a768fe44fca96a5253e318326e5'
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: '7709b7f1931007103e6ff55a7bba1001'
                                        key: {
                                            name: 'Officer_view'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'cr_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e013c99da7d343bc99deb7f3cdd5358a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'officer_remarks'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e1220812931087103e6ff55a7bba106e'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '9'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e2c4fab993d4c3103e6ff55a7bba1040'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_dec4fab993d4c3103e6ff55a7bba1001'
                            element: 'current'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'e339561e7e1547ffa1c49300332565d9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'plate_number'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'e50371ce17a046208f13ef54a41e8de3'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'ai_status'
                            value: 'verified'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e5220812931087103e6ff55a7bba1067'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e5220812931087103e6ff55a7bba106b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '5'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'e657990ca9294fc29e0b88f41ab728e1'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'operator_name'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'e87f6cf7cc474deeb1626c9622be2ce5'
                        key: {
                            name: 'x_1985693_franchis/main.js.map'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'e9220812931087103e6ff55a7bba1068'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'Default view'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'operator_name'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_hub_flow_input'
                        id: 'eac4fab993d4c3103e6ff55a7bba1037'
                        deleted: true
                        key: {
                            model: 'dec4fab993d4c3103e6ff55a7bba1001'
                            element: 'current'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ebe422a829e1484884dccb342778c2a9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'garage_address'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'ee2d683ee32e4e1dac9f87f2efc5341b'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_4_a'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'eec4fab993d4c3103e6ff55a7bba1044'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_dec4fab993d4c3103e6ff55a7bba1001'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'eecd828fca7e4f4ba95be7d5317a4e7a'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'NULL'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'ef35c6ebb1794f0f95ee352971cf44ef'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'request_type'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f0469a3780954c3b898e902a1a0344a4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_12'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f128f371931007103e6ff55a7bba101f'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7128b371931007103e6ff55a7bba10f6'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'officer_remarks'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f189426747f2478ab7f13abea1551d80'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_2'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f24003719358c3103e6ff55a7bba10fd'
                        deleted: true
                        key: {
                            name: 'var__m_sys_hub_flow_input_fe4003719358c3103e6ff55a7bba10d4'
                            element: 'table_name'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f309b7f1931007103e6ff55a7bba1036'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registratoin_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f4300ec4b9694a23a132ef02d055cc62'
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'fd28b371931007103e6ff55a7bba10ed'
                                        key: {
                                            name: 'Operator_view_'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: '.end_split'
                            position: '12'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f528b371931007103e6ff55a7bba10f4'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Application Information'
                            view: {
                                id: 'fd28b371931007103e6ff55a7bba10ed'
                                key: {
                                    name: 'Operator_view_'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f528f371931007103e6ff55a7bba1008'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'region'
                            position: '7'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f568ad99fecc45cd973c25c6d9234fc8'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_13'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f619167d4f0149fb94a686389f57e0fc'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registration_number'
                            position: '4'
                        }
                    },
                    {
                        table: 'sys_dictionary'
                        id: 'f63e6fb031724ef598bba6075faf80f6'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'dti_sec_registration_number'
                        }
                    },
                    {
                        table: 'sys_documentation'
                        id: 'f6b2706c169c430593dd5ac719ccbac5'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            language: 'en'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                        deleted: true
                        key: {
                            name: 'officer'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f6d7fffd93dcc3103e6ff55a7bba105b'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'dti_sec_registratoin_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6dc6f05f43342dc81236e464b146664'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_1'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'f6dc88781f3a49ea9cdd7e20ba1222d9'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'franchise_type'
                            value: 'tnvs_transport_network_vehicle_service'
                        }
                    },
                    {
                        table: 'sys_ui_section'
                        id: 'f709b7f1931007103e6ff55a7bba1009'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            caption: 'Official Review'
                            view: {
                                id: '7709b7f1931007103e6ff55a7bba1001'
                                key: {
                                    name: 'Officer_view'
                                }
                            }
                            sys_domain: 'global'
                        }
                    },
                    {
                        table: 'sys_ui_form_section'
                        id: 'f709b7f1931007103e6ff55a7bba101d'
                        key: {
                            sys_ui_form: {
                                id: 'bf09b7f1931007103e6ff55a7bba100a'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            sys_ui_section: {
                                id: 'f709b7f1931007103e6ff55a7bba1009'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f709b7f1931007103e6ff55a7bba1033'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f709b7f1931007103e6ff55a7bba103e'
                        key: {
                            sys_ui_section: {
                                id: 'f709b7f1931007103e6ff55a7bba1009'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Official Review'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'officer_remarks'
                            position: '1'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'f928f371931007103e6ff55a7bba1005'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'f528b371931007103e6ff55a7bba10f4'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: 'fd28b371931007103e6ff55a7bba10ed'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '3'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fad7fffd93dcc3103e6ff55a7bba1058'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: '.split'
                            position: '6'
                        }
                    },
                    {
                        table: 'sys_ui_policy_action'
                        id: 'fb00abfd931cc3103e6ff55a7bba100d'
                        deleted: true
                        key: {
                            ui_policy: '3fda5b75931cc3103e6ff55a7bba1039'
                            field: 'ai_status'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fc16d1959f634577b9b77fab0af2622c'
                        key: {
                            sys_ui_section: {
                                id: '689ea2bd9394c3103e6ff55a7bba10fc'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: {
                                        id: 'Default view'
                                        key: {
                                            name: 'NULL'
                                        }
                                    }
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '10'
                        }
                    },
                    {
                        table: 'sys_choice'
                        id: 'fd0a3382dddf45a8bed22f893bb456e7'
                        key: {
                            name: 'x_1985693_franchis_franchise_request'
                            element: 'region'
                            value: 'region_11'
                        }
                    },
                    {
                        table: 'sys_ui_view'
                        id: 'fd28b371931007103e6ff55a7bba10ed'
                        key: {
                            name: 'Operator_view_'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fed7fffd93dcc3103e6ff55a7bba1053'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'number'
                            position: '0'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'fed7fffd93dcc3103e6ff55a7bba1055'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: 'b6d7fffd93dcc3103e6ff55a7bba1051'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'NULL'
                                    view: 'f6d7fbfd93dcc3103e6ff55a7bba100c'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'franchise_type'
                            position: '2'
                        }
                    },
                    {
                        table: 'sys_ui_element'
                        id: 'ff09b7f1931007103e6ff55a7bba1024'
                        deleted: true
                        key: {
                            sys_ui_section: {
                                id: '7f09b7f1931007103e6ff55a7bba1007'
                                key: {
                                    name: 'x_1985693_franchis_franchise_request'
                                    caption: 'Application Information'
                                    view: '7709b7f1931007103e6ff55a7bba1001'
                                    sys_domain: 'global'
                                }
                            }
                            element: 'plate_number'
                            position: '3'
                        }
                    },
                ]
            }
        }
    }
}
