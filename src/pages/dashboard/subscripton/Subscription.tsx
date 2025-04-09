// import { useState } from 'react';
import { useState } from 'react';
import Button from '../../../components/shared/Button';
// import SubscriptionModal from '../../../modal/SubscriptionModal';
import Card from './Card';
import SubscriptionModal from '../../../modal/SubscriptionModal';
import PageTitle from '../../../components/shared/PageTitle';

const pricingData = [
    {
        id: 1,
        title: 'Tier 1: Personal Driver & Concierge Service',
        price: '$2,999',
        inclusions: [
            '20 hours of service per month',
            'Same-day booking availability',
            'Dedicated concierge for personalized ',
            'Access to a premium vehicle',
        ],
        benefits: [
            '24/7 availability for scheduling',
            'Customized services tailored to your needs',
            'Exclusive partnerships with luxury brands',
        ],
    },
    {
        id: 2,
        title: 'Tier 2: Premium Personal Driver & Concierge Service',
        price: '$4,499',
        inclusions: [
            '40 hours of service per month',
            'Priority booking availability',
            'Personalized concierge for VIP services',
            'Access to a high-end luxury vehicle',
        ],
        benefits: [
            'Priority 24/7 availability for scheduling',
            'Fully customized services',
            'Exclusive access to partner luxury experiences',
        ],
    },
];

export default function Subscription() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <>
            <div className="flex items-center justify-between my-6">
                <PageTitle>Subscription</PageTitle>
                <div className="flex justify-end" onClick={() => setIsModalOpen(true)}>
                    <Button className="">+ Add Subscription</Button>
                </div>
            </div>

            <div className="grid grid-cols-4 ">
                {pricingData.map((card) => (
                    <Card data={card} key={card.id} />
                ))}
            </div>

            <SubscriptionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}
