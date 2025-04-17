import { useEffect, useState } from 'react';
import { Input, Form } from 'antd';
import Button from '../../../components/shared/Button';
import { BiUpload } from 'react-icons/bi';
import { useGetProfileQuery, useUpdateProfileMutation } from '../../../redux/profile/profile';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { imgUrl } from '../../../redux/api/baseApi';
import { IoMdClose } from 'react-icons/io';

interface ProfileData {
    firstName: string;
    lastName: string;
    address: string;
    profile: string | null;
}

const EditProfile = () => {
    const { data, refetch } = useGetProfileQuery(undefined);
    const [updateProfile] = useUpdateProfileMutation();

    const [form] = Form.useForm();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const navigate = useNavigate();

    console.log(data?.data?.profile);

    useEffect(() => {
        if (data?.data) {
            form.setFieldsValue({
                firstName: data?.data?.firstName,
                lastName: data?.data?.lastName,
                address: data?.data?.address,
            });
            setPreviewUrl(
                data?.data?.profile?.startsWith('http') ? data?.data?.profile : `${imgUrl}${data?.data?.profile}`,
            );
        }
    }, [data, form]);

    const onFinish = async (values: ProfileData) => {
        const formData = new FormData();
        formData.append('firstName', values.firstName);
        formData.append('lastName', values.lastName);

        if (profileImage) {
            formData.append('image', profileImage);
        }

        try {
            const res = await updateProfile(formData);
            if (res?.data?.success) {
                toast.success('Profile updated successfully!');
                form.resetFields();
                navigate('/profile');
                refetch();
            }
        } catch {
            toast.error('Profile updated Failed!');
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setProfileImage(file);
            setPreviewUrl(URL.createObjectURL(file)); // Set preview URL for image
        }
    };

    return (
        <div className="form-container bg-white px-10 rounded-lg pt-4">
            <div className="flex justify-end mr-10">
                <button onClick={() => navigate('/profile')}>
                    <IoMdClose size={29} />
                </button>
            </div>
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
                        <img
                            src={previewUrl}
                            // src={previewUrl}
                            alt="pic"
                            className="w-48 h-56"
                        />
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
                        <span>First Name</span>
                        <Form.Item name="firstName" rules={[{ required: true, message: 'Please enter first name' }]}>
                            <Input placeholder="Enter name" className="rounded-md h-10" />
                        </Form.Item>
                    </div>
                    <div>
                        <span>Last Name</span>
                        <Form.Item name="lastName" rules={[{ required: true, message: 'Please enter last name' }]}>
                            <Input placeholder="Enter name" className="rounded-md h-10" />
                        </Form.Item>
                    </div>
                </div>

                {/* <div className="grid grid-cols-2 gap-5">
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
                </div> */}
                <div className="grid grid-cols-2 gap-5">
                    {/* <div>
                        <span>Id No</span>
                        <Form.Item name="id" rules={[{ required: true, message: 'Please enter contact number' }]}>
                            <Input placeholder="Enter contact number" className="rounded-md h-10" />
                        </Form.Item>
                    </div> */}

                    {/* <div>
                        <span>Adress</span>
                        <Form.Item name="address" rules={[{ required: true, message: 'Please enter address' }]}>
                            <Input placeholder="Enter address" className="rounded-md h-10" />
                        </Form.Item>
                    </div> */}
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
