const images = ['/postlist/1.svg', '/postlist/2.svg', '/postlist/3.svg', '/postlist/4.svg', '/postlist/5.svg'];

const carDetails = [
    { label: 'S.no', value: '#16165' },
    { label: 'Name', value: 'Opel Corsa' },
    { label: 'Category', value: 'Car' },
    { label: 'Brand', value: 'Toyota' },
    { label: 'Car Condition', value: 'Used' },
    { label: 'Registration Year', value: '2021' },
    { label: 'Mileage', value: '1500km' },
    { label: 'Kilometres to', value: 'Used' },
    { label: 'City or Zip Code', value: '2356' },
    { label: 'Address', value: 'P.O. Box 50332, Damasc' },
    { label: 'Colour', value: 'White' },
    { label: 'Number of Seats', value: '5' },
    { label: 'Colour of Interior', value: 'Black' },
    { label: 'Material of Interior', value: 'Wood' },
    { label: 'Airbags', value: 'Yes' },
    { label: 'Air Conditioning', value: 'Yes' },
    { label: 'Interior Extra', value: 'Lighting, Android Auto, Arm Rest' },
];

const ProductDetails = () => {
    return (
        <div className=" bg-white p-6 rounded-lg shadow-2xl">
            <h2 className="text-xl font-medium text-[#3A99D9] mb-6">Product Details</h2>

            <div className="grid grid-cols-2">
                <div className="space-y-2">
                    {carDetails.map((item: { label: string; value: string }) => (
                        <div className="grid grid-cols-2 gap-1">
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <img src="/postlist/car.svg" alt="car" className="w-full" />

                    <div className="flex space-x-4 ">
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`car ${index + 1}`} className="w-[75px] mt-2" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
