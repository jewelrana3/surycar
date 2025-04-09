import { IoMdNotificationsOutline } from 'react-icons/io';

const notifications = [
    {
        id: 1,
        title: 'A seller Submit Business for sell',
        date: '3/13/2025, 12:49:36 PM',
    },
    {
        id: 2,
        title: 'A seller Submit Business for sell',
        date: '3/21/2025, 2:58:18 PM',
    },
    {
        id: 3,
        title: 'A seller Submit Business for sell',
        date: '3/21/2025, 4:25:49 PM',
    },
    {
        id: 4,
        title: 'A seller Submit Business for sell',
        date: '3/21/2025, 4:25:54 PM',
    },
    {
        id: 5,
        title: 'A seller Submit Business for sell',
        date: '3/21/2025, 4:40:32 PM',
    },
    {
        id: 6,
        title: 'A seller Submit Business for sell',
        date: '3/21/2025, 4:58:27 PM',
    },
    {
        id: 7,
        title: 'A seller Submit Business for sell',
        date: '3/22/2025, 10:24:30 AM',
    },
    {
        id: 8,
        title: 'Someone made a payment for icon purchase',
        date: '3/23/2025, 5:17:40 PM',
    },
];

const Notification = () => {
    return (
        <div className="space-y-4 mt-6">
            <span className="text-white text-xl">Notification</span>
            {notifications.map((notification: { title: string; id: number; date: string }) => (
                <div key={notification.id} className="flex items-center p-2 text-textGray">
                    <div className="bg-[#FFAB3E66] p-2 rounded-xl">
                        <IoMdNotificationsOutline className="text-[#FFAB3E]" size={24} />
                    </div>
                    <div className="ml-4 flex-1">
                        <p className="font-medium text-textGray">{notification.title}</p>
                        <p className="text-gray-500 text-sm">{notification.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Notification;
