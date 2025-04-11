import { Button, Form, Input, Modal } from 'antd';
import { useEffect, useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

interface DataType {
    key: string;
    name: string;
    image: string;
    code: string;
}

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit: DataType | null;
}

export default function Slider1Modal({ edit, isOpen, onClose }: PakageModalProps) {
    console.log(edit);
    const [form] = Form.useForm();
    const [selectFile, setSelectFile] = useState<string | null>(null);

    useEffect(() => {
        if (edit?.key) {
            form.setFieldsValue({
                name: edit?.name,
                image: edit?.image,
                code: edit?.code,
            });
            setSelectFile(edit?.image);
        } else {
            form.setFieldsValue({
                name: '',
                image: '',
                code: '',
            });
        }
    }, [edit]);

    const onFinish = (values: any) => {
        console.log('Submitted Payload:', values);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setSelectFile(URL.createObjectURL(file));
        }
        form.setFieldsValue({ image: file?.name });
    };

    return (
        <>
            <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
                <h1 className="text-2xl mb-4">{edit ? 'Edit Slider' : 'Add Slider'}</h1>
                <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                    <Form.Item
                        name="name"
                        label="Package Price"
                        rules={[{ required: true, message: 'Please enter package price' }]}
                    >
                        <Input placeholder="Enter name" className="rounded-md h-10" />
                    </Form.Item>

                    <Form.Item
                        name="code"
                        label="Package Details"
                        rules={[{ required: true, message: 'Please enter post code' }]}
                    >
                        <Input placeholder="Enter package details" className="rounded-md" />
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
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <FiPlusCircle className="text-orange-500 w-6 h-6" />
                            </label>
                        </div>
                        {selectFile && <img src={selectFile} alt="file image" className="w-40 h-60" />}
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
        </>
    );
}
