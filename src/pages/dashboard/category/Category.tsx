import { useState } from 'react';
import Button from '../../../components/shared/Button';

import { Table, Space } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import AddCategory from '../../../modal/AddCategory';

interface Category {
    _id: string;
    image: string;
}
const data = [
    {
        id: 1,
        name: 'Alice Johnson',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 2,
        name: 'Bob Smith',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 3,
        name: 'Charlie Brown',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 4,
        name: 'Diana Evans',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 5,
        name: 'Edward Clark',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 6,
        name: 'Fiona Williams',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 7,
        name: 'George Davis',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
    {
        id: 8,
        name: 'Hannah Lee',
        image: 'https://i.ibb.co.com/xJdQCTG/download.jpg',
    },
];

const Category = () => {
    const [createModal, setCreateModal] = useState(false);
    const [editCategory, setEditCategory] = useState<Category | null>(null);

    const handleDelete = async () => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to category this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        });
        if (result.isConfirmed) {
            try {
                Swal.fire({
                    title: 'Deleted',
                    text: 'Your category has been deleted',
                    icon: 'success',
                });
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error deleting the category.',
                    icon: 'error',
                });
            }
        }
    };

    const columns = [
        {
            title: 'S.No',
            dataIndex: 'key',
            key: 'key',
            render: (_: any, __: any, index: number) => index + 1,
            align: 'center' as 'center',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            align: 'center' as 'center',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (_: any, record: { image: string }) => (
                <img src={record.image} className="w-10 h-10 rounded-full" />
            ),
        },
        {
            title: 'Action',
            key: 'action',
            align: 'center' as 'center',
            render: (category: Category) => (
                <Space size="large">
                    <EditOutlined
                        onClick={() => {
                            setEditCategory(category);
                            setCreateModal(true);
                        }}
                        className="text-xl"
                        style={{ color: '#52c41a', cursor: 'pointer' }}
                    />
                    <DeleteOutlined
                        onClick={() => handleDelete()}
                        className="text-xl"
                        style={{ color: '#ff4d4f', cursor: 'pointer' }}
                    />
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className="flex items-center justify-between my-6">
                <div className="text-xl text-gray-200">Category</div>
                <div className="flex justify-end " onClick={() => setCreateModal(true)}>
                    <Button className="text-base">+ Add Category</Button>
                </div>
            </div>
            <Table
                dataSource={data}
                //@ts-ignore
                columns={columns}
                pagination={{ pageSize: 10 }}
                rowKey="id"
            />

            {/* Add or Edit Category Modal */}
            {createModal && (
                <AddCategory
                    isOpen={createModal}
                    editCategory={editCategory}
                    setEditCategory={setEditCategory}
                    onClose={() => {
                        setCreateModal(false);
                        setEditCategory(null);
                    }}
                />
            )}
        </>
    );
};

export default Category;
