import { ConfigProvider, Form, Input } from 'antd';
import Button from '../../../components/shared/Button';
import { useChangePasswordMutation } from '../../../redux/profile/profile';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { IoMdClose } from 'react-icons/io';

export default function ChangePassword() {
    const navigate = useNavigate();
    const [changePassword] = useChangePasswordMutation();

    const [form] = Form.useForm();

    const onFinish = async (values: string) => {
        try {
            await changePassword(values);
            toast.success('Password changed successfully!');
            navigate('/profile');
        } catch (error) {
            toast.error('Failed to change password!');
        }

        form.resetFields();
    };

    return (
        <div className="bg-white rounded-lg py-6">
            <div className="flex justify-end mr-10">
                <button onClick={() => navigate('/profile')}>
                    <IoMdClose size={29} />
                </button>
            </div>
            <div className="mx-auto bg-transparent px-5 flex items-center justify-center  ">
                <div className="w-full lg:w-2/5  rounded-xl px-7 pt-16 pb-5 ">
                    <ConfigProvider
                        theme={{
                            components: {
                                Input: {
                                    colorTextPlaceholder: 'rgba(61,61,61,0.25)',
                                    colorBorder: '#636363',
                                },
                            },
                        }}
                    >
                        <Form
                            form={form}
                            onFinish={onFinish}
                            layout="vertical"
                            className="bg-transparent w-full"
                            style={{ fontFamily: 'Poppins' }}
                        >
                            <span className="text-base font-medium text-[#636363]">Old Password</span>
                            <Form.Item
                                name="currentPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your current password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Please input your current password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password "
                                    className=" mt-1 py-2 px-3 text-xl rounded-md "
                                />
                            </Form.Item>
                            <span className=" text-base font-medium text-[#636363]">New Password</span>
                            <Form.Item
                                name="newPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your new password!',
                                    },
                                    {
                                        min: 6,
                                        message: 'Password must be at least 6 characters',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    className=" mt-1 py-2 px-3 text-xl rounded-md"
                                />
                            </Form.Item>

                            <span className=" text-base font-medium text-[#636363]">Confirm new Password</span>
                            <Form.Item
                                name="confirmPassword"
                                className="text-black"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your new password!',
                                    },
                                ]}
                            >
                                <Input.Password
                                    placeholder="Enter your password"
                                    className=" mt-1 py-2 px-3 text-xl rounded-md"
                                />
                            </Form.Item>
                            <Form.Item>
                                <div className="flex justify-center items-center">
                                    <Form.Item className="mt-5">
                                        <Button
                                            style={{ fontFamily: 'Poppins' }}
                                            //@ts-ignore
                                            type="primary"
                                            htmlType="submit"
                                            className="bg-[#6DBD44] rounded-xl"
                                        >
                                            Save & Change
                                        </Button>
                                    </Form.Item>
                                </div>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    );
}
