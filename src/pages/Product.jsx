import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Product() {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product data');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return (
            <div className="rounded-lg pt-4 max-w-8 mx-auto h-lvh">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="200" height="200" style={{ shapeRendering: 'auto', display: 'block' }}>
                    <g>
                        <circle strokeLinecap="round" fill="none" strokeDasharray="50.26548245743669 50.26548245743669" stroke="#e15b64" strokeWidth="8" r="32" cy="50" cx="50">
                            <animateTransform values="0 50 50;360 50 50" keyTimes="0;1" repeatCount="indefinite" dur="1.1904761904761905s" type="rotate" attributeName="transform"></animateTransform>
                        </circle>
                        <circle strokeLinecap="round" fill="none" strokeDashoffset="36.12831551628262" strokeDasharray="36.12831551628262 36.12831551628262" stroke="#f8b26a" strokeWidth="8" r="23" cy="50" cx="50">
                            <animateTransform values="0 50 50;-360 50 50" keyTimes="0;1" repeatCount="indefinite" dur="1.1904761904761905s" type="rotate" attributeName="transform"></animateTransform>
                        </circle>
                    </g>
                </svg>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {data && (
                <div className="card lg:card-side bg-base-100 shadow-xl  d-flex gap-5  p-10 site-container mt-32 mb-32 max-w-[80%] m-auto ">
                    <figure>
                        <img className="w-[500px] h-[280px]" src={data.images} alt={data.images} />
                    </figure>
                   <div className="w-full">
                        <h1 className="text-center font-bold text-base mb-10">{data.title}</h1>
                        <p className="font-mono">{data.description}</p>
                        <div className="flex gap-20">
                        <p className=" text-1xl font-mono cursor-pointer"> <span className=" font-mono text-2xl">Brend : </span>{data.brand}</p>
                        <p className=" text-1xl font-mono cursor-pointer"> <span className=" font-mono text-2xl">price : </span>{data.price+'$'}</p>
                       
                        </div>
                        <div className="flex gap-10 items-baseline">
                        <div className="flex items-center gap-8 mt-10">
                            <button className="btn text-2xl">+</button>
                            <span>0</span>
                            <button className="btn  text-2xl">-</button>
                        </div>
                            <button className="btn">Add to Cart</button>
                        </div>
                   </div>
                </div>
            )}
        </>
    );
}

export default Product;
