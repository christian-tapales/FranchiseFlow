import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
// This points to the compiled HTML entry point of your React app
import franchisePage from '../../client/index.html' 

UiPage({
    /* Rename the ID to follow your project naming. 
       Note: You may need to add 'franchise-manager-page' to your keys.ts file later.
    */
    $id: Now.ID['franchise-manager-page'], 
    
    /* This is the URL where you will view your app. 
       Format: https://devXXXXX.service-now.com/endpoint_name.do
    */
    endpoint: 'x_1985693_franchis_manager.do', 
    
    description: 'FranchiseFlow Main Dashboard and Operator Portal',
    category: 'general',
    html: franchisePage,
    direct: true,
})