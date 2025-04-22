import { Table } from 'antd';
import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';

import { Link } from 'react-router-dom';
import type { TableColumnsType } from 'antd';
import { useGetBuyerQuery } from '../../../redux/buyerRegistration/buyer';
import SearchCategory from './SearchCategoy';

interface DataType {
    _id: string;
    user: {
        firstName: string;
        lastName: string;
    };

    vehicle: {
        brand: string;
    };
    email: string;
    contact: string;

    car: string;
    status: string;
    createdAt: string;
}

export default function BuyerRegistration() {
    const { data, isError, isLoading } = useGetBuyerQuery(undefined);
    console.log(data);
    const workData = data?.data?.registrations;
    console.log(workData);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    // const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    //     console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    //     setSelectedRowKeys(newSelectedRowKeys);
    // };

    // const rowSelection = {
    //     onchange: onSelectChange,
    //     selectedRowKeys,
    // };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('Selected row keys: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (isError) {
        return <span>data not found</span>;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',
            render: (_: any, __: DataType, index: number) => index + 1,
        },
        {
            title: 'Registration By',
            dataIndex: 'firstName',
            key: 'firstName',
            render: (_: any, record) => <span>{`${record?.user?.firstName} ${record?.user?.lastName}`}</span>,
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
            title: 'Post S. No',
            dataIndex: 'no',
            key: 'no',
            render: (no: string) => {
                return <span>#{no}</span>;
            },
        },
        {
            title: 'Car Name',
            dataIndex: 'brand',
            key: 'brand',
            render: (_: any, record) => <span>{`${record?.vehicle?.brand}`}</span>,
        },
        {
            title: 'Register Date',
            dataIndex: 'date',
            key: 'date',
            render: (_: any, record) => <span>{`${record?.createdAt.slice(0, 10)} `}</span>,
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record._id}>
                    <Link to="/all-details">
                        <button className="mt-1">
                            <CiCircleInfo size={25} className="text-[#6CA0DC]" />
                        </button>
                    </Link>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">
            <SearchCategory data={data?.data?.registrations} />

            {/* Table with Checkbox Selection */}
            <Table
                columns={columns}
                dataSource={workData}
                rowKey={(record) => `${record?._id}`}
                rowSelection={rowSelection}
            />
        </div>
    );
}
