import useFetcher from "../hooks/useFatcher";
import ProductsList from "../components/ProductsList/ProductsList";

function Home() {
  const { data, isPending, error } = useFetcher("https://dummyjson.com/products");

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && <ProductsList products={data.products} />}
      
    </div>
  );
}

export default Home;
