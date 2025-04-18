import { Switch } from 'antd';
import { useState } from 'react';
import { GoLock, GoUnlock } from 'react-icons/go';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdOutlineEdit } from 'react-icons/md';
import PakageModal from '../../../modal/PakageModal';

export default function ContentPakage({ data }: any) {
    const content = data[1];
    const [checked, setChecked] = useState(content?.status);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edit, setEdit] = useState(null);
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
            <div className="mt-10">
                <div className="flex justify-between items-center my-2">
                    <h1 className="text-2xl">{content?.type} package</h1>
                    <div className="flex justify-center items-center gap-3">
                        <p className="mt-1 text-[#929292]">{checked ? 'Packages available' : 'Packages Unavailable'}</p>
                        <p>
                            <Switch defaultChecked onChange={changeToogle} />
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  gap-4">
                    {content?.plan.map((plan: any) => (
                        <div
                            key={plan?._id}
                            className="w-full md:w-1/3 bg-white shadow rounded-xl p-6 border border-gray-200 "
                        >
                            <div className="flex justify-between items-center mb-2">
                                <div>
                                    <span className="text-sm font-medium ">Price : </span>
                                    <span className="text-green-600">$ {plan.price}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button onClick={() => handleLock(plan.id)}>
                                        {lockedPlanId[plan.id] ? (
                                            <GoLock size={24} />
                                        ) : (
                                            <GoUnlock size={24} className=" text-gray-400" />
                                        )}
                                    </button>
                                    <button
                                        onClick={() => {
                                            setIsModalOpen(true), setEdit(plan);
                                        }}
                                    >
                                        <MdOutlineEdit size={24} className=" text-orange-400" />
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">{plan?.description}</p>
                            <div className="flex items-center gap-2">
                                <IoMdCheckmarkCircle size={24} className="text-green-500" />
                                {plan?.validity} day permission to use
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* modal  */}
            {isModalOpen && (
                // @ts-ignore
                <PakageModal edit={edit} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            )}
        </>
    );
}
