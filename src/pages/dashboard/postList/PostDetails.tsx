import ProductDetails from './ProductDetails';
import SellerDetails from './SellerDetails';

export default function PostDetails() {
    return (
        <div className="w-[100%] flex gap-10">
            <div className="w-[35%]">
                <SellerDetails />
            </div>
            <div className="w-[65%]">
                <ProductDetails />
            </div>
        </div>
    );
}
