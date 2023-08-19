# yotpo-api-kit
A library that simplifies access to Yotpo API

## A Handy Approach
With TypeScript's powerful type system, this library compiles the list of endpoints that you can use for a specific resource, depending on the API version. You heard it right! Depending on the API version! 

**Endpoints are abstracted as methods of a resource controller.**

For example, passing `3.0` value to the `initYotpoAPI` function will give you a list of methods/endpoints that are available only to Yotpo Version 3.0 APIs:

![](https://cdn.shopify.com/s/files/1/0560/7466/6159/files/fig1.png?v=1692447462)

Alternatiely, passing `1.0` will give you a list of methods/endpoints that are available for Yotpo Version 1.0 APIs:

![](https://cdn.shopify.com/s/files/1/0560/7466/6159/files/fig2.png?v=1692447597)

TypeScript's static type checking ensures that endpoints are used correctly with the appropriate parameters and data types. Any mismatches or errors are caught during compilation, reducing the chances of runtime errors.

You can see available endpoints and their parameters directly in your code editor's autocomplete suggestions, making it easier to discover and use the correct endpoints.

## Abstraction and Simplification
With this library, you can interact with a consistent, type-safe schema that represents the resource's data. This abstraction shields them from the complexities of Yotpo API's specific shapes required for each enpoint, making the codebase cleaner and easier to understand.

For example, you can use this `YotpoProductInstance` type for all the endpoints that needs products, regardless if `v1.0` or `v3.0`

```
type YotpoProductInstance = {
    internalId: number
    externalId: string
    name: string
    url: string
    description?: string
    status?: ['active','draft','achived','inactive']
    ...
}
```
Regardless of the actual API endpoint being used, you can work with the same schema or interface for a resource, reducing cognitive load and preventing confusion due to varying shapes.

This gives you benefit from autocompletion, type checking, and documentation in code editors, making it easier to construct API requests using a familiar schema.

```

async function main(){
   const snippet:YotpoProductInstance = {
        internalId: 2918271321,
        name: 'Black Leather Bag',
        url: 'https://www.mystore.com/products/my-leather-bag',
        externalId: '9182716281817231'
    }
    const product: YotpoProductInstance = await yotpo.products().getProductByInternalId(snippet)
}
```

With this advantage, you don't need to redefine resource shapes multiple times for different endpoints, reducing duplicated code and potential inconsistencies.

## Simplified API 

There are no overrheads in using this library, just simply define your config, then pass it to the `initYotpoAPI` function. This function returns an object that contains various methods representing specific resources and functionalities available in the Yotpo API. 

```
// type YotpoAPIv3 = '3.0'
const config: YotpoAPIConfig<YotpoAPIv3> = {
    appKey: 'your_store_app_key',
    secretKey: 'your_store_secret_key',
    version: '3.0'
}
```
These methods are then used to interact with different aspects of the Yotpo API, such as products, orders, etc.
```
// type initYotpoAPI = <TApiVersion extends YotpoAPIVersion>(params:YotpoAPIConfig<TApiVersion>) => Promise<YotpoAPI<TApiVersion>>
initYotpoAPI(config)
.then(yotpo=>{
    // returns Array<YotpoProductInstance>
    yotpo.products().getAllProducts()
})
.catch(error=>{})
```
