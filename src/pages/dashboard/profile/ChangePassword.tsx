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
            <div className="mx-auto bg-transparent px-5 flex items-center justify-center mt-28 ">
                <div className="w-full lg:w-2/3 border border-borderGray rounded-xl px-7 pt-16 pb-5 ">
                    <ConfigProvider
                        theme={{
                            components: {
                                Input: {
                                    colorTextPlaceholder: 'rgba(61,61,61,0.25)',
                                },
                            },
                        }}
                    >
                        <Form form={form} onFinish={onFinish} layout="vertical" className="bg-transparent w-full">
                            <span className="text-[20px] font-semibold ">Current password</span>
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
                                    style={{ border: '1px solid gray' }}
                                    placeholder="Enter your password "
                                    className=" mt-1 py-2 px-3 text-xl"
                                />
                            </Form.Item>
                            <span className=" text-[20px] font-semibold ">New Password</span>
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
                                    style={{ border: '1px solid gray' }}
                                    placeholder="Enter your password"
                                    className=" mt-1 py-2 px-3 text-xl "
                                />
                            </Form.Item>

                            <span className=" text-[20px] font-semibold ">Re-enter new Password</span>
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
                                    style={{ border: '1px solid gray' }}
                                    placeholder="Enter your password"
                                    className=" mt-1 py-2 px-3 text-xl "
                                />
                            </Form.Item>
                            <Form.Item>
                                <ConfigProvider
                                    theme={{
                                        components: {
                                            Button: {
                                                defaultBg: '',

                                                defaultBorderColor: '',
                                                defaultActiveBorderColor: '',
                                                defaultColor: '',
                                                defaultActiveColor: '',
                                            },
                                        },
                                    }}
                                >
                                    <Button className="w-full mt-3" htmlType="submit">
                                        Change password
                                    </Button>
                                </ConfigProvider>
                            </Form.Item>
                        </Form>
                    </ConfigProvider>
                </div>
            </div>
        </>
    );
}
