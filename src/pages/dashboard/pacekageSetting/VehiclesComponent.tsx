import { Switch } from 'antd';
import { useState } from 'react';
import { GoLock, GoUnlock } from 'react-icons/go';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';
import PakageModal from '../../../modal/PakageModal';

const plans = [
    {
        id: 1,
        price: 'SYP 65,000',
        days: 30,
    },
    {
        id: 2,
        price: 'SYP 130,000',
        days: 60,
    },
    {
        id: 3,
        price: 'SYP 260,000',
        days: 120,
    },
];

export default function VehiclesComponent() {
    const [checked, setChecked] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [lockedPlanId, setLockedPlanId] = useState<{ [key: number]: boolean }>({});
    const changeToogle = (checked: boolean) => {
        setChecked(checked);
    };

    const handleLock = (id: number) => {
        setLockedPlanId((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <>
            <div className="flex justify-between items-center my-2">
                <h1 className="text-2xl">Vehicles package</h1>
                <div className="flex justify-center items-center gap-3">
                    <p className="mt-1 text-[#929292]">{checked ? 'Packages available' : 'Packages Unavailable'}</p>
                    <p>
                        <Switch defaultChecked onChange={changeToogle} />
                    </p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-4">
                {plans.map((plan) => (
                    <div
                        key={plan.id}
                        className="w-full md:w-1/3 bg-white shadow rounded-xl p-6 border border-gray-200"
                    >
                        <div className="flex justify-between items-center mb-2">
                            <div>
                                <span className="text-sm font-medium ">Price : </span>
                                <span className="text-green-600">{plan.price}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => handleLock(plan.id)}>
                                    {lockedPlanId[plan.id] ? (
                                        <GoLock size={24} />
                                    ) : (
                                        <GoUnlock size={24} className=" text-gray-400" />
                                    )}
                                </button>
                                <button onClick={() => setIsModalOpen(true)}>
                                    <MdOutlineEdit size={24} className=" text-orange-400" />
                                </button>
                            </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">
                            All vehicle data: Here you can always find all your important data!
                        </p>
                        <div className="flex items-center gap-2">
                            <IoMdCheckmarkCircle size={24} className="text-green-500" />
                            {plan.days} day permission to use
                        </div>
                    </div>
                ))}
            </div>

            {/* modal  */}
            {isModalOpen && <PakageModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </>
    );
}
