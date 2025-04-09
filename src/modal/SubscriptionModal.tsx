import { Modal } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import '../pages/dashboard/subscripton/Subscription.css';

const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

interface SubscriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SubscriptionModal = ({ isOpen, onClose }: SubscriptionModalProps) => {
    const [form] = Form.useForm();

    const [title, setTitle] = useState<string[]>([]);
    const [price, setPrice] = useState<string[]>([]);
    const [inclusions, setInclusions] = useState<string[]>([]);
    const [benefits, setBenefits] = useState<string[]>([]);

    console.log('Title:', title);
    console.log('Price:', price);
    console.log('Inclusions:', inclusions);
    console.log('Benefits:', benefits);

    // Handle form submission
    const onFinish = (values: any) => {
        console.log('Received values of form:', values);
    };

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} centered className="h-60 mb-80">
            <Form form={form} name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
                {/* Title List */}

                <div className="mb-0">
                    <p className="mb-1 text-black ml-20">Title Name : </p>
                    <Form.Item
                        name="title"
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: 'Please input a title.',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Title name"
                            style={{ width: '80%' }}
                            className="h-10 rounded-md"
                            onChange={(e) => setTitle((prev) => [...prev, e.target.value])} // Update the title value on change
                        />
                    </Form.Item>
                </div>

                {/* price List */}
                <div className="mb-0">
                    <p className="mb-1 text-black ml-20">Price : </p>
                    <Form.Item
                        name="Price"
                        rules={[
                            {
                                required: true,
                                whitespace: true,
                                message: 'enter price',
                            },
                        ]}
                    >
                        <Input
                            placeholder="Price"
                            style={{ width: '80%' }}
                            className="h-10 rounded-md"
                            onChange={(e) => setPrice((prev) => [...prev, e.target.value])} // Update the title value on change
                        />
                    </Form.Item>
                </div>

                {/* Inclusions List */}
                <Form.List
                    name="inclusions"
                    rules={[
                        {
                            validator: async (_, inclusions) => {
                                if (!inclusions || inclusions.length < 1) {
                                    return Promise.reject(new Error('At least 1 inclusion is required.'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map((field) => (
                                <Form.Item key={field.key}>
                                    <p className="mb-1">Inclusion add :</p>
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: 'Please input an inclusion or delete this field.',
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="Inclusion add"
                                            className="rounded-md h-10"
                                            style={{ width: '80%' }}
                                            onChange={(e) => setInclusions((prev) => [...prev, e.target.value])}
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button ml-4"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '80%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add Inclusions
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                {/* Benefits List */}

                <Form.List
                    name="benefits"
                    rules={[
                        {
                            validator: async (_, benefits) => {
                                if (!benefits || benefits.length < 1) {
                                    return Promise.reject(new Error('At least 1 benefit is required.'));
                                }
                            },
                        },
                    ]}
                >
                    {(fields, { add, remove }) => (
                        <>
                            {fields.map((field) => (
                                <Form.Item key={field.key}>
                                    <p className="mb-1">Benefit add :</p>
                                    <Form.Item
                                        {...field}
                                        validateTrigger={['onChange', 'onBlur']}
                                        rules={[
                                            {
                                                required: true,
                                                whitespace: true,
                                                message: 'Please input a benefit or delete this field.',
                                            },
                                        ]}
                                        noStyle
                                    >
                                        <Input
                                            placeholder="Benefit add"
                                            className="rounded-md h-10"
                                            style={{ width: '80%' }}
                                            onChange={(e) => setBenefits((prev) => [...prev, e.target.value])} // Capture benefit value
                                        />
                                    </Form.Item>
                                    {fields.length > 1 ? (
                                        <MinusCircleOutlined
                                            className="dynamic-delete-button ml-4"
                                            onClick={() => remove(field.name)}
                                        />
                                    ) : null}
                                </Form.Item>
                            ))}
                            <Form.Item>
                                <Button
                                    type="dashed"
                                    onClick={() => add()}
                                    style={{ width: '80%' }}
                                    icon={<PlusOutlined />}
                                >
                                    Add Benefits
                                </Button>
                            </Form.Item>
                        </>
                    )}
                </Form.List>

                <Form.Item>
                    <div className="flex items-center gap-28 ">
                        <Button className="bg-bgGolden w-24 h-9 font-semibold" htmlType="submit">
                            Submit
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default SubscriptionModal;
