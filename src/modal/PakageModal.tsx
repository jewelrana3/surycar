import { Button, Form, Input, Modal } from 'antd';
import { useGetPackageQuery, useUpdatePackageMutation } from '../redux/packageSetting/packageSetting';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

interface PakageModalProps {
    isOpen: boolean;
    onClose: () => void;
    edit?: { _id: string; price: number; validity: number; description: string };
}

export default function PakageModal({ isOpen, onClose, edit }: PakageModalProps) {
    const [updatePackage] = useUpdatePackageMutation();
    const { refetch } = useGetPackageQuery(undefined);
    const [form] = Form.useForm();

    useEffect(() => {
        if (edit?._id) {
            form.setFieldsValue({
                price: edit?.price,
                validity: edit?.validity,
                description: edit?.description,
            });
        }
    }, [edit, form]);

    const onFinish = async (values: { _id: string; price: number; validity: number; description: string }) => {
        console.log(values);

        try {
            const response = await updatePackage({ id: edit?._id, data: values });
            console.log('API Response:', response);
            toast.success('Update successfully');
            onClose();
            refetch();
        } catch (error) {
            console.log('Update failed:', error);
            toast.error('Failed to update package');
        }
    };

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} style={{ fontFamily: 'Poppins' }}>
            <h1 className="text-2xl mb-4">Edit Package</h1>
            <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium">
                <Form.Item
                    name="price"
                    label="Price"
                    rules={[{ required: true, message: 'Please enter package price' }]}
                >
                    <Input type="number" placeholder="Enter price" className="rounded-md h-10" />
                </Form.Item>
                <Form.Item
                    name="validity"
                    label="Validity"
                    rules={[{ required: true, message: 'Please enter validity' }]}
                >
                    <Input type="number" placeholder="Enter validity" className="rounded-md h-10" />
                </Form.Item>

                <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true, message: 'Please enter description' }]} // Updated message
                >
                    <Input.TextArea placeholder="Enter package details" className="rounded-md" rows={4} />
                </Form.Item>

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
