import Store from "./store"

class Yotpo {
    appKey: string
    secretKey: string
    constructor(){
        
    }
    setCredentials(store:Store){
        this.appKey = store.appKey
        this.secretKey = store.secretKey
    }
    getAccessToken(){
        
    }
}