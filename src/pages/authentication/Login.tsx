import { Checkbox, ConfigProvider, Form, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/shared/Button';
import { useLoginMutation } from '../../redux/apiSlice/authSlice';
import { useEffect } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const [login, { isError, isSuccess, data, error }] = useLoginMutation();
    const navigate = useNavigate();
    const [form] = Form.useForm();

    useEffect(() => {
        if (isSuccess && data) {
            Swal.fire({
                text: data.message,
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            }).then(() => {
                if (data) {
                    localStorage.setItem('accessToken', data?.data?.accessToken);
                    sessionStorage.setItem('accessToken', data?.data?.accessToken);
                    navigate('/');
                }
            });
        } else if (isError) {
            Swal.fire({
                title: 'Login failed',
                //@ts-ignore
                text: error?.data?.message,
                icon: 'error',
                confirmButtonText: 'OK',
            });
        }
    }, [isError, isSuccess, data, error, navigate]);

    const onFinish = async (values: { email: string; password: string }) => {
        console.log(values);
        form.resetFields();

        const data = {
            email: values?.email,
            password: values?.password,
        };

        await login(data).unwrap();
    };

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#FBB040',

                    colorBgContainer: '#F1F4F9',
                },
                components: {
                    Input: {
                        borderRadius: 10,
                        colorBorder: '#757575',
                        colorPrimaryBorder: 'transparent',
                        // hoverBorderColor: 'transparent',
                        // controlOutline: 'none',
                        activeBorderColor: '#757575',
                    },
                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div className="flex items-center justify-center h-screen ">
                <img src="/auth/login.svg" alt="login" className="h-[80%]" />
                <div className=" w-[650px] rounded-lg   p-14 ">
                    <div className="flex items-center justify-center">
                        <img src="/logo.svg" alt="logo" className="w-24" />
                    </div>
                    <div className="space-y-3 text-center my-10">
                        <h1 className="text-2xl  font-semibold text-center mt-2">Login to Your Account</h1>
                        <p className="text-lg text-[#757575]">Please enter your email and password to continue</p>
                    </div>

                    <Form
                        name="normal_login"
                        className="login-form"
                        layout="vertical"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        form={form}
                    >
                        <Form.Item
                            label={
                                <label htmlFor="email" className="block  mb-1 text-lg">
                                    Email
                                </label>
                            }
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                placeholder="Enter your email address"
                                type="email"
                                className=" h-12  px-6 bg-white"
                            />
                        </Form.Item>

                        <Form.Item
                            label={
                                <label htmlFor="password" className="block  mb-1 text-lg">
                                    Password
                                </label>
                            }
                            name="password"
                            rules={[{ required: true, message: 'Please input your Password!' }]}
                        >
                            <Input.Password placeholder="Enter your password" className=" h-12  px-6 bg-white" />
                        </Form.Item>

                        <div className="flex items-center justify-between mb-4">
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox className=" text-lg">Remember me</Checkbox>
                            </Form.Item>
                            <Link to="/forget-password" className="text-primary text-md hover:text-primary">
                                Forget password
                            </Link>
                        </div>

                        <Form.Item>
                            <Button
                                className="w-full rounded-xl bg-authBg"
                                htmlType="submit"

                                // onClick={() => navigate('/')}
                            >
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default Login;
