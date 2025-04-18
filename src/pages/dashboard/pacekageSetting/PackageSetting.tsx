import { useGetPackageQuery } from '../../../redux/packageSetting/packageSetting';
import BoostingPakage from './BoostingPakage';
import ContentPakage from './ContentPakage';
import VehiclesComponent from './VehiclesComponent';

export default function PackageSetting() {
    const { data, isError, isLoading, refetch } = useGetPackageQuery(undefined);
    const category = data?.data;

    if (isLoading) {
        return <span className="">Loading...</span>;
    }

    if (isError) {
        return <span className="">data not found...</span>;
    }
    return (
        <div className="bg-[#F9F9F9] rounded-2xl p-3">
            <VehiclesComponent data={category} />
            <ContentPakage data={category} />
            <BoostingPakage data={category} />
        </div>
    );
}
