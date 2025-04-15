import { ConfigProvider, Form, Input } from 'antd';

import { useNavigate } from 'react-router-dom';
import otp from '../../../public/auth/otp.svg';
import Button from '../../components/shared/Button';
import { useResendOtpMutation, useVerifyEmailMutation } from '../../redux/apiSlice/authSlice';
import Swal from 'sweetalert2';

// import Swal from 'sweetalert2';

const VerifyOtp = () => {
    const [verifyEmail] = useVerifyEmailMutation();
    const [resendOtp] = useResendOtpMutation();
    const userMail = localStorage.getItem('email');
    const email = userMail ? JSON.parse(userMail) : '';
    console.log(email);
    const navigate = useNavigate();

    const handleResendEmail = async () => {
        const value = {
            email: email?.email,
        };
        await resendOtp(value).then((res) => {
            if (res?.data?.success) {
                Swal.fire({
                    text: res?.data?.message,
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    title: 'Oops',
                    //@ts-ignore
                    text: res?.error?.data?.message,
                    icon: 'error',
                    timer: 1500,
                    showConfirmButton: false,
                });
            }
        });
    };

    const onFinish = async (values: { otp: number | null }) => {
        const data = {
            email: email?.email,
            oneTimeCode: Number(values?.otp),
        };

        try {
            await verifyEmail(data).then((res) => {
                if (res?.data?.success) {
                    Swal.fire({
                        text: res?.data?.message,
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        console.log(res);

                        localStorage.setItem('resetToken', res?.data?.data);
                        navigate('/new-password');
                    });
                } else {
                    Swal.fire({
                        title: 'Oops',
                        //@ts-ignore
                        text: res?.error?.data?.message,
                        icon: 'error',
                        timer: 1500,
                        showConfirmButton: false,
                    });
                }
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                timer: 1500,
                showConfirmButton: false,
            });
        }
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
                    <div className=" w-[500px]">
                        <div className="flex items-center justify-center ">
                            <img src="/logo.svg" alt="logo" className="w-24" />
                        </div>
                        <div className=" space-y-3 text-center my-10">
                            <h1 className="text-3xl  font-medium  mt-2">Verify OTP</h1>
                            <p className="text-[#757575]">
                                We sent a reset link to contact@dscode...com <br /> enter 5 digit code that is mentioned
                                in the email
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

                            <Form.Item>
                                <Button className="bg-bgYellow w-full rounded-md text-[#181818]" htmlType="submit">
                                    Verify
                                </Button>
                            </Form.Item>

                            <div className="text-lg flex items-center justify-between gap-2 mb-8">
                                <p style={{ fontFamily: 'Poppins' }} className="">
                                    Didn't receive the code?
                                </p>
                                <p
                                    className="text-[#79CAA1] font-semibold underline cursor-pointer"
                                    onClick={handleResendEmail}
                                >
                                    Resend
                                </p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </ConfigProvider>
    );
};

export default VerifyOtp;
