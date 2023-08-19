import { BaseController } from "../controllers/base.controller"
import { endpoint } from "../decorators/decorator"
import { fetchAsJson } from "../helpers/fetch.as.json"
import { resolvePlaceholders } from "../helpers/placeholder.resolver"
import { AuthError, AuthSuccess, uToken } from "../types/auth.types"
import { YotpoStoreInstance } from "../types/yotpo.store.types"
const fetch = require('node-fetch')

export class AuthControllerV1 extends BaseController {
    private version: "1.0"
    constructor(store:Pick<YotpoStoreInstance,'appKey'|'secretKey'>){
        super()
        this.appKey = store.appKey
        this.secretKey = store.secretKey
    }
    /**
     * `version 1.0`
     * Generates a utoken (access token).
     * A utoken is required in non-public API calls to ensure private account data is accessible only by authorized user.
     */
    generateToken():Promise<AuthSuccess>{
        return new Promise((resolve,reject)=>{
            resolve({accessToken:''})
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
     * `version 3.0`
     * Generates a utoken (access token).
     * A utoken is required in non-public API calls to ensure private account data is accessible only by authorized user.
     */
    @endpoint('https://api.yotpo.com/core/v3/stores/{{appKey}}/access_tokens')
    generateToken(url?:string):Promise<AuthSuccess>{
        const endpointUrl = resolvePlaceholders(url,{appKey:this.appKey})
        return new Promise((resolve,reject)=>{
            fetchAsJson<{errors:Array<{message:string}>}|{access_token:string}>(
                {url:endpointUrl,data:{secret:this.secretKey},method:'POST'}
            ).then((result)=>{
                if ('errors' in result) return reject(result)
                resolve({accessToken:result.access_token})
            })
            .catch(reject)
        })
    }
}


