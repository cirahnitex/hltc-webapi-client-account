import Api from "hltc-webapi-client-shared-components/dist/util/Api";

export async function register(email:string, password:string) {
    await Api.request("/account/register",{email,password});
    return;
}