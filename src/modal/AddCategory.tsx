import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Form, Input, Modal } from 'antd';
import '../pages/dashboard/category/Category.css';

// @ts-ignore
const AddCategory = ({ isOpen, onClose, editCategory, setEditCategory }) => {
    const [form] = Form.useForm();
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    useEffect(() => {
        if (editCategory) {
            form.setFieldsValue({
                name: editCategory.name,
                image: editCategory.image,
            });
            setPreviewUrl(editCategory.image);
        }
    }, [editCategory, form]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setPreviewUrl(URL.createObjectURL(file));
        }
        form.setFieldsValue({ image: file });
    };

    const handleSubmit = async (valuse: { name: string; image: string }) => {
        console.log(valuse);
        onClose();
        setEditCategory(null);

        try {
            if (editCategory) {
                toast.success('Category updated successfully!');
            } else {
                toast.success('Category added successfully!');
            }

            // Clear edit state after submission
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        }
    };

    return (
        <Modal open={isOpen} onCancel={onClose} footer={null} className="custom-modal">
            <div className="">
                <h2 className="text-xl font-semibold mb-4 text-white">
                    {editCategory ? 'Edit Category' : 'Add New Category'}
                </h2>
                <Form form={form} layout="vertical" onFinish={handleSubmit} className="space-y-4">
                    <Form.Item label="Name" name="name">
                        <Input
                            type="text"
                            placeholder="Enter your title"
                            className="custom-input custom-input bg-[#808080] text-white p-2 !rounded-md placeholder:text-gray-300"
                            maxLength={30}
                        />
                    </Form.Item>

                    <Form.Item label="Image" name="image">
                        <div>
                            <Input
                                type="file"
                                id="file"
                                name="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                style={{ display: 'none' }}
                            />

                            <div
                                className="w-[470px] h-[180px] flex justify-center items-center cursor-pointer border border-gray-300"
                                onClick={() => document.getElementById('file')?.click()}
                            >
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Uploaded" className="w-full h-full object-cover" />
                                ) : (
                                    <span className="text-gray-200">Upload</span>
                                )}
                            </div>
                        </div>
                    </Form.Item>

                    <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-3 rounded-lg mt-4">
                        Submit
                    </button>
                </Form>
            </div>
        </Modal>
    );
};

export default AddCategory;
