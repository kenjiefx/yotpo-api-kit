import {credentials} from './yotpo.d'

class Yotpo {
    store_app_key:credentials['store_app_key']
    store_secret_key:credentials['store_secret_key']
    constructor(){
        
    }
    setCredentials(credentials:credentials){
        this.store_app_key = credentials.store_app_key
        this.store_secret_key = credentials.store_secret_key
    }
    getAccessToken(){
        
    }
}

export default new Yotpo()