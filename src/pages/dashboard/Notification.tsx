const notifications = [
    { title: 'New Clients Update Come from Asadujjaman', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Mr. Nadir', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Asadujjaman', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Mr. Nadir', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Asadujjaman', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Mr. Nadir', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
    { title: 'New order Come from Asadujjaman', time: 'Asad ux ui salon , 76/A Corona, Michigan, Paris ' },
];

const Notification = () => {
    return (
        <div className="space-y-4 mt-6 bg-white rounded-xl p-4">
            <div className="flex justify-between">
                <h1 className="text-xl">Notifications</h1>
                <button className="border border-[#1854F9] text-[#1854F9] rounded-lg p-2 w-[98px]">Read All</button>
            </div>

            {notifications.map((notification, index) => (
                <div key={index} className="bg-[#FDFDFD] py-4 shadow-md p-2">
                    <p className="text-lg font- text-[#767676]">{notification.title}</p>
                    <p className="text-sm text-[#999999]">{notification.time}</p>
                </div>
            ))}
        </div>
    );
};

export default Notification;
