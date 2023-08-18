import { BaseController } from "../controllers/base.controller";
import { YotpoStoreInstance } from "../types/yotpo.store.types";

export class ProductControllerV1 extends BaseController {
    constructor(store:Pick<YotpoStoreInstance,'appKey'|'secretKey'>){
        super()
    }
    
}