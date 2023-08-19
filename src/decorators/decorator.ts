
/**
 * Creates the URL endpoint
 * @param url - The endpoint URL
 * @returns 
 */
export function endpoint(url:string){
    return function (target:any,property:string,descriptor:PropertyDescriptor) {
        const original = descriptor.value
        descriptor.value = function(...args: any[]){
            return original.apply(this, [...args,url]);
        }
        return descriptor
    }
}