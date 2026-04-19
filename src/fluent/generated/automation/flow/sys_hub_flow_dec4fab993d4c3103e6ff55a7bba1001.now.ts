import { Flow, wfa, trigger, action } from '@servicenow/sdk/automation'

Flow(
    {
        $id: Now.ID['dec4fab993d4c3103e6ff55a7bba1001'],
        name: 'Franchise Request Processing',
        description: 'Automated logic for new LTFRB franchise applications',
        runAs: 'system',
    },
    wfa.trigger(
        trigger.record.created,
        {
            $id: Now.ID['a2c4fab993d4c3103e6ff55a7bba1087'],
        },
        {
            table: 'x_1985693_franchis_franchise_request',
            condition: '^EQ',
            run_on_extended: 'false',
            run_flow_in: 'any',
            run_when_user_list: [],
            run_when_setting: 'both',
            run_when_user_setting: 'any',
        }
    ),
    (_params) => {
        wfa.action(
            action.core.updateRecord,
            {
                $id: Now.ID['0d75b23d93d4c3103e6ff55a7bba10a3'],
                uuid: 'b3ffd811-42f1-4eed-8b4d-fd7280fb9f07',
            },
            {
                record: wfa.dataPill(_params.trigger.current, 'reference'),
                table_name: 'x_1985693_franchis_franchise_request',
                values: TemplateValue({
                    state: '1',
                }),
            }
        )
    }
)
