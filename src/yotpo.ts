import { AuthControllerV1, AuthControllerV3 } from "./auth/auth.controllers"
import { YotpoAPIBaseInterface, YotpoAPIConfig, YotpoAPIVersion, YotpoAPIv1, YotpoAPIv3 } from "./types/api.base.types"
import { AuthEndpointTypes } from "./types/auth.endpoint.types"
import { YotpoStoreInstance } from "./types/yotpo.store.types"

export const YotpoAPIBaseURL = 'https://api.yotpo.com'

/**
 * YotpoAPI object serves as a wrapper to all the API endpoints that you
 * can call on within Yotpo
 */
export class YotpoAPI<TApiVersion extends YotpoAPIVersion> implements YotpoAPIBaseInterface<TApiVersion>  {
    private appKey: string
    private secretKey: string
    private accessToken: string
    version: TApiVersion
    constructor(params:YotpoStoreInstance&{version:TApiVersion}){
        this.appKey = params.appKey
        this.secretKey = params.appKey
        this.version = params.version
    }
    auth(){
        switch (this.version) {
            case '1.0': return new AuthControllerV1({appKey:this.appKey,secretKey:this.secretKey}) as AuthEndpointTypes<TApiVersion>
            case '3.0': return new AuthControllerV3({appKey:this.appKey,secretKey:this.secretKey}) as AuthEndpointTypes<TApiVersion>
            default: break;
        }
    }
    setToken(token:string){
        this.accessToken = token
    }
}

/**
 * Creates the YotpoAPI object which handles the API calls
 * @param params typeof YotpoAPIConfig
 * @returns Promise<YotpoAPI<TApiVersion>>
 */
export const initYotpoAPI = <TApiVersion extends YotpoAPIVersion>(params:YotpoAPIConfig<TApiVersion>): Promise<YotpoAPI<TApiVersion>> => {
    return new Promise(async (resolve,reject)=>{
        const yotpoApi = new YotpoAPI({
            appKey:    params.appKey,
            secretKey: params.secretKey,
            version:   params.version
        })
        const authController = new AuthControllerV3({
            appKey:    params.appKey,
            secretKey: params.secretKey
        })
        const accessToken = (await authController.getAccessToken()).accessToken
        yotpoApi.setToken(accessToken)
        resolve(yotpoApi)
    })
}





