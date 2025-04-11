import { Table } from 'antd';
import { useState } from 'react';
import { GoLock, GoUnlock } from 'react-icons/go';
import type { TableColumnsType } from 'antd';
import { FaRegTrashCan } from 'react-icons/fa6';
import { LiaEditSolid } from 'react-icons/lia';
import Swal from 'sweetalert2';
import AdminModal from '../../../modal/AdminModal';
import Searchber from './Searchber';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    email: string;
    adminType: string;
}

const data = [
    {
        key: '1',
        no: '24721',
        name: 'Admin Asadujjaman',
        address: '3891 Ranchview Dr. Richardson',
        email: 'kenzi.lawson@example.com',
        adminType: 'Admin',
    },
    {
        key: '2',
        no: '26552',
        name: 'Admin Asadujjaman',
        address: '4517 Washington Ave. Manchester',
        email: 'sara.cruz@example.com',
        adminType: 'Admin',
    },
    {
        key: '3',
        no: '24563',
        name: 'Admin Asadujjaman',
        address: '3517 W. Gray St. Utica',
        email: 'nathan.roberts@example.com',
        adminType: 'Admin',
    },
    {
        key: '4',
        no: '2424',
        name: 'Dr. Anna KOWALSKA',
        address: '2118 Thornridge Cir. Syracuse',
        email: 'alma.lawson@example.com',
        adminType: 'Admin',
    },
    {
        key: '5',
        no: '247865',
        name: "Dr. Michael O'CONNOR",
        address: '2972 Westheimer Rd. Santa Ana',
        email: 'tim.jennings@example.com',
        adminType: 'Admin',
    },
    {
        key: '6',
        no: '24456',
        name: 'Dr. Yasmin AL-FARSI',
        address: '2464 Royal Ln. Mesa',
        email: 'willie.jennings@example.com',
        adminType: 'Admin',
    },
    {
        key: '7',
        no: '24727',
        name: 'Dr. Leila BEN AMAR',
        address: '8502 Preston Rd. Inglewood',
        email: 'bill.sanders@example.com',
        adminType: 'Admin',
    },
    {
        key: '8',
        no: '24578',
        name: 'Dr. Elena PETROVA',
        address: '6391 Elgin St. Celina',
        email: 'debra.holt@example.com',
        adminType: 'Admin',
    },
    {
        key: '9',
        no: '2499',
        name: 'Dr. Sergei IVANOV',
        address: '2118 Thornridge Cir. Syracuse',
        email: 'curtis.weaver@example.com',
        adminType: 'Admin',
    },
    {
        key: '10',
        no: '242310',
        name: 'Dr. Sofia OLIVEIRA',
        address: '4140 Parker Rd. Allentown',
        email: 'michelle.rivera@example.com',
        adminType: 'Admin',
    },
    {
        key: '11',
        no: '249811',
        name: 'Dr. Ahmed KHAN',
        address: '3517 W. Gray St. Utica',
        email: 'felicia.reid@example.com',
        adminType: 'Admin',
    },
];

export default function ManageAdmin() {
    const [lock, setLock] = useState<{ [key: string]: boolean }>({});
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [adminModal, setAdminModal] = useState(false);
    const [edit, setEdit] = useState<DataType | null>(null);

    const handleLock = (recordNo: string) => {
        console.log(`Toggling lock for record: ${recordNo}`);
        setLock((prev) => ({
            ...prev,
            [recordNo]: !prev[recordNo],
        }));
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('Selected row keys: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '3085d6',
            cancelButtonColor: 'd33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',
            dataIndex: 'no',
        },
        {
            title: 'Admin Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },

        {
            title: 'Admin Type',
            dataIndex: 'adminType',
            key: 'adminType',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <button
                        className="mt-1"
                        onClick={() => {
                            setAdminModal(true), setEdit(record);
                        }}
                    >
                        <LiaEditSolid className="text-[5C5C3D] text-[22px] cursor-pointer" />
                    </button>

                    <button className="" onClick={() => handleLock(record.no)}>
                        {lock[record.no] ? <GoLock size={20} /> : <GoUnlock size={20} className="text-red-400" />}
                    </button>
                    <button className="" onClick={handleDelete}>
                        <FaRegTrashCan size={18} className="text-red-400" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">
            <Searchber setAdminModal={setAdminModal} />
            {/* Table with Checkbox Selection */}
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record, index) => `${record.no} ${index}`}
                rowSelection={rowSelection}
            />
            {/* modal */}

            {adminModal && (
                <AdminModal
                    // @ts-ignore
                    edit={edit}
                    isOpen={adminModal}
                    onClose={() => {
                        setAdminModal(false), setEdit(null);
                    }}
                />
            )}
        </div>
    );
}
