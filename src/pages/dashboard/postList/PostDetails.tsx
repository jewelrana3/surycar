import { useLocation, useParams } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import SellerDetails from './SellerDetails';

export default function PostDetails() {
    const { id } = useParams();
    const location = useLocation();
    const state = location.state;

    console.log(state, 'state');
    console.log(id, 'id');

    return (
        <div className="w-[100%] flex gap-10">
            <div className="w-[35%]">
                <SellerDetails data={state} />
            </div>
            <div className="w-[65%]">
                <ProductDetails data={state} />
            </div>
        </div>
    );
}
