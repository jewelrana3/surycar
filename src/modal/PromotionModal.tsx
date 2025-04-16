import { Button, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { imgUrl } from '../redux/api/baseApi';
import { toast } from 'react-toastify';
import { useCreatePromotionMutation, useUpdatePromotionMutation } from '../redux/promotion/promotion';

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit?: {
        _id?: string;
        name?: string;
        vehicle?: string;
        image?: string;
    };
    refetch: () => void;
}

export default function PromotionModal({ edit, isOpen, onClose, refetch }: PakageModalProps) {
    const [updatePromotion] = useUpdatePromotionMutation();
    const [createPromotion] = useCreatePromotionMutation();

    const [form] = Form.useForm();
    const [selectFile, setSelectFile] = useState<File | string | null>(null);

    useEffect(() => {
        if (edit?._id) {
            form.setFieldsValue({
                name: edit?.name,
                car: edit?.vehicle,
                vehicle: edit?.vehicle,
            });
            setSelectFile(edit?.image?.startsWith('http') ? edit?.image : `${imgUrl}${edit?.image}`);
        }
    }, [edit, form]);

    const onFinish = async (values: { name: string; car: string; vehicle: string }) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('car', values.car);
        formData.append('vehicle', values.vehicle);

        if (selectFile) {
            formData.append('image', selectFile);
        }

        try {
            if (edit?._id) {
                await updatePromotion({ _id: edit?._id, data: formData });
                toast.success('Slider updated successfully!');
            } else {
                await createPromotion(formData).then((res) => {
                    console.log(res);
                    if (res?.data?.success) {
                        toast.success('Slider created successfully!');
                    } else {
                        toast.error('Slider created failed!');
                    }
                });
            }
            refetch();
            onClose();
            form.resetFields();
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectFile(file);
        }
    };

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
            <h1 className="text-2xl mb-4">{edit ? 'Edit Promotion' : 'Add Promotion'}</h1>
            <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
                    <Input placeholder="Enter name" className="rounded-md h-10" />
                </Form.Item>
                <Form.Item name="vehicle" label="vehicle" rules={[{ required: true, message: 'Please enter vehicle' }]}>
                    <Input placeholder="Enter vehicle" className="rounded-md h-10" />
                </Form.Item>

                {/* Custom Section (not Form.Item) */}
                <div className="mb-4">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <h2 className="font-medium text-gray-700">Slider Image</h2>
                        <Input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            style={{ display: 'none' }}
                            id="file-upload"
                        />
                    </div>
                    {selectFile ? (
                        <img
                            src={selectFile instanceof File ? URL.createObjectURL(selectFile) : selectFile}
                            alt="file image"
                            // className="w-40 h-60"
                        />
                    ) : (
                        <p className="border border-gray-400 rounded-md p-3 flex justify-center items-center h-20 text-center">
                            <label
                                htmlFor="file-upload"
                                className="cursor-pointer flex flex-col justify-center items-center"
                            >
                                <FiPlusCircle className="text-orange-500 w-6 h-6" />
                                <span>Upload Image</span>
                            </label>
                        </p>
                    )}
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
    );
}
