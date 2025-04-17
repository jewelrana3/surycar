import { Button, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import { imgUrl } from '../redux/api/baseApi';
import { useCreateSliderMutation, useUpdateSliderMutation } from '../redux/slider/slider';
import { toast } from 'react-toastify';

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit?: {
        _id?: string;
        name?: string;
        image?: string;
    };
    refetch: () => void;
}

export default function Slider1Modal({ edit, isOpen, onClose, refetch }: PakageModalProps) {
    const [updateSlider] = useUpdateSliderMutation();
    const [createSlider] = useCreateSliderMutation();

    const [form] = Form.useForm();
    const [selectFile, setSelectFile] = useState<File | string | null>(null);
    console.log(selectFile);

    useEffect(() => {
        if (edit?._id) {
            form.setFieldsValue({
                name: edit?.name,
            });
            setSelectFile(edit?.image?.startsWith('http') ? edit?.image : `${imgUrl}${edit?.image}`);
        }
    }, [edit, form]);

    const onFinish = async (values: { name: string }) => {
        const formData = new FormData();
        formData.append('name', values.name);

        if (selectFile) {
            formData.append('image', selectFile);
        }

        if (edit?._id) {
            await updateSlider({ _id: edit?._id, data: formData });
            toast.success('Slider updated successfully!');
        } else {
            await createSlider(formData).then((res) => {
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
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectFile(file);
        }
    };

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
            <h1 className="text-2xl mb-4">{edit ? 'Edit Slider' : 'Add Slider'}</h1>
            <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter name' }]}>
                    <Input placeholder="Enter name" className="rounded-md h-10" />
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
