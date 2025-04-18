import PostImageSection from './PostImageSection';

const ProductDetails = ({ data }: any) => {
    const {
        brand,
        model,
        condition,
        registration,
        kilometersTo,
        city,
        address,
        color,
        seats,
        interiorColor,
        interiorMaterial,
        airbags,
        airConditioning,
        security,
        parkingAid,
        driveType,
        cylinderCapacity,
        cylinder,
    } = data;
    const { name } = data.category;
    return (
        <div className=" mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-[#3A99D9] mb-6">Product Details</h2>

            <div className="grid grid-cols-2 gap-14">
                <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Name : </p>
                        <p className="text-gray-700">{brand}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Category : </p>
                        <p className="text-gray-700">{name}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Brand : </p>
                        <p className="text-gray-700">{model}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Car Condition : </p>
                        <p className="text-gray-700">{condition}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Registration Year : </p>
                        <p className="text-gray-700">{registration}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Mileage : </p>
                        <p className="text-gray-700">{kilometersTo} km</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">City : </p>
                        <p className="text-gray-700">{city} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Address : </p>
                        <p className="text-gray-700">{address} </p>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Color : </p>
                        <p className="text-gray-700">{color} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Number of Seats : </p>
                        <p className="text-gray-700">{seats} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Interior Color : </p>
                        <p className="text-gray-700">{interiorColor} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Interior Material : </p>
                        <p className="text-gray-700">{interiorMaterial} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Airbags : </p>
                        <p className="text-gray-700">{airbags} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Air Conditioning : </p>
                        <p className="text-gray-700">{airConditioning} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Security : </p>
                        <p className="text-gray-700">{security} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Parking aid : </p>
                        <p className="text-gray-700">{parkingAid} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Drive Type : </p>
                        <p className="text-gray-700">{driveType} </p>
                    </div>
                    <hr />
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Cylinder Capacity : </p>
                        <p className="text-gray-700">{cylinderCapacity} </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <p className="text-gray-500">Cylinder : </p>
                        <p className="text-gray-700">{cylinder} </p>
                    </div>
                </div>

                <div>
                    <PostImageSection data={data} />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
