import ProductCard from '../productCard/ProductCard';

function ProductsList({ products }) {
    if (!products) {
        return <div>No products available</div>;
    }

    return (
        <div className='flex flex-wrap justify-center gap-10'>
            {products.map((product) => {
                
               return <ProductCard id={product.id} product={product} />
})}
        </div>
    );
}

export default ProductsList;
