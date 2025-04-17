import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CiFileOn, CiSettings, CiUser } from 'react-icons/ci';
import logo from '../../../public/logo.svg';
import { GrAnalytics, GrUserAdmin } from 'react-icons/gr';
import { LuFileSliders } from 'react-icons/lu';
import { BsList, BsListNested } from 'react-icons/bs';
import { PiNoteDuotone } from 'react-icons/pi';
import { TbNotes } from 'react-icons/tb';
import { LiaUserFriendsSolid } from 'react-icons/lia';
import { MdKeyboardArrowUp, MdLogout, MdOutlineKeyboardArrowDown, MdTransform } from 'react-icons/md';
import { RiListSettingsLine } from 'react-icons/ri';
import { useState } from 'react';

const menuItems = [
    { label: 'Analytics', path: '/', icon: <GrAnalytics size={22} /> }, // Using React Icon here
    { label: 'Customers', path: '/customers', icon: <CiUser size={22} /> },
    { label: 'Post List', path: '/post-list', icon: <CiFileOn size={22} /> },
    { label: 'Buyer Registrations', path: '/buyer-registration', icon: <LiaUserFriendsSolid size={22} /> },
    { label: 'Sellers Transaction', path: '/seller-transection', icon: <MdTransform size={22} /> },
    { label: 'Package Setting', path: '/package', icon: <RiListSettingsLine size={22} /> },
];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <CiSettings size={24} />,
        path: '',
        children: [
            { label: 'Slider 1', path: '/slider1', icon: <BsListNested size={22} /> },
            { label: 'Promotion', path: '/promotion', icon: <BsList size={22} /> },
            // { label: 'Work Functionality', path: '/work-functionality', icon: <FcWorkflow size={22} /> },
            { label: 'About Us', path: '/about-us', icon: <LuFileSliders size={22} /> },
            { label: 'Privacy & Policy', path: '/privacy-policy', icon: <PiNoteDuotone size={22} /> },
            { label: 'Terms & Condition', path: '/terms-condition', icon: <TbNotes size={22} /> },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState('');
    const [isSettingOpen, setIsSettingOpen] = useState(false);
    const pathname = useLocation();
    const currentPath = pathname.pathname;

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <div className="h-screen" style={{ backgroundColor: 'white', fontFamily: 'Poppins' }}>
            <div className="flex items-center justify-center p-3 cursor-pointer" onClick={() => setActiveMenu('/')}>
                <img src={logo} alt="Logo" className="w-32" />
            </div>

            <div style={{ backgroundColor: 'white', color: '#929292' }} className="mt-10">
                {menuItems.map((item) => {
                    return (
                        <div
                            onClick={() => setActiveMenu(item.path)}
                            key={item.path}
                            className={
                                activeMenu === item.path || currentPath === item.path
                                    ? 'bg-[#188a50] rounded-r-full text-white w-[90%]'
                                    : ''
                            }
                        >
                            <Link className={`flex items-center gap-4  p-6 py-2`} to={item.path}>
                                <span>{item.icon}</span>
                                {item.label}
                            </Link>
                        </div>
                    );
                })}

                <div onClick={() => setIsSettingOpen(!isSettingOpen)} className="cursor-pointer">
                    <div className="flex items-center ml-6 my-2 ">
                        <div className="flex gap-3">
                            <span>
                                <CiSettings size={26} />
                            </span>
                            <span> Setting</span>
                        </div>
                        <div className="ml-28">
                            {isSettingOpen ? <MdKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                        </div>
                    </div>
                </div>

                {/* dublicate */}
                <div className={isSettingOpen ? 'block' : 'hidden'}>
                    {settings.map((setting) => (
                        <div key={setting.path}>
                            {setting.children.map((child) => (
                                <div
                                    key={`${setting.path}-${child.path}`}
                                    onClick={() => setActiveMenu(child.path)}
                                    className={
                                        activeMenu === child.path || currentPath === child.path
                                            ? 'bg-[#188a50] rounded-r-full text-white w-[90%]'
                                            : ''
                                    }
                                >
                                    <Link to={child.path} className="flex items-center gap-4 p-6 py-2">
                                        <span>{child.icon}</span>
                                        {child.label}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div
                    onClick={() => setActiveMenu('/manage-admin')}
                    className={
                        activeMenu === '/manage-admin' || currentPath === '/manage-admin'
                            ? 'bg-[#188a50] rounded-r-full text-white w-[90%]'
                            : ''
                    }
                >
                    <Link to={'/manage-admin'} className={`flex items-center gap-4  p-6 py-2`}>
                        <span>
                            <GrUserAdmin className="font-bold" size={23} />
                        </span>
                        <span>Manage Admin</span>
                    </Link>
                </div>

                <div
                    className=" flex items-center mt-20 gap-3 text-[#929292]  text-[18px]  py-2 rounded-xl cursor-pointer ml-6"
                    onClick={handleLogout}
                >
                    <span>
                        <MdLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
