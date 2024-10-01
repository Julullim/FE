import instance from "./base";

export const getNoticeList = async (pageNumber: number) => {
    const userLoginStorage = localStorage.getItem('user-login-storage');
    const token = userLoginStorage ? JSON.parse(userLoginStorage).state.token : "";

    //console.log("TOKEN:"+token);
    
    const resp = await instance.get(`notice/all?page=${pageNumber}`, {
        headers: {
            authorization: `${token}`
        }
    });
    if( resp.data.code == 2000){
        return resp.data.result;
    }
    else{
        console.error('Error fetching notice list:', resp.data.message);
        return [];
    }
};
