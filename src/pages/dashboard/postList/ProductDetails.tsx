import PostImageSection from './PostImageSection';

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
    { label: 'Security', value: 'abs, alarm, esp' },
    { label: 'Parking Aid', value: 'Camera' },
    { label: 'Further Equipment', value: 'N/A' },
    { label: 'Drive Type', value: 'Allrad' },
    { label: 'Gearbox', value: 'Automatic' },
    { label: 'Performance', value: '32 Ps - 75 Ps' },
    { label: 'Cylinder Capacity', value: '1,000cm² - 1,000cm²' },
    { label: 'Tank Size', value: '80L - 120L' },
    { label: 'Weight', value: '5000kg - 5000kg' },
    { label: 'Cylinder', value: 'Any' },
    { label: 'Drive Type', value: 'Allrad' },
    { label: 'Other Description', value: 'Nunc sit turpis lorem.' },
];

const ProductDetails = () => {
    return (
        <div className=" mx-auto bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-medium text-[#3A99D9] mb-6">Product Details</h2>

            <div className="grid grid-cols-2 gap-14">
                <div className="space-y-3">
                    {carDetails.map((item: { label: string; value: string }) => (
                        <div className="grid grid-cols-2">
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div>
                    <PostImageSection />
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
