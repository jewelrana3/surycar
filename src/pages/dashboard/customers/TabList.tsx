import { useState } from 'react';

const tabs = [
    { label: 'Post List', value: 'post-list' },
    { label: 'Registration for Buy', value: 'registration' },
    { label: 'Transactions', value: 'transactions' },
];

const TabList = () => {
    const [activeTab, setActiveTab] = useState('post-list'); // Default active tab

    return (
        <div className="flex space-x-6 pt-3 px-3">
            {tabs.map((tab) => (
                <div
                    key={tab.value}
                    onClick={() => setActiveTab(tab.value)}
                    className={`cursor-pointer font-medium text-xl ${
                        activeTab === tab.value ? 'text-[#3A99D9] border-b-2 border-blue-500' : 'text-[#929292]'
                    }`}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default TabList;
