import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../redux/feature/products/productApi";
import Loading from "../../components/Loading/Loading";

const ProductDetails = () => {
  const { productId } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useGetSingleProductQuery(productId);

  if (isLoading) return <Loading />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        <div className="md:ml-6 mt-6 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
          <p className="text-xl text-gray-700 mt-2">${product.price}</p>
          <p className="text-gray-600 mt-2">Category: {product.category}</p>
          <p className="text-gray-600 mt-2">Brand: {product.brand}</p>
          <p className="text-gray-600 mt-2">Stock: {product.stock}</p>
          <p className="text-gray-700 mt-4">{product.details}</p>
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800">Ratings</h2>
            <p className="text-gray-600">Rating: {product?.ratings} / 5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
