import { YotpoBaseUrl, RequestMethod } from "./index.d"


export class HTTPRequest<ContentType> {
    baseUrl:YotpoBaseUrl
    method:RequestMethod
    endpoint:string
    headers:RequestHeaders<ContentType>
    constructor(api:{
        baseUrl:YotpoBaseUrl,
        endpoint:string,
        method:RequestMethod,
        headers:RequestHeaders<ContentType>}
        ){
        this.baseUrl = api.baseUrl
        this.endpoint = api.endpoint
        this.method = api.method
        this.headers = api.headers
    }
    send(){
        console.log(this.headers)
    }
}

export class RequestHeaders<ContentType> {
    'Content-Type':ContentType
    constructor(headers:{contentType:ContentType}){
        this['Content-Type'] = headers.contentType
    }
}