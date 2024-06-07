function ProductCard({ product }) {
    const { title, description, thumbnail, price } = product;

    return (
        <div className="card">
            <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 max-w-sm mx-auto ">
                <img
                    src={thumbnail} // Remove curly braces around thumbnail
                    alt="Product Image"
                    width={240}
                    height={240}
                    className="object-cover w-full rounded-lg mb-4"
                />
                <h2 className="font-bold text-lg mb-2">{title}</h2>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">{description}</p>
                <div className="flex justify-between items-center mb-4">
                    <span className="text-xl font-bold">${price}</span>
                    {/* <Button>Add to Cart</Button> */}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
