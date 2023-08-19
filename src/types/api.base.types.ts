import { AuthEndpointTypes } from "./auth.types";
import { ProductEndpointTypes } from "./products.types";
import { YotpoStoreInstance } from "./yotpo.store.types";

export type YotpoAPIv1 = '1.0'
export type YotpoAPIv3 = '3.0'
export type YotpoAPIVersion = YotpoAPIv1 | YotpoAPIv3

/**
 * Yotpo object
 */
export interface YotpoAPIBaseInterface<TApiVersion extends YotpoAPIVersion> {
    auth:()=>AuthEndpointTypes<TApiVersion>,
    products:()=>ProductEndpointTypes<TApiVersion>
}

/**
 * Requried and optional values to pass in order to make use
 * of the YotpoAPI object
 */
export type YotpoAPIConfig<TApiVersion extends YotpoAPIVersion> = {
    version?: TApiVersion
} & YotpoStoreInstance 

