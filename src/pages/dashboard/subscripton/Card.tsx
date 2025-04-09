interface Data {
    id: number;
    title: string;
    price: string;
    inclusions: string[];
    benefits: string[];
}

import benifit from '../../../../public/subscription-icon/beni.svg';
import inclu from '../../../../public/subscription-icon/inclu.svg';

export default function Card({ data }: { data: Data }) {
    return (
        <div className="bg-[#18181A]  rounded-lg shadow-xl py-6 px-8  border border-[#E7DDB7] w-[355px]">
            <div className="text-center text-white">
                <h2 className="font-medium mb-4 text-grayColor">{data.title}</h2>
                <p className="text-2xl font-bold mb-6 mt-6">
                    <span className="text-textGolden">{data.price}</span>
                    <span className="text-sm text-textGray">{data?.id === 1 ? '/monthly' : '/yearly'}</span>
                </p>
            </div>
            <div className="mb-4">
                <div className="flex items-center gap-1">
                    <img src={inclu} alt="inclu" />
                    <h3 className=" font-semibold text-textGray">Inclusions:</h3>
                </div>
                <ul className="list-disc pl-5 text-textGray text-[12px]">
                    {data.inclusions.map((item, index) => (
                        <li key={index} className="my-1">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6">
                <div className="flex items-center gap-1">
                    <img src={benifit} alt="benifit" />
                    <h3 className=" font-semibold text-textGray">Benefits:</h3>
                </div>
                <ul className="list-disc pl-5 text-textGray text-[12px] ">
                    {data.benefits.map((item, index) => (
                        <li key={index} className="my-1">
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* <button className="bg-[#DBCC93] text-black py-2 px-4 rounded-lg w-full font-medium mt-4 ">Buy Now</button> */}
        </div>
    );
}
