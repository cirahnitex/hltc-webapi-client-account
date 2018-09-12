import singletonLocalStoreage from "hltc-webapi-client-shared-components/dist/util/singletonLocalStorage";

export interface CachedUserCredential {
    id:number, email:string, password: string
}

export const {set, get} = singletonLocalStoreage<CachedUserCredential>('account/CachedUserCredential');
