const fetch = require('node-fetch')

type RequestMethods = 'POST'|'GET'|'PATCH'|'PUT'
type RequestOptions = {method:RequestMethods,headers:{[key:string]:any},body?:string}

/**
 * Nothing special. Just a wrapper to the node fetch function which expects to always
 * work with JSON content types.
 */
export const fetchAsJson = <TResponse>(
    {url,data,method}:{url:string,data:{[key:string]:any},method:RequestMethods}
):Promise<TResponse> => {
    return new Promise((resolve,reject)=>{
        const options:RequestOptions = {method:method,headers:{'Content-Type': 'application/json'}}
        if (method!=='GET') {
            options.body = JSON.stringify(data)
        }
        fetch(url,options)
        .then(response => response.json())
        .then((result:TResponse)=> resolve(result))
        .catch(reject)
    })    
}