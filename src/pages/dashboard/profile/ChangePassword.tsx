import { ConfigProvider, Form, Input } from 'antd';
import Button from '../../../components/shared/Button';

export default function ChangePassword() {
    //   const navigate = useNavigate();
    //   const [changePassword] = useChangePasswordMutation();

    const [form] = Form.useForm();

    const onFinish = (values: string) => {
        console.log(values);
        form.resetFields();
    };

    return (
        <>
            <div className="mx-auto bg-transparent px-5 flex items-center justify-center  bg-white rounded-lg py-6">
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
                                name="reEnterPassword"
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
        </>
    );
}
