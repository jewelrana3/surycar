import total from '../../../../public/dashboard/total.svg';
import { useGetAnalyticsQuery } from '../../../redux/analytics/analytics';

const Card = () => {
    const { data: getCard, isError, isLoading } = useGetAnalyticsQuery(undefined);

    if (isLoading) {
        return <span className="">Loading...</span>;
    }

    if (isError) {
        return <span className="">data not found...</span>;
    }

    const data = [
        {
            icon: <img src={total} alt="total" />,
            title: 'Total User',
            date: '13 NOV, 2024',
            count: getCard?.data?.totalUser,
            total: '20550',
            daliy: getCard?.data?.todayUser,
        },
        {
            icon: <img src={total} alt="total" />,
            title: 'Total Post',
            date: '13 NOV, 2024',
            count: getCard?.data?.totalPost,
            total: '109558 tn',
            daliy: getCard?.data?.todayPost,
        },
        {
            icon: <img src={total} alt="total" />,
            title: 'Total Earning',
            date: '13 NOV, 2024',
            count: getCard?.data?.totalEarning,
            total: 'SYP109558',
            daliy: getCard?.data?.todayEarning,
        },
    ];
    return (
        <div className="grid grid-cols-3  gap-5 ">
            {data.map((item, index) => (
                <div key={index} className="rounded-2xl p-4  w-full bg-bgWhite">
                    <div className="flex items-center gap-3 ">
                        <div className={`bg-[#D2EBC5] w-[44px] h-[44px] rounded-full flex items-center justify-center`}>
                            {item?.icon}
                        </div>
                        <div>
                            <div className="font-medium text-[18px]">{item?.title}</div>
                        </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-[12px]  font-medium text-gray-400">{item.date}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <p>Total : {item?.total}</p>
                        <p>
                            Daily : <span className="text-[#006EEE]">{item?.daliy}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
