import BoostingPakage from './BoostingPakage';
import ContentPakage from './ContentPakage';
import VehiclesComponent from './VehiclesComponent';

export default function PackageSetting() {
    return (
        <div className="bg-[#F9F9F9] rounded-2xl p-3">
            <VehiclesComponent />
            <ContentPakage />
            <BoostingPakage />
        </div>
    );
}
