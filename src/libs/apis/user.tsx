import instance from "./base";

export const Login = async () =>{
    const resp = await instance.get(`/user`);
    console.log("악");
    return resp.data;
}

//회원 정보 입력(회원가입 단계)
export const setUserInfo = async (sid: string, name: string, cn: number, token: string) => {
    console.log("토킄크큰", token);

    const resp = await instance.put(`user/info`, {
        school_id: sid,
        name: name,
        session: '00000000',
        class: cn

    }, {
        headers: {
            authorization: `${token}`
        }
    });
    console.log(resp.data);
    return resp.data;
};