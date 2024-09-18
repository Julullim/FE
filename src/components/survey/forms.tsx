import React, { useState } from "react";

const profileImg: string = "https://s3-alpha-sig.figma.com/img/d202/e106/d3f468e2c6fde2912a88e5761900ea96?Expires=1727654400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StpjF16AFSfv6c60PsW1j-dzjlLjEinkHh3Dwi6kitppO9dII2aAdmA6hgS19Kurm1d80GXrmvi~s5wrIYyK1VSLA9SH5wEHTk-Ql6gGmWCeOsHrjnUOfoD9v3FJrvCOAtWdilP3N1dGVP68r6hjGNgdtNCgFdAhttD6ZLgDka6GgXuJX2QIC2cJToP-FEC~Rm3pbh1GMTHDCBXkNmlLlhNW3Ps72nehd6YZLYTMpACXXODrHw~Zt9nCbZsID9bnXuLlgJZXb70rt3wWpK0HHLs3teykflf4QiD~hvWb5ssTubpCFDDUpDrh85efsFLf5QlR~gD3vG4s8Y4gGTtlnQ__"

export const Vote: React.FC<{ title: string, option: { opt: string, n: number }[], ismulti: boolean, submit?: boolean }> = ({ title, option, ismulti = false, submit = false }) => {

    const [selectOne, setSelectOne] = useState<string | string[]>(ismulti ? "" : []);

    const handleselectChange = (event) => {
        const value = event.target.value;
        if (ismulti) {
            setSelectOne((prev) =>
                prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
            );
        } else {
            setSelectOne(value);
        }
    };

    return (
        <div className="vote mb-5 mr-auto ml-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 w-11/12 max-w-md">
            <div className="text-lg font-semibold mb-4">{title}</div>
            <div className="space-y-3">
                {option.map((item) => (
                    <label key={item.opt} className="flex items-center cursor-pointer w-full">
                        <input
                            type={ismulti ? "checkbox" : "radio"}
                            id={`item-${item.opt}`}
                            name="item"
                            value={item.opt}
                            onChange={handleselectChange}
                            className="h-5 w-5 text-[#ffe57b]"
                        />
                        <span className="ml-3 text-lg flex w-full">
                            {item.opt}
                            <div className="flex ml-auto mr-0 w-[10vw]">
                                <img src={profileImg} alt="profile" className="w-[5vw] h-[5vw] rounded-full mt-1" />
                                {item.n}
                            </div>
                        </span>
                    </label>
                ))
                }
            </div>
            {submit ? <div className="flex justify-center mt-6">
                <button
                    className={`mt-6 w-4/5 py-2 text-lg rounded-md ${selectOne
                        ? "bg-[#FFE57B] text-[#333333] cursor-pointer"
                        : "bg-white text-gray cursor-not-allowed"
                        }`}
                    disabled={!selectOne}
                    onClick={() => {
                        alert(`선택한 항목: ${selectOne}`);
                        window.location.reload();
                    }}>
                    투표하기
                </button>
            </div> : null}
        </div>
    )
};

export const Voted: React.FC<{ title: string, option: { opt: string, n: number }[], mypick: string[], submit?: boolean }> = ({ title, option, mypick, submit = false }) => {

    return (
        <div className="vote mb-5 mr-auto ml-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 w-11/12 max-w-md">
            <div className="text-lg font-semibold mb-4">{title}</div>
            <div className="space-y-1">
                {option.map((item) => (
                    <div key={item.opt} className={`flex items-center ${mypick.includes(item.opt) ? "bg-gray-100 rounded" : ""}`}>
                        <div className="ml-3 text-lg">
                            {item.opt}
                        </div>
                        <div className="flex ml-auto mr-0 w-[10vw]">
                            <img src={profileImg} alt="profile" className="w-[5vw] h-[5vw] rounded-full mt-1" />
                            {item.n}
                        </div>

                    </div>
                ))}
            </div>
            {submit ? <div className="flex justify-center mt-6">
                <button
                    className="w-4/5 py-2 text-lg rounded-md cursor-pointer bg-gray-100 text-[#333333]"
                    onClick={() =>
                        window.location.reload()
                    }>
                    다시 투표하기
                </button>
            </div> : null}
        </div>
    )
}

export const Subjective: React.FC<{ title: string, ex: string, submit?: boolean }> = ({ title, ex, submit = false }) => {
    const [text, setText] = useState("");

    return (
        <div className="vote mb-5 mr-auto ml-auto bg-white border border-gray-300 rounded-lg shadow-md p-6 w-11/12 max-w-md">
            <div className="text-lg font-semibold mb-2">{title}</div>
            <label className="flex flex-col text-sm">
                <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    placeholder={ex}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </label>
            {submit ?
                <div className="flex justify-center mt-4">
                    <button
                        className="w-4/5 py-2 text-lg rounded-md cursor-pointer bg-[#FFE57B] text-[#333333]"
                        onClick={() => {
                            alert(text);
                            window.location.reload();
                        }}
                    >
                        제출하기
                    </button>
                </div>
                : null}
        </div>
    )
};
