import { getCookie } from "../cookie";

export const isloggedIn = () =>{
    let islogin;
    console.log("isaccess_token: ", getCookie('access_token'))
    if(getCookie('access_token')){
        islogin = true;
        console.log("isloggedIn: ", islogin);
    }
    else{
        islogin = false;
    }
    return islogin
}