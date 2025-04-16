import { Table } from 'antd';
import type { TableProps } from 'antd';
import { useState } from 'react';
import { LiaEditSolid } from 'react-icons/lia';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { FiPlus } from 'react-icons/fi';
import Swal from 'sweetalert2';
import { useDeletePromotionMutation, useGetPromotionQuery } from '../../../redux/promotion/promotion';
import { imgUrl } from '../../../redux/api/baseApi';
import PromotionModal from '../../../modal/PromotionModal';

interface DataType {
    _id: string;
    key: string;
    name: string;
    car: string;
    image: string;
}

export default function Slider2() {
    const { data: getPromotion, refetch } = useGetPromotionQuery(undefined);
    const [deletePromotion] = useDeletePromotionMutation();
    const data = getPromotion?.data;
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [slider1, setSlider1] = useState(false);
    const [edit, setEdit] = useState<DataType | null>(null);

    const onSelectChange = (newSelectedKeys: React.Key[]) => {
        setSelectedRowKeys(newSelectedKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const handleDelete = (record: DataType) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                deletePromotion(record._id);
                refetch();
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'S.No',
            key: 'serial',
            render: (_text, _record, index) => index + 1,
        },
        {
            title: 'Slider Name',
            dataIndex: 'name',
            key: 'name',
            render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Car Name',
            dataIndex: 'car',
            key: 'car',
            // render: (text: string) => <a>{text}</a>,
        },
        {
            title: 'Slider Image',
            dataIndex: 'image',
            key: 'image',
            render: (img: string) => (
                <img
                    src={img.startsWith('http') ? img : `${imgUrl}${img}`}
                    alt="slider"
                    className="object-cover rounded w-40 h-16"
                />
            ),
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div className="flex gap-3">
                    <button
                        onClick={() => {
                            setSlider1(true);
                            setEdit(record);
                        }}
                    >
                        <LiaEditSolid className="text-[#5C5C3D] text-[22px] cursor-pointer" />
                    </button>
                    <button onClick={() => handleDelete(record)}>
                        <RiDeleteBin6Line className=" text-[22px] cursor-pointer" />
                    </button>
                </div>
            ),
        },
    ];

    return (
        <div className="bg-[#F9F9F9] rounded-2xl">
            <div className="flex items-center justify-end p-2">
                <button
                    onClick={() => setSlider1(true)}
                    className="flex items-center gap-2 bg-[#188754] hover:bg-[#188754] text-white px-4 py-3 rounded-2xl font-medium shadow-sm"
                >
                    <FiPlus className="text-white" />
                    Upload Slider
                </button>
            </div>
            <Table<DataType> columns={columns} dataSource={data} rowSelection={rowSelection} pagination={false} />

            {/* modal */}
            {slider1 && (
                //@ts-ignore
                <PromotionModal
                    //@ts-ignore
                    edit={edit}
                    refetch={refetch}
                    isOpen={slider1}
                    onClose={() => {
                        setSlider1(false), setEdit(null);
                    }}
                />
            )}
        </div>
    );
}
