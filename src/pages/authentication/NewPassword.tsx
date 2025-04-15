import { ConfigProvider, Form, Input } from 'antd';

import { useNavigate } from 'react-router';
import newPass from '../../../public/auth/new-pass.svg';
import Button from '../../components/shared/Button';
import { useResetPasswordMutation } from '../../redux/apiSlice/authSlice';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const NewPassword = () => {
    const navigate = useNavigate();
    const [resetPassword, { isError, isSuccess, data, isLoading }] = useResetPasswordMutation();

    useEffect(() => {
        if (isSuccess && data) {
            toast.success('Password reset successfully');
            navigate('/login');
        } else {
            toast.error('Password reset failed');
        }
    }, [isError, isSuccess, data, navigate]);

    const onFinish = async (values: { newPassword: string; confirmPassword: string }) => {
        console.log(values);

        await resetPassword(values);
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FBB040',
                    colorBgContainer: '#FFFFFF',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: 'transparent',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: 'transparent',
                        controlOutline: 'none',
                        activeBorderColor: 'transparent',
                    },

                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div
                className="
            flex items-center justify-center h-screen bg-[#F9F9F9]"
            >
                <div className="flex  items-center justify-center pl-7 ">
                    <div className=" w-[550px] ">
                        <div className="flex items-center justify-center">
                            <img src="/logo.svg" alt="logo" className="w-24" />
                        </div>
                        <div className=" space-y-3 text-center my-7">
                            <h1 className="text-3xl  font-medium mt-2">Reset Password</h1>
                            <p className="text-[#929292]">Please enter your email and password to continue</p>
                        </div>

                        <Form
                            name="normal_NewPassword"
                            className="NewPassword-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                label={
                                    <label htmlFor="password" className="block  mb-1 text-lg">
                                        New Password
                                    </label>
                                }
                                name="newPassword"
                                rules={[{ required: true, message: 'Please input new password!' }]}
                            >
                                <Input.Password placeholder="KK!@#$15856" className=" h-12 px-6" />
                            </Form.Item>
                            <Form.Item
                                label={
                                    <label htmlFor="password" className="block  mb-1 text-lg">
                                        Confirm Password
                                    </label>
                                }
                                name="confirmPassword"
                                rules={[{ required: true, message: 'Please input confirm password!' }]}
                            >
                                <Input.Password placeholder="KK!@#$15856" className="h-12 px-6" />
                            </Form.Item>

                            <Form.Item>
                                <Button className="bg-bgYellow w-full rounded-md text-[#181818] mt-5" htmlType="submit">
                                    {isLoading ? 'Updating' : 'Update Password'}
                                    Confirm
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
                <div className="px-5">
                    <img src={newPass} width={460} height={460} alt="forgot" />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default NewPassword;
