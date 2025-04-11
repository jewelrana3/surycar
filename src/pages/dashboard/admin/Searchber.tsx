import { Input } from 'antd';

import { GoLock, GoUnlock } from 'react-icons/go';
import { FaSearch } from 'react-icons/fa';
import { FiPlus } from 'react-icons/fi';

interface SearchberProps {
    setAdminModal: (value: boolean) => void;
}

export default function Searchber({ setAdminModal }: SearchberProps) {
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
                    <button
                        onClick={() => setAdminModal(true)}
                        className="flex items-center gap-2 bg-[#188754] hover:bg-[#188754] text-white px-4 py-2 rounded-2xl font-medium shadow-sm"
                    >
                        <FiPlus className="text-white" />
                        Upload Slider
                    </button>
                </div>
            </div>
        </div>
    );
}
