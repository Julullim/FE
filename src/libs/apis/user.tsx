import instance from "./base";

//회원가입
export const kakaoLogin = async (code:string) => {
    const resp = await instance.get(`/user/callback/kakao?code=${code}`);
    console.log(resp.data)
    return resp.data;

};

//회원 확인
export const checkUser = async (token: string) => {
    const resp = await instance.get(`user/info`, {
        headers: {
            authorization: `${token}`
        }
    });
    return resp.data;
};

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