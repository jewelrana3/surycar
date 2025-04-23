import { Table } from 'antd';
import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { GoLock, GoUnlock } from 'react-icons/go';
import { Link } from 'react-router-dom';

import type { TableColumnsType } from 'antd';
import SearchCategory from '../../../components/shared/SearchCategory';
import { useGetCutomersQuery } from '../../../redux/customer/customer';

interface DataType {
    _id: string;
    firstName: string;
    lastName: string;

    address: string;
    email: string;
    contact: string;
    createdAt: string;
}

export default function Customers() {
    const { data, isLoading, isError } = useGetCutomersQuery(undefined);
    const customerData = data?.data;
    const [lock, setLock] = useState<{ [key: string]: boolean }>({});
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

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

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',
            dataIndex: 'no',
            render: (_: any, __: DataType, index: number) => index + 1,
        },
        {
            title: 'User Name',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_: any, record) => <span>{`${record?.firstName} ${record?.lastName}`}</span>,
        },
        {
            title: 'Address',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Contact No',
            dataIndex: 'contact',
            key: 'contact',
        },
        {
            title: 'Register Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (_: any, record) => <span>{record?.createdAt?.slice(0, 10)}</span>,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record?._id}>
                    <Link to="/customer-details" state={record}>
                        <button className="mt-1">
                            <CiCircleInfo size={25} className="text-[#6CA0DC]" />
                        </button>
                    </Link>
                    <button className="" onClick={() => handleLock(record?._id)}>
                        {lock[record?._id] ? <GoLock size={25} /> : <GoUnlock size={25} className="text-red-400" />}
                    </button>
                </div>
            ),
        },
    ];

    if (isLoading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (isError) {
        return <div className="flex justify-center items-center h-screen">data not found...</div>;
    }

    return (
        <div className="bg-white rounded-lg">
            <SearchCategory data={customerData} setLock={setLock} selectedRowKeys={selectedRowKeys as string[]} />
            {/* Table with Checkbox Selection */}
            <Table
                columns={columns}
                dataSource={customerData}
                rowKey={(record) => `${record?._id}`}
                rowSelection={rowSelection}
            />
        </div>
    );
}
