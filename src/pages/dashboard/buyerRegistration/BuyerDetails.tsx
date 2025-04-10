const BuyerDetails = () => {
    return (
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-xl font-medium text-textBuyer mb-6">Buyer Details</h2>

            <div className="flex space-x-6">
                {/* Profile Image */}
                <img
                    src="https://i.ibb.co.com/99HDB5yL/029099bcfe41e29e4ff6a381e160a789.jpg"
                    alt="Profile"
                    className="w-24 h-24 rounded-full object-cover"
                />

                {/* Buyer Info */}
                <div className="space-y-4">
                    <div className="">
                        <p className="text-gray-500">Name</p>
                        <p className="text-gray-800">Ajijul Hakim</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">id</p>
                        <p className="text-gray-800">29590</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Email</p>
                        <p className="text-gray-800">mahmud@gmail.com</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Phone number</p>
                        <p className="text-gray-800">084 572 1953</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="">
                        <p className="text-gray-500">NID No.</p>
                        <p className="text-gray-800">1511924651562612</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Date of birth</p>
                        <p className="text-gray-800">17 Dec, 2024</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Gender</p>
                        <p className="text-gray-800">Male</p>
                    </div>
                    <div className="">
                        <p className="text-gray-500">Address</p>
                        <p className="text-gray-800">2007 Station Road, Ladysmith, KwaZulu-Natal - 3373 South Africa</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerDetails;
