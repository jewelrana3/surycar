import { useState } from 'react';
import { Input, Form, DatePicker, Select } from 'antd';
import Button from '../../../components/shared/Button';
import { BiUpload } from 'react-icons/bi';

const EditProfile = () => {
    const [form] = Form.useForm();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const onFinish = (values: string) => {
        const formData = new FormData();
        if (previewUrl) {
            formData.append('image', previewUrl);
        }
        console.log(formData);
        console.log(values);
    };

    const onChange = (values: string) => {
        console.log(values);
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            console.log('File selected:', file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    return (
        <div className="form-container bg-white px-10 rounded-lg pt-4">
            <span className="text-[#636363] pb-6">Profile Image</span>
            <div className="border border-[#E0E0E0] w-96 p-4 text-center rounded-lg mt-2">
                <input
                    type="file"
                    name="file"
                    id="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                />
                <div
                    className="flex justify-center items-center rounded-full cursor-pointer"
                    onClick={() => document.getElementById('file')?.click()}
                >
                    {previewUrl ? (
                        <img src={previewUrl} alt="pic" />
                    ) : (
                        <div className="">
                            <span className="">
                                <BiUpload size={24} className="ml-10" />
                            </span>
                            <span className="text-[#636363]">Upload Image</span>
                        </div>
                    )}
                </div>
            </div>
            <Form form={form} onFinish={onFinish} layout="vertical" className="text-[#606060] font-medium mt-5">
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <span>name</span>
                        <Form.Item name="name" rules={[{ required: true, message: 'Please enter name' }]}>
                            <Input placeholder="Enter name" className="rounded-md h-10" />
                        </Form.Item>
                    </div>
                    <div>
                        <span>Date of Birth</span>
                        <Form.Item name="Date of Birth" rules={[{ required: true, message: 'Please date of birth' }]}>
                            <DatePicker className="w-full h-10 cursor-pointer" />
                        </Form.Item>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <span>Contact Number</span>
                        <Form.Item name="contact" rules={[{ required: true, message: 'Please enter contact number' }]}>
                            <Input placeholder="Enter contact number" className="rounded-md h-10" />
                        </Form.Item>
                    </div>

                    <div>
                        <span>Gender</span>
                        <Form.Item name="gender" rules={[{ required: true, message: 'Please enter admin type' }]}>
                            <Select onChange={onChange} className="h-10">
                                <Select.Option value="male">Male</Select.Option>
                                <Select.Option value="male">Famale</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <div>
                        <span>Id No</span>
                        <Form.Item name="id" rules={[{ required: true, message: 'Please enter contact number' }]}>
                            <Input placeholder="Enter contact number" className="rounded-md h-10" />
                        </Form.Item>
                    </div>

                    <div>
                        <span>Adress</span>
                        <Form.Item name="address" rules={[{ required: true, message: 'Please enter address' }]}>
                            <Input placeholder="Enter address" className="rounded-md h-10" />
                        </Form.Item>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <Form.Item className="mt-5">
                        <Button
                            style={{ fontFamily: 'Poppins' }}
                            //@ts-ignore
                            type="primary"
                            htmlType="submit"
                            className="bg-[#6DBD44] rounded-xl h-[44px]"
                        >
                            Save & Change
                        </Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    );
};

export default EditProfile;
