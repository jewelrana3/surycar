import { CiSettings } from 'react-icons/ci';
import { LiaEditSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useGetProfileQuery } from '../../../redux/profile/profile';

// const profileData = [
//     { label: 'First Name :', value: 'Admin Humphrey' },
//     { label: 'First Name :', value: 'Last Name' },
//     { label: 'Position :', value: 'Admin' },
//     { label: 'Id. no. :', value: 'MM4178MRV2' },
//     { label: 'Email :', value: 'Asadujjaman101@bd.com' },
//     // { label: 'Contact Number :', value: '073 155 4568' },
//     // { label: 'Date of Birth :', value: '12 Nov, 2024' },
//     // { label: 'Gender :', value: 'Male' },
//     // { label: 'Address :', value: '284 Daffodil Dr, Mount Frere, Eastern Cape - 5088 South Africa' },
// ];

const Profile = () => {
    const { data } = useGetProfileQuery(undefined);
    console.log(data?.data);
    const item = data?.data;

    return (
        <div className=" bg-white rounded-lg shadow-md flex space-x-14 p-5">
            <div className="">
                <img
                    className="h-[252px] w-[251px]  object-cover rounded-xl"
                    src="https://i.ibb.co.com/2YWbmYtm/df96ee07b3ad8cfad69be782cb4a27ca.jpg"
                    alt="Profile"
                />
                <div className="text-center mt-3">
                    <p className="text-[#006EEE]">Admin</p>
                </div>
            </div>
            <div className="space-y-4 flex-1 ">
                <div className="flex items-center gap-4">
                    <span className="text-[#A1A1A1]">First Name:</span>
                    <div className="text-sm text-[#5C5C5C]">{item?.firstName}</div>
                </div>

                <div className="flex items-center gap-4">
                    <span className=" text-[#A1A1A1]">Last Name :</span>
                    <div className="text-sm text-[#5C5C5C]">{item?.lastName}</div>
                </div>
                <div className="flex items-center gap-4">
                    <span className=" text-[#A1A1A1]">Position :</span>
                    <div className="text-sm text-[#5C5C5C]">{item?.role}</div>
                </div>
                {/* <div className="flex items-center gap-4">
                        <span className=" text-[#A1A1A1]">Id. no :</span>
                        <div className="text-sm text-[#5C5C5C]">{item?.value}</div>
                    </div> */}
                <div className="flex items-center gap-4">
                    <span className=" text-[#A1A1A1]">Email :</span>
                    <div className="text-sm text-[#5C5C5C]">{item?.email}</div>
                </div>
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
