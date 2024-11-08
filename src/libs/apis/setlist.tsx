import instance from "./base";


//곡 목록 받아오기
export const getSetlist = async (year:number,concert:number) => {
    const resp = await instance.get(`/song/?year=${year}&concert=${concert}`);
    return resp.data;

};