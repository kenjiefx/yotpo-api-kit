import { ProductControllerV1, ProductControllerV3 } from "../products/product.controller"
import { YotpoAPIVersion } from "./api.base.types"

export type YotpoProductInstance = {
    /** The Yotpo ID for the product. This ID is created automatically upon creation of the product. You can find it by using the Retrieve endpoint.*/
    internalId: number
    /** The merchant's unique ID for the product. */
    externalId: string
    /** The name or title of the product */
    name: string
    /** The URL of the product. */
    url: string
    /** The description of the product. */
    description?: string
    /** The status of the product. */
    status?: ['active','draft','achived','inactive']
    
}



export type ProductEndpointTypes <TApiVersion extends YotpoAPIVersion> = 
    TApiVersion extends '1.0' ? ProductControllerV1 : 
    TApiVersion extends '3.0' ? ProductControllerV3
    : never;