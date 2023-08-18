import { AuthControllerV1, AuthControllerV3 } from "../auth/auth.controllers";
import { YotpoAPIVersion } from "./api.base.types";

/**
 * A utoken is required in non-public API calls to ensure private account data is accessible only by authorized users.
 */
export type uToken = string

/**
 * Version type of getting auth tokens in Yotpo
 */
export type AuthEndpointTypes <TApiVersion extends YotpoAPIVersion> = 
    TApiVersion extends '1.0' ? AuthControllerV1 : 
    TApiVersion extends '3.0' ? AuthControllerV3
    : never;