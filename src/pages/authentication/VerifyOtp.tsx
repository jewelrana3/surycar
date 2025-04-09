import { ConfigProvider, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom';
import otp from '../../../public/auth/otp.svg';
import Button from '../../components/shared/Button';

// import Swal from 'sweetalert2';

const VerifyOtp = () => {
    const navigate = useNavigate();

    // const handleResendCode = async () => {
    // };

    const onFinish = async (values: { otp: number | null }) => {
        console.log(values);
        navigate('/new-password');
    };

    return (
        <ConfigProvider
            theme={{
                components: {
                    Input: {
                        // lineHeight: 3,
                        controlHeight: 50,

                        borderRadius: 10,
                    },
                },
                token: {
                    colorPrimary: '#FBB040',
                },
            }}
        >
            <div
                className="
            flex items-center justify-center h-screen"
            >
                <div className="px-5">
                    <img src={otp} width={460} height={460} alt="forgot" />
                </div>
                <span className="border-r-2 border-white h-[600px]"></span>
                <div className="flex  items-center justify-center pl-8">
                    <div className=" w-[500px] ">
                        <div className=" space-y-3 ">
                            <h1 className="text-3xl  font-semibold  mt-2">Verify OTP</h1>
                            <p className="text-[#757575]">
                                Please check your email. We have sent a code to contact @gmail.com
                            </p>
                        </div>

                        <Form
                            name="normal_VerifyOtp"
                            className="my-5"
                            layout="vertical"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                className="flex items-center justify-center mx-auto "
                                name="otp"
                                rules={[{ required: true, message: 'Please input otp code here!' }]}
                            >
                                <Input.OTP
                                    style={{
                                        width: 300,
                                    }}
                                    className=""
                                    // variant="filled"
                                    length={6}
                                />
                            </Form.Item>
                            <div className="text-lg flex items-center justify-between gap-2 mb-8">
                                <p className="">Didn't receive the code?</p>
                                <p
                                    className="text-[#79CAA1] font-semibold underline cursor-pointer"
                                    // onClick={handleResendCode}
                                >
                                    Resend
                                </p>
                            </div>

                            <Form.Item>
                                <Button className="bg-bgYellow w-full rounded-md text-[#181818]" htmlType="submit">
                                    Verify
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default VerifyOtp;
