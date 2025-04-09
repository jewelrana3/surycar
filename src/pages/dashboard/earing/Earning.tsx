import { Table } from 'antd';
import PageTitle from '../../../components/shared/PageTitle';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiEyeThin } from 'react-icons/pi';
import Swal from 'sweetalert2';
import { useState } from 'react';
import EarningDetailsModal from '../../../modal/EarningDetailsModal';
const data = [
    {
        id: 1,
        email: 'abg@gmail.com',
        date: '23 Dec 2024',
        business: 'Burger',
        price: '234',
        tranId: 'x4es34235345',
        status: 'Pending',
    },
    {
        id: 2,
        email: 'xyz@example.com',
        date: '20 Jan 2025',
        business: 'Pizza',
        price: '150',
        tranId: 'x5rt32455367',
        status: 'Completed',
    },
    {
        id: 3,
        email: 'john_doe@mail.com',
        date: '15 Feb 2025',
        business: 'Taco',
        price: '120',
        tranId: 'x6ty78546321',
        status: 'Pending',
    },
    {
        id: 4,
        email: 'sarah@gmail.com',
        date: '5 Mar 2025',
        business: 'Pasta',
        price: '200',
        tranId: 'x7uj67892345',
        status: 'Completed',
    },
    {
        id: 5,
        email: 'david@example.com',
        date: '28 Apr 2025',
        business: 'Sandwich',
        price: '80',
        tranId: 'x8kf23456890',
        status: 'Pending',
    },
    {
        id: 6,
        email: 'mike@hotmail.com',
        date: '12 May 2025',
        business: 'Steak',
        price: '500',
        tranId: 'x9lo12345678',
        status: 'Completed',
    },
    {
        id: 7,
        email: 'lucy@yahoo.com',
        date: '18 Jun 2025',
        business: 'Salad',
        price: '90',
        tranId: 'xa0qw98765432',
        status: 'Pending',
    },
    {
        id: 8,
        email: 'paul@outlook.com',
        date: '30 Jul 2025',
        business: 'Soup',
        price: '60',
        tranId: 'xb1sd12378901',
        status: 'Completed',
    },
];

export default function Earning() {
    // const [earingDetails, setEarningDetails] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: 'S.No',
            dataIndex: 'id',
            key: 'id',
            render: (index: number) => index + 1,
        },

        {
            title: <span className="">Email</span>,
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: <span className="">Date</span>,
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: <span className="">Business Name</span>,
            dataIndex: 'business',
            key: 'business',
            render: (business: string) => <div className="">{business}</div>,
            // align: 'center' as 'center',
        },

        {
            title: <span className="">price</span>,
            dataIndex: 'price',
            key: 'price',
            render: (price: string) => <div className="">${price}</div>,
            // align: 'center' as 'center',
        },
        {
            title: <span className="">TranId</span>,
            dataIndex: 'tranId',
            key: 'tranId',
            // render: (price: string) => <div className="">{price}</div>,
            // align: 'center' as 'center',
        },
        {
            title: <span className="">Status</span>,
            dataIndex: 'status',
            key: 'status',
            // render: (price: string) => <div className="">{price}</div>,
            // align: 'center' as 'center',
        },
        {
            title: <span className="">Action</span>,
            dataIndex: 'action',
            key: 'action',
            render: () => {
                return (
                    <div className="flex items-center gap-4 cursor-pointer">
                        <span onClick={() => setIsModalOpen(true)}>
                            <PiEyeThin size={22} className="text-yellow-100" />
                        </span>
                        <span onClick={handleDelete}>
                            <RiDeleteBin6Line size={20} className="text-red-400" />
                        </span>
                    </div>
                );
            },
        },
    ];

    const handleDelete = () => {
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
                Swal.fire({
                    title: 'Deleted!',
                    text: 'Your file has been deleted.',
                    icon: 'success',
                });
            }
        });
    };

    return (
        <div className="">
            <PageTitle className="my-5">Earning</PageTitle>
            <Table columns={columns} pagination={{ pageSize: 8 }} dataSource={data} rowKey="id" />

            {/* earning modal show */}
            {isModalOpen && <EarningDetailsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
    );
}
