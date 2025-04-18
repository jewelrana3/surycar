import { Button, Form, Input, Modal, Select } from 'antd';
import { useEffect } from 'react';
import { useCreateAdminMutation } from '../redux/admin/admin';
import { toast } from 'react-toastify';

interface DataType {
    key: string;
    name: string;
    email: string;
    password: string;
    type: string;
}

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit?: DataType;
    refetch: () => void;
}

export default function AdminModal({ edit, isOpen, onClose, refetch }: PakageModalProps) {
    const [createAdmin] = useCreateAdminMutation();
    const [form] = Form.useForm();

    useEffect(() => {
        if (edit?.key) {
            form.setFieldsValue({
                name: edit?.name,
                email: edit?.email,
                password: edit?.password,
            });
        } else {
            form.setFieldsValue({
                name: '',
                email: '',
                password: '',
                type: '',
            });
        }
    }, [edit]);

    const onFinish = async (values: any) => {
        console.log('Submitted Payload:', values);
        try {
            await createAdmin(values).then((res) => {
                console.log(res);
            });
            toast.success('Admin created successfully!');
            form.resetFields();
            refetch();
            onClose();
        } catch (error) {
            console.error('Error creating admin:', error);
        }
    };

    const onChange = async (value: string) => {
        console.log('Selected value:', value);
    };

    return (
        <>
            <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
                <h1 className="text-2xl mb-4">{edit ? 'Edit Admin' : 'Add Admin'}</h1>
                <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                    <Form.Item
                        name="firstName"
                        label="First Name"
                        rules={[{ required: true, message: 'Please enter admin name' }]}
                    >
                        <Input placeholder="Enter admin name" className="rounded-md h-10" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Last Name"
                        rules={[{ required: true, message: 'Please enter admin name' }]}
                    >
                        <Input placeholder="Enter admin name" className="rounded-md h-10" />
                    </Form.Item>

                    <Form.Item name="email" label="Email" rules={[{ required: true, message: 'Please enter email' }]}>
                        <Input placeholder="Enter email" className="rounded-md h-10" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        label="Password"
                        rules={[{ required: true, message: 'Please enter password' }]}
                    >
                        <Input.Password placeholder="Enter password" className="rounded-md h-10" />
                    </Form.Item>

                    <Form.Item
                        name="role"
                        label="Admin Type"
                        rules={[{ required: true, message: 'Please enter admin type' }]}
                    >
                        <Select onChange={(value) => onChange(value)} className="w-full h-10">
                            <Select.Option value="ADMIN">ADMIN</Select.Option>
                        </Select>
                    </Form.Item>

                    <Form.Item className="mt-5">
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
