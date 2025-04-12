import { ConfigProvider, Input, Select } from 'antd';

import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';

export default function Searchber() {
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

                <div>
                    <ConfigProvider
                        theme={{
                            components: {
                                Select: {
                                    colorTextPlaceholder: 'rgba(241,53,53,0.25)',
                                    colorText: '#929292',
                                    fontSize: 15,
                                },
                            },
                        }}
                    >
                        <Select
                            defaultValue="Category"
                            className="rounded-full w-28 h-10 font-medium text-blue-600" // Custom text color for the placeholder
                        >
                            <Select.Option value="car" className="!text-blue-800">
                                Car
                            </Select.Option>
                            <Select.Option value="bike" className="text-blue-800">
                                Bike
                            </Select.Option>
                        </Select>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
