import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';

interface DataType {
    key: string;
    name: string;
    image: string;
    code: string;
}

const columns: TableProps<DataType>['columns'] = [
    {
        title: 'S.No',
        key: 'serial',
        render: (_text, _record, index) => index + 1, // ✅ Serial number without relying on data
    },
    {
        title: 'Slider Name',
        dataIndex: 'name',
        key: 'name',
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Slider Image',
        dataIndex: 'image',
        key: 'image',
        render: (img: string) => <img src={img} alt="slider" className="w-12 h-12 object-cover rounded" />,
    },
    {
        title: 'Post Code',
        dataIndex: 'code',
        key: 'code',
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <div className="flex gap-3">
                <LiaEditSolid className="text-[#5C5C3D] text-[22px] cursor-pointer" />
                <RiDeleteBin6Line className=" text-[22px] cursor-pointer" />
            </div>
        ),
    },
];

const data: DataType[] = [
    {
        key: '1',
        name: 'Title name 1',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '1234',
    },
    {
        key: '2',
        name: 'Title name 2',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '5645',
    },
    {
        key: '3',
        name: 'Title name 3',
        image: 'https://i.ibb.co/Nn1R60c/image-map-usa-filled-stars-600nw-2005076390.webp',
        code: '3444',
    },
];

export default function Slider1() {
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const onSelectChange = (newSelectedKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange, // ✅ Typo fix: from `onchange` to `onChange`
    };

    return (
        <div className="bg-[#F9F9F9] rounded-2xl">
            <div className="flex items-center justify-end p-2">
                <button className="flex items-center gap-2 bg-[#188754] hover:bg-[#188754] text-white px-4 py-2 rounded-2xl font-medium shadow-sm">
                    <FiPlus className="text-white" />
                    Upload Slider
                </button>
            </div>
            <Table<DataType> columns={columns} dataSource={data} rowSelection={rowSelection} pagination={false} />
        </div>
    );
}
