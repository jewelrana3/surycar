import { CiSettings } from 'react-icons/ci';
import { LiaEditSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const profileData = [
    { label: 'Name :', value: 'Admin Humphrey' },
    { label: 'Position :', value: 'Admin' },
    { label: 'Id. no. :', value: 'MM4178MRV2' },
    { label: 'Email :', value: 'Asadujjaman101@bd.com' },
    { label: 'Contact Number :', value: '073 155 4568' },
    { label: 'Date of Birth :', value: '12 Nov, 2024' },
    { label: 'Gender :', value: 'Male' },
    { label: 'Address :', value: '284 Daffodil Dr, Mount Frere, Eastern Cape - 5088 South Africa' },
];

const Profile = () => {
    return (
        <div className=" bg-white rounded-lg shadow-md flex space-x-14 p-5">
            <div className="">
                <img
                    className="h-[252px] w-[251px]  object-cover rounded-xl"
                    src="https://i.ibb.co.com/2YWbmYtm/df96ee07b3ad8cfad69be782cb4a27ca.jpg"
                    alt="Profile"
                />
                <div className="text-center mt-3">
                    <h1>Admin Humphrey</h1>
                    <p className="text-[#006EEE]">Admin</p>
                </div>
            </div>
            <div className="space-y-4 flex-1">
                {profileData.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                        <span className=" text-[#A1A1A1]">{item.label}</span>
                        <div className="text-sm text-[#5C5C5C]">{item.value}</div>
                    </div>
                ))}
            </div>
            <div className="text-gray-500  cursor-pointer space-x-3">
                <Link to="/change-password">
                    <button>
                        <CiSettings size={26} />
                    </button>
                </Link>
                <Link to="/edit-profile">
                    <button>
                        <LiaEditSolid size={26} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Profile;
