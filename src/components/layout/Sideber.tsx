import { Menu } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../public/logo.svg';
import { CiFileOn, CiLogout } from 'react-icons/ci';

const menuItems = [
    { label: 'Analytics', path: '/', icon: <img src="/analytics.svg" alt="analytics" /> },
    { label: 'Customers', path: '/customers', icon: <img src="/customer.svg" alt="customer" /> },
    { label: 'Post List', path: '/post-list', icon: <CiFileOn size={22} /> },
    { label: 'Buyer Registrations', path: '/byer', icon: <img src="/buy.svg" alt="buy" /> },
    { label: 'Sellers Transection', path: '/sellers', icon: <img src="/transection.svg" alt="Transections" /> },
    {
        label: 'Package Setting ',
        path: '/package',
        icon: <img src="/Package.svg" alt="Package" />,
    },
];

const settings = [
    {
        label: <span className="text-[18px]">Setting</span>,
        icon: <img src="/setting.svg" alt="setting" />,
        path: '',
        children: [
            { label: 'Slider 1', path: '/slider1', icon: <img src="/slider1.svg" alt="slider1" /> },
            { label: 'Slider 2', path: '/slider2', icon: <img src="/slider2.svg" alt="slider2" /> },
            {
                label: 'Work Functionality',
                path: '/work-functionality',
                icon: <img src="/work.svg" alt="work" />,
            },
            { label: 'About Us', path: '/about', icon: <img src="/about.svg" alt="about" /> },

            {
                label: 'Privacy & Policy',
                path: '/privacy-policy',
                icon: <img src="/policy.svg" alt="policy" />,
            },
            {
                label: 'Terms & Condition',
                path: '/terms-condition',
                icon: <img src="/terms.svg" alt="terms-condition" />,
            },
        ],
    },
];

const Sidebar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <div className="h-screen" style={{ backgroundColor: 'white', color: 'black' }}>
            <div className="flex items-center justify-center p-3">
                <img src={logo} alt="Logo" className="w-32" />
            </div>

            <Menu mode="inline" style={{ backgroundColor: 'white', color: 'black' }} className="mt-10">
                {menuItems.map((item) => (
                    <Menu.Item key={item.path} icon={item.icon} className="">
                        <Link className="" to={item.path}>
                            {item.label}
                        </Link>
                    </Menu.Item>
                ))}

                {settings.map((setting) => (
                    <Menu.SubMenu key={setting.path} icon={setting.icon} title={setting.label}>
                        {setting.children.map((child) => (
                            <Menu.Item key={child.path} icon={child.icon}>
                                <div className=" ">
                                    <Link to={child.path}>{child.label}</Link>
                                </div>
                            </Menu.Item>
                        ))}
                    </Menu.SubMenu>
                ))}
                <div
                    className="text-black flex justify-center items-center gap-3 mt-10 text-[18px]  py-2 rounded-xl cursor-pointer"
                    onClick={handleLogout}
                >
                    <span>
                        <CiLogout className="font-bold" size={23} />
                    </span>
                    <span>Logout</span>
                </div>
            </Menu>
        </div>
    );
};

export default Sidebar;
