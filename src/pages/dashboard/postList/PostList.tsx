import { ConfigProvider, Table } from 'antd';
import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { GoLock, GoUnlock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import type { TableColumnsType } from 'antd';
import { useGetPostListQuery } from '../../../redux/postList/post-list';
import SearchCategory from './SearchCategory';

interface DataType {
    _id: string;
    name: string;
    address: string;
    price: string;
    category: string;
    sellerName: string;
    status: string;
    date: string;
    createdAt: string;
    brand: string;
    model: string;
    user: {
        firstName: string;
    };
}

export default function PostList() {
    const { data: getPostList, isLoading, isError } = useGetPostListQuery(undefined);
    const getData = getPostList?.data?.vehicles;

    console.log(getData);

    const [lock, setLock] = useState<{ [key: string]: boolean }>({});
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const handleLock = (key: string) => {
        setLock((prevLock) => ({
            ...prevLock,
            [key]: !prevLock[key],
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

    if (isLoading) {
        return <span>Loading ....</span>;
    }
    if (isError) {
        return <span>data not found ....</span>;
    }

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',

            render: (_: any, __: DataType, index: number) => index + 1,
        },
        {
            title: 'Car Name',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (_: any, record) => <span>$ {record.price}</span>,
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            render: (_: any, record) => <span>{record?.model}</span>,
        },
        {
            title: 'Seller Name',
            dataIndex: 'sellerName',
            key: 'sellerName',
            render: (_: any, record) => <span>{record?.user?.firstName}</span>,
        },
        {
            title: 'Post Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (_: any, record) => <span>{record?.createdAt?.slice(0, 10)}</span>,
        },

        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <span style={{ color: status === 'Published' ? 'green' : status === 'Holding' ? 'orange' : 'red' }}>
                    {status}
                </span>
            ),
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record?._id}>
                    <Link to={`/post-details/${record?._id}`} state={record}>
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

    const getRowClassName = (record: DataType) => {
        if (selectedRowKeys.includes(record._id)) {
            return 'selected-row'; // Apply custom class to selected rows
        }
        if (record.status === 'Published') {
            return 'published-row'; // class for Published status
        }
        return '';
    };

    return (
        <div className=" rounded-lg">
            <SearchCategory data={getData} />
            {/* Table with Checkbox Selection */}

            <Table
                columns={columns}
                dataSource={getData}
                rowKey={(record) => `${record?._id}`}
                rowSelection={rowSelection}
                rowClassName={getRowClassName}
            />
        </div>
    );
}
