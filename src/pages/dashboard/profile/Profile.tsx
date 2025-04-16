import { CiSettings } from 'react-icons/ci';
import { LiaEditSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { useGetProfileQuery } from '../../../redux/profile/profile';
import { imgUrl } from '../../../redux/api/baseApi';

const Profile = () => {
    const { data, isLoading, isError } = useGetProfileQuery(undefined);
    console.log(data?.data?.profile);
    const item = data?.data;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading profile.</div>;
    }

    return (
        <div className=" bg-white rounded-lg shadow-md flex space-x-14 p-5">
            <div className="">
                <img
                    className="h-[252px] w-[251px]  object-cover rounded-xl"
                    src={item?.profile?.startsWith('http') ? item?.profile : `${imgUrl}${item?.profile}`}
                    // src={item?.profile}
                    alt="Profile"
                />
                <div className="text-center mt-3">
                    <div className="text- text-[#5C5C5C]">{item?.firstName}</div>
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
