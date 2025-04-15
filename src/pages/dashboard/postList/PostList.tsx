import { Table } from 'antd';
import { useState } from 'react';
import { CiCircleInfo } from 'react-icons/ci';
import { GoLock, GoUnlock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import type { TableColumnsType } from 'antd';
import SearchCategory from '../../../components/shared/SearchCategory';

interface DataType {
    key: React.Key;
    no: string;
    name: string;
    address: string;
    price: string;
    category: string;
    sellerName: string;
    status: string;
    date: string;
}

const data = [
    {
        key: '1',
        no: '#2472',
        name: 'Opel Corsa',
        address: '3891 Ranchview Dr. Richardson',
        price: 'SYP 130,019,000',
        category: 'Bike',
        sellerName: 'Nadir',
        date: '2/11/12',
        status: 'Posted',
    },
    {
        key: '2',
        no: '#2450',
        name: 'Opel Corsa',
        address: '4517 Washington Ave. Manchester',
        price: 'SYP 130,019,000',

        category: 'Car',
        sellerName: 'Azad',
        date: '8/30/14',
        status: 'Holding',
    },
    {
        key: '3',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Bike',
        sellerName: 'Nadir',
        date: '8/2/19',
        status: 'Holding',
    },
    {
        key: '4',
        no: '#2450',
        name: 'Opel Corsa',
        address: '2464 Royal Ln. Mesa',
        price: 'SYP 130,019,000',

        category: 'Car',
        sellerName: 'Azad',
        status: 'Holding',
        date: '8/16/13',
    },
    {
        key: '5',
        no: '#2450',
        name: 'Opel Corsa',
        address: '8502 Preston Rd. Inglewood',
        price: 'SYP 130,019,000',

        category: 'Car',
        sellerName: 'Aziz',
        date: '5/19/12',
        status: 'Posted',
    },
    {
        key: '6',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Bike',
        sellerName: 'Fahim',
        date: '7/27/13',
        status: 'Re-post',
    },
    {
        key: '9',
        no: '#2450',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',
        category: 'Car',
        sellerName: 'Mithila',
        date: '10/6/13',
        status: 'Posted',
    },
    {
        key: '10',
        no: '#2472',
        name: 'Opel Corsa',
        address: '3517 W. Gray St. Utica',
        price: 'SYP 130,019,000',

        category: 'Car',
        sellerName: 'Rahad',
        date: '5/30/14',
        status: 'Posted',
    },
    {
        key: '11',
        no: '#2450',
        name: 'Opel Corsa',
        address: '2715 Ash Dr. San Jose',
        price: 'SYP 130,019,000',

        category: 'Car',
        sellerName: 'Parves',
        date: '4/4/18',
        status: 'Posted',
    },
];

export default function PostList() {
    const [lock, setLock] = useState<{ [key: string]: boolean }>({});
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const handleLock = (key: string) => {
        setLock((prevLock) => ({
            ...prevLock,
            [key]: !prevLock[key],
        }));
    };

    const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        onchange: onSelectChange,
        selectedRowKeys,
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: 'S.No',
            dataIndex: 'no',
        },
        {
            title: 'Car Name',
            dataIndex: 'name',
            key: 'name',
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
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Seller Name',
            dataIndex: 'sellerName',
            key: 'sellerName',
        },
        {
            title: 'Post Date',
            dataIndex: 'date',
            key: 'date',
        },

        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <span style={{ color: status === 'Posted' ? 'green' : status === 'Holding' ? 'orange' : 'red' }}>
                    {status}
                </span>
            ),
        },

        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_: any, record: DataType) => (
                <div className="flex justify-center items-center gap-2 -ml-8" key={record.no}>
                    <Link to="/post-details">
                        <button className="mt-1">
                            <CiCircleInfo size={25} className="text-[#6CA0DC]" />
                        </button>
                    </Link>
                    <button className="" onClick={() => handleLock(record.no)}>
                        {lock[record.no] ? <GoLock size={25} /> : <GoUnlock size={25} className="text-red-400" />}
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-white rounded-lg">
            <SearchCategory />
            {/* Table with Checkbox Selection */}
            <Table
                columns={columns}
                dataSource={data}
                rowKey={(record) => `${record.key} `}
                rowSelection={rowSelection}
            />
        </div>
    );
}
