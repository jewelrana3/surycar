import { Table } from 'antd';
import { useState } from 'react';
import { GoLock, GoUnlock } from 'react-icons/go';
import type { TableColumnsType } from 'antd';
import { FaRegTrashCan } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import AdminModal from '../../../modal/AdminModal';
import Searchber from './Searchber';
import { useDeleteAdminMutation, useGetAdminQuery } from '../../../redux/admin/admin';
import { toast } from 'react-toastify';

interface DataType {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    adminType: string;
}

export default function ManageAdmin() {
    const { data, isError, isLoading, refetch } = useGetAdminQuery(undefined);
    const adminData = data?.data ? [...data.data].reverse() : [];
    const [deleteAdmin] = useDeleteAdminMutation();
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

    const handleDelete = (id: string) => {
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
                deleteAdmin(id);
                toast.success('Admin deleted successfully!');
                refetch();
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    if (isLoading) {
        return <span className="">Loading...</span>;
    }
    if (isError) {
        return <span className="">data failed...</span>;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',
            dataIndex: 'no',
            render: (_: any, __: any, index: number) => <span>{index + 1}</span>,
        },
        {
            title: 'Admin Name',
            dataIndex: 'name',
            key: 'name',
            render: (_: any, record) => <span>{`${record?.firstName} ${record?.lastName}`}</span>,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },

        {
            title: 'Admin Type',
            dataIndex: 'role',
            key: 'role',
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-36" key={record._id}>
                    {/* <button
                        className="mt-1"
                        onClick={() => {
                            setAdminModal(true), setEdit(record);
                        }}
                    >
                        <LiaEditSolid className="text-[5C5C3D] text-[22px] cursor-pointer" />
                    </button> */}

                    <button className="" onClick={() => handleLock(record._id)}>
                        {lock[record._id] ? <GoLock size={20} /> : <GoUnlock size={20} className="text-red-400" />}
                    </button>
                    <button className="" onClick={() => handleDelete(record._id)}>
                        <FaRegTrashCan size={18} className="text-red-400" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">
            <Searchber setAdminModal={setAdminModal} />

            <Table
                columns={columns}
                dataSource={adminData}
                rowKey={(record) => `${record._id}`}
                rowSelection={rowSelection}
            />
            {/* modal */}

            {adminModal && (
                <AdminModal
                    // @ts-ignore
                    edit={edit}
                    isOpen={adminModal}
                    refetch={refetch}
                    onClose={() => {
                        setAdminModal(false), setEdit(null);
                    }}
                />
            )}
        </div>
    );
}
