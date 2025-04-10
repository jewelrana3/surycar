import { DatePicker, Input, Select } from 'antd';

import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';

import dayjs from 'dayjs';
import { useLocation } from 'react-router-dom';

const dateFormat = 'YYYY-MM-DD';

const path = [
    { path: '/', name: 'Analytics' },
    { path: '/customers', name: 'Customers' },
    { path: '/post-list', name: 'Post List' },
    { path: '/customer-details', name: 'Customer Profile' },
    { path: '/post-details', name: 'Post Details' },
    { path: '/buyer-registration', name: 'Buyer Registration' },
    { path: '/seller-transection', name: 'Seller Transection' },
];

export default function SearchCategory() {
    const location = useLocation();
    const currentPath = location.pathname;

    const currentPage = path.find((item) => item.path === currentPath);
    console.log(currentPage);
    return (
        <div className="flex justify-end">
            <div className="flex items-center p-4 rounded-lg space-x-2">
                <div className="flex space-x-4 mr-4">
                    <button className="">
                        <img src="/customer/pdf.svg" alt="pdf" />
                    </button>
                    <button className="">
                        <img src="/customer/xcel.svg" alt="xcel" />
                    </button>
                    <button className="">
                        <GoUnlock size={28} className="text-textGray" />
                    </button>
                    <button className="">
                        <GoLock size={28} className="text-textGray" />
                    </button>
                </div>
                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Search here"
                        className="px-2  w-80 rounded-full shadow-black"
                        prefix={<FaSearch size={13} className="bg-[#B7DBC9] text-[#58553A] rounded-full w-9 h-9 p-2" />}
                    />
                </div>

                {currentPage &&
                (currentPage.path === '/buyer-registration' ||
                    currentPage.path === '/customers' ||
                    currentPage.path === '/seller-transection') ? (
                    <div>
                        <DatePicker
                            className="w-28 h-10"
                            defaultValue={dayjs('2019-09-03', dateFormat)}
                            minDate={dayjs('2019-08-01', dateFormat)}
                            maxDate={dayjs('2020-10-31', dateFormat)}
                        />
                    </div>
                ) : (
                    <>
                        {' '}
                        <div>
                            <Select defaultValue="Category" className="rounded-full shadow-black w-28 h-10">
                                <Select.Option value="car">Car</Select.Option>
                                <Select.Option value="bike">Bike</Select.Option>
                            </Select>
                        </div>
                        <div>
                            <Select defaultValue="Status" className="rounded-full shadow-black w-28 h-10">
                                <Select.Option value="car">Posted</Select.Option>
                                <Select.Option value="bike">Holding</Select.Option>
                            </Select>
                        </div>
                        <div>
                            <DatePicker
                                className="w-28 h-10"
                                defaultValue={dayjs('2019-09-03', dateFormat)}
                                minDate={dayjs('2019-08-01', dateFormat)}
                                maxDate={dayjs('2020-10-31', dateFormat)}
                            />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
