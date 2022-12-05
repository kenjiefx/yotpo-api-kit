import { YotpoBaseUrl } from '../apis/index.d'
import { getToken } from '../auth'
import Yotpo from './yotpo'
import {credentials} from './yotpo.d'

export const YOTPO_API_BASE:YotpoBaseUrl = 'https://api.yotpo.com/'

export function appInit(credentials:credentials){
   Yotpo.setCredentials(credentials)
   getToken()
}