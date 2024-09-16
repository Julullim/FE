import React from "react";
import { Link } from "react-router-dom";

const GoodsMain: React.FC = () => {

    var items = []
    items.push({ title: "36기 동잠", price: "40,000", date: "오늘 마감", img: "src/assets/test/Rectangle 14.png", link: "1" })
    items.push({ title: "36기 동잠", price: "40,000", date: "7월 30일", img: "src/assets/test/Rectangle 14.png", link: "2" })
    items.push({ title: "36기 동잠", price: "40,000", date: "7월 30일", img: "src/assets/test/Rectangle 14.png", link: "3" })

    return (
        <div className="ml-[1vw] mr-[1vw] mt-[2vh] align-center flex">
            <ul className="ml-auto mr-auto">
                {items.map((item) => (
                    <li className="inline-block ml-[1vw] mr-[1vw] w-[30vw] relative ">
                        <Link to={`/goods/${item.link}`}>
                            <div className="absolute w-[12vw] h-[4vw] right-[1vw] top-[1.5vw] bg-red rounded-lg shadow-[0px_4px_4px_#00000040] items-center">
                                <div className="text-[#ffffff] text-center text-[0.4rem] mt-[0.5vw]">
                                    오늘 마감
                                </div>
                            </div>

                            <img
                                className="w-[100%]"
                                alt="Goods IMG"
                                src={`${item.img}`}
                            />
                            <div className="text-[65%] ">
                                {item.title}
                            </div>
                            <div className="text-[25%] text-[#737373]">
                                {item.price}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default GoodsMain;
