const buyerInfo = [
    { label: 'Name', value: 'Ajijul Hakim' },
    { label: 'id', value: '29590' },
    { label: 'Email', value: 'mahmud@gmail.com' },
    { label: 'Phone number', value: '084 572 1953' },
    { label: 'NID No.', value: '1511924651562612' },
    { label: 'Date of birth', value: '17 Dec, 2024' },
    { label: 'Gender', value: 'Male' },
    { label: 'Address', value: '2007 Station Road, Ladysmith, KwaZulu-Natal - 3373 South Africa' },
];

const BuyerDetails = () => {
    return (
        <div className=" bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-medium text-textBuyer mb-6">Buyer Details</h2>

            <div className="flex space-x-16">
                {/* Profile Image */}
                <img
                    src="https://i.ibb.co/99HDB5yL/029099bcfe41e29e4ff6a381e160a789.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                />

                {/* Buyer Info */}
                <div className="space-y-4">
                    {buyerInfo.slice(0, 4).map((item, index) => (
                        <div key={index}>
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-4 ml-40">
                    {buyerInfo.slice(4).map((item, index) => (
                        <div key={index}>
                            <p className="text-gray-500">{item.label}</p>
                            <p className="text-gray-800">{item.value}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyerDetails;
