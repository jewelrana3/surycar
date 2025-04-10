import ProductDetails from '../buyerRegistration/PrudcutDetails';
import BuyerDetails from './BuyerDetails';

const registrationDetails = [
    { label: 'Contact No', value: '+963 932 509 736' },
    { label: 'Email', value: 'asadujjaman101@gmail.com' },
    { label: 'Address', value: 'P. O. Box 50332, Damasc...' },
    {
        label: 'Message',
        value: (
            <>
                Dear Sir or Madam,
                <br />
                I am interested in your offer. Please contact me.
                <br />
                Sincerely,
                <br />
                Md. Asadujjaman
            </>
        ),
    },
    { label: 'Register Date', value: '2/11/12' },
    { label: 'Vehicles Price', value: 'SYP 65,000' },
    { label: 'Content Price', value: 'SYP 65,000' },
    { label: 'Boosting Price', value: 'SYP 65,000' },
];

export default function AllDetailsSeller() {
    return (
        <div>
            <BuyerDetails />
            <div className="mt-4 grid grid-cols-8 gap-7">
                {/* Registration Details Section */}
                <div className="bg-white p-6 rounded-lg shadow-2xl col-span-3">
                    <h2 className="text-xl font-medium text-[#3A99D9] mb-6">Transection Details</h2>

                    <div className="space-y-3">
                        {registrationDetails.map((item, index) => (
                            <div key={index} className="grid grid-cols-2">
                                <p className="text-gray-500">{item.label}</p>
                                <p
                                    className={
                                        item.label === 'Message' || item.label === 'Register Date'
                                            ? 'text-gray-800'
                                            : 'text-[#188A50]'
                                    }
                                >
                                    {item.value}
                                </p>
                            </div>
                        ))}
                        <hr />
                        <p className="flex gap-[218px]">
                            <span className="text-gray-500">Total </span>
                            <span className="text-[#188A50]">SYP 65,000</span>
                        </p>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="col-span-5">
                    <ProductDetails />
                </div>
            </div>
        </div>
    );
}
