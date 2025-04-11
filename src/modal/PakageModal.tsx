import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import { IoMdCheckmarkCircle } from 'react-icons/io';

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function PakageModal({ isOpen, onClose }: PakageModalProps) {
    const [form] = Form.useForm();
    const [isOfferModalOpen, setOfferModalOpen] = useState(false);
    const [newOffer, setNewOffer] = useState('');

    const [offers, setOffers] = useState([
        '120 day permission to use',
        'Free training tutorial',
        'Free journal',
        'Free consultations',
        '20 Community post',
    ]);

    const removeOffer = (index: number) => {
        const updated = offers.filter((_, i) => i !== index);
        setOffers(updated);
    };

    const handleAddOffer = () => {
        if (newOffer.trim()) {
            setOffers([...offers, newOffer]);
            setNewOffer('');
            setOfferModalOpen(false);
        }
    };

    const onFinish = (values: any) => {
        const payload = {
            ...values,
            offers,
        };
        console.log('Submitted Payload:', payload);
        onClose();
    };

    return (
        <>
            <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
                <h1 className="text-2xl mb-4">Edit Package</h1>
                <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                    <Form.Item
                        name="price"
                        label="Package Price"
                        rules={[{ required: true, message: 'Please enter package price' }]}
                    >
                        <Input placeholder="Enter price" className="rounded-md h-10" />
                    </Form.Item>

                    <Form.Item
                        name="package"
                        label="Package Details"
                        rules={[{ required: true, message: 'Please enter package details' }]}
                    >
                        <Input.TextArea placeholder="Enter package details" className="rounded-md" rows={4} />
                    </Form.Item>

                    {/* Custom Section (not Form.Item) */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center mb-2 px-1">
                            <h2 className="font-medium text-gray-700">Package Offers</h2>
                            <button type="button" onClick={() => setOfferModalOpen(true)}>
                                <FiPlusCircle className="text-orange-500 w-6 h-6" />
                            </button>
                        </div>
                        <div className="border border-gray-300 rounded-lg p-4 space-y-3">
                            {offers.map((offer, index) => (
                                <div key={index} className="flex justify-between items-center">
                                    <div className="flex items-center gap-2 text-gray-700">
                                        <IoMdCheckmarkCircle className="text-green-500 w-5 h-5" />
                                        <span>{offer}</span>
                                    </div>
                                    <button type="button" onClick={() => removeOffer(index)}>
                                        <FiMinusCircle className="text-gray-500 w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                backgroundColor: '#188754',
                                borderColor: '#188754',
                                color: '#fff',
                            }}
                            className="w-full py-5"
                        >
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>

            {/* Modal for adding new offer */}
            <Modal
                title="Add New Offer"
                open={isOfferModalOpen}
                onCancel={() => setOfferModalOpen(false)}
                onOk={handleAddOffer}
                okText="Add"
            >
                <Input
                    className="rounded-md"
                    value={newOffer}
                    onChange={(e) => setNewOffer(e.target.value)}
                    placeholder="Enter offer name"
                />
            </Modal>
        </>
    );
}
