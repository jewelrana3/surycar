export default function SellerDetails() {
    return (
        <div className="bg-[#F9F9F9] px-6 rounded-lg shadow-lg pt-5 pb-10">
            <h1 className="pt-2 pb-4 font-medium text-xl text-[#3A99D9]">Seller Details</h1>
            <div className=" ">
                <div className="">
                    <div className="flex items-center gap-4">
                        <div>
                            <img
                                src="https://i.ibb.co.com/xJdQCTG/download.jpg"
                                alt="Profile"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-xl font-medium text-gray-800">Asad Ujjaman</h2>
                            <p className="text-gray-600 text-sm">Asadujjaman@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 mt-10">
                    <div>
                        <p className="text-gray-600 text-sm">Name</p>
                        <p className="text-gray-800">Asad ujjaman</p>
                    </div>
                    <div>
                        <p className="text-gray-600 text-sm">id</p>
                        <p className="text-gray-800">23456</p>
                    </div>

                    <div>
                        <p className="text-gray-600 text-sm">Email</p>
                        <p className="text-gray-800">mahmud@gmail.com</p>
                    </div>

                    <div>
                        <p className="text-gray-600 text-sm">Phone number</p>
                        <p className="text-gray-800">084 572 1953</p>
                    </div>
                </div>
                <div className="space-y-4 mt-5">
                    <div>
                        <p className="text-gray-600 text-sm">NID No.</p>
                        <p className="text-gray-800">1511924651562612</p>
                    </div>

                    <div>
                        <p className="text-gray-600 text-sm">Date of birth</p>
                        <p className="text-gray-800">17 Dec, 2024</p>
                    </div>

                    <div>
                        <p className="text-gray-600 text-sm">Gender</p>
                        <p className="text-gray-800">Male</p>
                    </div>

                    <div>
                        <p className="text-gray-600 text-sm">Address</p>
                        <p className="text-gray-800">
                            2007 Station Road, Ladysmith, KwaZulu-Natal <br /> - 3373 South Africa
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
