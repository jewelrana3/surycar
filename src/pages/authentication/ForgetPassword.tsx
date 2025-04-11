import { ConfigProvider, Form, Input } from 'antd';
import { useNavigate } from 'react-router';
import forgots from '../../../public/auth/forgot.svg';
import Button from '../../components/shared/Button';

const ForgetPassword = () => {
    const navigate = useNavigate();
    const onFinish = async (values: any) => {
        console.log(values);
        navigate('/verify-otp');
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        borderRadius: 10,
                        // colorBorder: '',
                        colorPrimaryBorder: 'transparent',
                        hoverBorderColor: '',
                        controlOutline: 'none',
                        activeBorderColor: '',
                    },
                    Button: {
                        colorPrimaryHover: 'rgb(0,0,0)',
                    },
                },
            }}
        >
            <div
                className="
            flex items-center justify-center h-screen"
            >
                <div className="flex items-center justify-center px-6">
                    <div className="w-[500px]">
                        <div className="flex items-center justify-center">
                            <img src="/logo.svg" alt="logo" className="w-24" />
                        </div>
                        <div className=" space-y-3 text-center my-7">
                            <h1 className="text-3xl  font-medium mt-2">Forget Password</h1>
                            <p className="">Please enter your email for verification</p>
                        </div>

                        <Form
                            name="normal_ForgetPassword"
                            className="ForgetPassword-form"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="email"
                                label="Email"
                                rules={[{ required: true, message: 'Please input your email!' }]}
                            >
                                <Input placeholder="Enter your email address" type="email" className="h-12 bg-white" />
                            </Form.Item>

                            <Form.Item>
                                <Button htmlType="submit" className="w-full bg-authBg text-[#000000] rounded-md">
                                    Send OTP
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>

                <div className=" px-5">
                    <img src={forgots} width={460} height={460} alt="forgot" />
                </div>
            </div>
        </ConfigProvider>
    );
};

export default ForgetPassword;
