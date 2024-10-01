import instance from "./base";


//곡 목록 받아오기
export const getSetlist = async (code:string) => {
    const resp = await instance.get(`/song/?year=2024&concert=2`);
    //console.log(resp.data)
    return resp.data;

};