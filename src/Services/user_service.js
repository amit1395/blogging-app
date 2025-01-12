import { axiosObj } from "./helper";

export const signUp=(user)=>{
    return axiosObj.post('/api/v1/auth/register',user).then((response)=> response.data);
};