const images = ['/postlist/1.svg', '/postlist/2.svg', '/postlist/3.svg', '/postlist/4.svg', '/postlist/5.svg'];
const contactInfo = [
    { label: 'Contact No', value: '+963 932 509 736' },
    { label: 'Email', value: 'asadujjaman101@gmail.com' },
    { label: 'Address', value: 'P. O. Box 50332, Damasc...' },
];

const priceInfo = [
    { label: 'Vehicles Price', value: 'SYP 65,000' },
    { label: 'Content Price', value: 'SYP 65,000' },
];

const total = { label: 'Total', value: 'SYP 130,000' };
const status = { label: 'Status', value: 'Holding' };

export default function PostImageSection() {
    return (
        <>
            <div>
                <img src="/postlist/car.svg" alt="car" className="w-[90%] h-full" />
                <div className="flex space-x-4 mt-3">
                    {images.map((image, index) => (
                        <img key={index} src={image} alt={`car ${index + 1}`} className="w-[70px]" />
                    ))}
                </div>
            </div>
            <hr className="my-5" />
            <div className="space-y-2">
                {/* Contact Information */}
                <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                        <div key={index} className="grid grid-cols-2">
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-[#188A50]">{item.value}</p>
                        </div>
                    ))}
                </div>

                <hr />

                {/* Price Information */}
                <div className="space-y-4 pt-5">
                    {priceInfo.map((item, index) => (
                        <div key={index} className="grid grid-cols-2">
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                        </div>
                    ))}
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
                        <p className="text-gray-500">{status.label}</p>
                        <p className="text-red-500">{status.value}</p>
                    </div>
                    <button className="bg-[#188A50] text-white px-4 h-10 rounded-2xl  col-span-2 w-[50%] ml-16">
                        Publish Post
                    </button>
                </div>
            </div>
        </>
    );
}
