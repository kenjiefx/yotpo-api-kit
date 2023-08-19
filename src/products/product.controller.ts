import { BaseController } from "../controllers/base.controller";
import { endpoint } from "../decorators/decorator";
import { resolvePlaceholders } from "../helpers/placeholder.resolver";
import { YotpoProductInstance } from "../types/products.types";
import { YotpoStoreInstance } from "../types/yotpo.store.types";

export class ProductControllerV1 extends BaseController {
    constructor(store:Pick<YotpoStoreInstance,'appKey'>&Required<Pick<YotpoStoreInstance,'accessToken'>>){
        super()
        this.appKey = store.appKey
        this.accessToken = store.accessToken
    }
    massUpdate(){

    }
    massCreate(){

    }
    getAll(){

    }
    retrievePromotedProducts(){

    }
    createGrouping(){

    }
    getAllGroups(){

    }
    getGroup(){

    }
    addProductToGroup(){

    }
    removingProductFromGroup(){

    }
    deleteGroup(){

    }
}

export class ProductControllerV3 extends BaseController {
    constructor(store:Pick<YotpoStoreInstance,'appKey'>&Required<Pick<YotpoStoreInstance,'accessToken'>>){
        super()
        this.appKey = store.appKey
        this.accessToken = store.accessToken
    }
    singleUpdate(){

    }
    createProduct(){

    }
    updateProduct(){

    }
    getAllProducts(){

    }

    @endpoint('https://api.yotpo.com/core/v3/stores/{{appKey}}/products/{{internalId}}')
    getProductByInternalId(product:Pick<YotpoProductInstance,'internalId'>,url?:string):Promise<YotpoProductInstance>{
        const endpointUrl = resolvePlaceholders(url,{appKey:this.appKey,internalId:product.internalId.toString()})
        console.log(endpointUrl)
        console.log(product)
        return new Promise((resolve,reject)=>{
            resolve({
                internalId: 2918271321,
                name: 'Black Leather Bag',
                url: 'https://www.mystore.com/products/my-leather-bag',
                externalId: '9182716281817231'
            })
        })
    }
}

