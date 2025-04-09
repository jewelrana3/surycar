import { Form, Input, Avatar } from 'antd';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Button from '../../../components/shared/Button';
import { IoIosCamera } from 'react-icons/io';

interface formValues {
    name: string;
    email: string;
    profile: string;
}

export default function EditProfile() {
    const navigate = useNavigate();
    // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const [form] = Form.useForm();
    const onFinish = async (values: formValues) => {
        console.log(values);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('image clcik');
        const file = e.target.files?.[0];
        console.log(file);
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            localStorage.setItem('image', objectUrl);
            // setPreviewUrl(objectUrl);
        }
        form.setFieldsValue({
            profile: file?.name,
        });
    };

    return (
        <div className="">
            <div className="w-[1035px] mx-auto mt-10">
                <div
                    className="flex items-center gap-4 font-semibold text-[20px] text-white"
                    onClick={() => navigate(-1)}
                >
                    <button className="text-xl">
                        <MdOutlineArrowBackIosNew />
                    </button>
                    <button>Edit Profile</button>
                </div>
                <div className="flex justify-between space-x-6 mt-12 relative">
                    <div className="flex">
                        <div>
                            <Avatar
                                size={100}
                                src="https://i.ibb.co.com/xJdQCTG/download.jpg"
                                className="border border-white"
                            />
                        </div>
                        <div className="mt-16 ml-20 absolute">
                            {/* <h3 className="font-semibold text-2xl">{data?.data?.name}</h3> */}

                            <input
                                type="file"
                                name="file"
                                id="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />

                            <div className="w-[22px] h-[22px] flex justify-center items-center rounded-full cursor-pointer bg-white">
                                <IoIosCamera size={24} onClick={() => document.getElementById('file')?.click()} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <Form form={form} onFinish={onFinish} layout="vertical">
                        <div>
                            <span className="text-[20px] font-semibold">Name</span>
                            <div className="mt-3">
                                <Form.Item name="name" rules={[{ required: true }]}>
                                    <Input
                                        style={{ border: '1px solid gray' }}
                                        className="h-14  rounded-xl border-none placeholder:text-gray-400 !text-white !bg-black"
                                        placeholder="Enter your name"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div>
                            <span className="text-[20px] font-semibold">Email</span>
                            <div className="mt-3">
                                <Form.Item name="email" rules={[{ required: true }]}>
                                    <Input
                                        style={{ border: '1px solid gray' }}
                                        className="h-14  rounded-xl border-none placeholder:text-gray-400 !text-white !bg-black"
                                        placeholder="Enter your email"
                                    />
                                </Form.Item>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Button
                                htmlType="submit"
                                className="w-[30%] flex justify-center items-center text-2xl mt-14 rounded-md text-black"
                            >
                                Save & Change
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
}
