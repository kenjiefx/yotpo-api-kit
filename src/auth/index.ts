import Yotpo from '../app/yotpo'
import fetch from 'node-fetch';
import { HTTPRequest, RequestHeaders } from '../apis';
import { ApplicationJSON, RequestMethod, YotpoBaseUrl } from '../apis/index.d';
import { YOTPO_API_BASE } from '../app';

export function getToken(){
    return new Promise(function(resolve,reject){
        let request = new HTTPRequest<ApplicationJSON>({
            baseUrl:<YotpoBaseUrl>YOTPO_API_BASE,
            endpoint: <string>'/core/v3/stores'+Yotpo.store_app_key+'access_tokens',
            method: <RequestMethod>'POST',
            headers: new RequestHeaders<'application/json'>({
                contentType:'application/json'
            })
        })
        request.send()
        
    })
    console.log(Yotpo.store_app_key)

}