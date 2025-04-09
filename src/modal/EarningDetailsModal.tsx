// import Modal from './Modal';
import { Modal } from 'antd';

interface EarningDetailsModal {
    isOpen: boolean;
    onClose: () => void;
}

const data = {
    id: 1,
    email: 'abg@gmail.com',
    date: '23 Dec 2024',
    business: 'Burger',
    price: '234',
    tranId: 'x4es34235345',
    status: 'Pending',
};

export default function EarningDetailsModal({ isOpen, onClose }: EarningDetailsModal) {
    if (!isOpen) return null;

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} className="mt-40 !bg-black">
            <div className="">
                <div className="text-lg font-medium ">
                    {/* Displaying each field from the data object */}
                    <p className="my-3">
                        <strong>Email :</strong> {data.email}
                    </p>
                    <p className="my-3">
                        <strong>Date :</strong> {data.date}
                    </p>
                    <p className="my-3">
                        <strong>Business Name :</strong> {data.business}
                    </p>
                    <p className="my-3">
                        <strong>Price :</strong> ${data.price}
                    </p>
                    <p className="my-3">
                        <strong>TranId :</strong> {data.tranId}
                    </p>
                    <p className="my-3">
                        <strong>Status :</strong> {data.status}
                    </p>
                </div>
            </div>
        </Modal>
    );
}
