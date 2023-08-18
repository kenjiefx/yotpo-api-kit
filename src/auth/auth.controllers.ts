import { BaseController } from "../controllers/base.controller"
import { uToken } from "../types/auth.endpoint.types"
import { YotpoStoreInstance } from "../types/yotpo.store.types"
import fetch from 'node-fetch'

export class AuthControllerV1 extends BaseController {
    private version: "1.0"
    constructor(store:Pick<YotpoStoreInstance,'appKey'|'secretKey'>){
        super()
        this.appKey = store.appKey
        this.secretKey = store.secretKey
    }
    /**
     * Retrieves a uToken.
     * A uToken is required in non-public API calls to ensure private account data is accessible only by authorized user.
     */
    retrieveUtoken():Promise<{uToken:uToken,tokenType:string}>{
        return new Promise((resolve,reject)=>{
            resolve({
                uToken:'',
                tokenType: ''
            })
        })
    }
}

export class AuthControllerV3 extends BaseController {
    private version: "3.0"
    constructor(store:Pick<YotpoStoreInstance,'appKey'|'secretKey'>){
        super()
        this.appKey = store.appKey
        this.secretKey = store.secretKey
    }

    /**
     * Retrieves access token
     * @returns 
     */
    getAccessToken():Promise<{accessToken:string,tokenType:string}>{
        return new Promise((resolve,reject)=>{
            resolve({
                accessToken:'',
                tokenType: ''
            })
        })
    }
}


