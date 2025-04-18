import { imgUrl } from '../../../redux/api/baseApi';

const total = { label: 'Total', value: 'SYP 130,000' };

interface PostImageSectionProps {
    data: {
        contact: string;
        email: string;
        address: string;
        status: string;
        image: string[];
    };
}

export default function PostImageSection({ data }: PostImageSectionProps) {
    const { contact, email, address, status, image } = data;
    return (
        <>
            <div>
                <img
                    src={image[0]?.startsWith('http') ? image[0] : `${imgUrl}${image[0]}`}
                    alt="car"
                    className="w-[90%] h-full"
                />
                <div className="grid grid-cols-6 space-x-4 mt-3">
                    {image.map((img, index) => (
                        <img
                            key={index}
                            src={img?.startsWith('http') ? img : `${imgUrl}${img}`}
                            alt={`car ${index + 1}`}
                            className="w-[70px] h-14"
                        />
                    ))}
                </div>
            </div>
            <hr className="my-5" />
            <div className="space-y-2">
                {/* Contact Information */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2">
                        <p className="text-gray-500">Email : </p>
                        <p className="text-[#188A50]">{email}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-gray-500">Contact : </p>
                        <p className="text-[#188A50]">{contact}</p>
                    </div>
                    <div className="grid grid-cols-2">
                        <p className="text-gray-500">Address : </p>
                        <p className="text-[#188A50]">{address}</p>
                    </div>
                </div>

                <hr />

                {/* Total */}
                <div className="grid grid-cols-2">
                    <p className="text-gray-500">{total.label}</p>
                    <p className="text-[#188A50]">{total.value}</p>
                </div>

                {/* Status */}
                <div className="grid grid-cols-3 pt-5">
                    <div className="col-span-1 grid grid-cols-2 mt-2">
                        <p className="text-gray-500">Status</p>
                        <p className="text-red-500 text-nowrap">{status}</p>
                    </div>
                    <button className="bg-[#188A50] text-white px-4 h-10 rounded-2xl  col-span-2 w-[50%] ml-16">
                        Publish Post
                    </button>
                </div>
            </div>
        </>
    );
}
