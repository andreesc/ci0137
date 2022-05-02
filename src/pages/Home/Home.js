import { ProductCard } from "../../components/ProductCard"
import { products } from "../../data/products"

export const Home = () => {

    return (
        <div className="w-full flex items-center gap-4">
            {
                products?.map(product => (
                    <ProductCard key={product?.id} {...product} />
                ))
            }
        </div>
    )
}