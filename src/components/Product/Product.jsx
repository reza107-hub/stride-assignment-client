import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return (
          <>
            {text.substring(0, maxLength)}...
            <Link
              to={`/product-details/${product._id}`}
              className="text-blue-500"
            >
              See More
            </Link>
          </>
        );
      }
      return text;
    };
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product && product.image}
          alt={product && product.name}
          className="h-64 object-cover w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {product && product.name}
          <div className="badge badge-secondary bg-gradient">
            <span>$</span> {product && product.price}
          </div>
        </h2>
        <p>{product && truncateText(product.details, 30)}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">{product && product.brand}</div>
          <div className="badge badge-outline">
            <span className="text-info">In Stock</span> &nbsp;
            <span className="text-accent">{product && product.stock}</span>
          </div>
        </div>
        <div className="card-actions justify-between mt-4">
          <button className="btn btn-neutral hover:btn-info btn-sm">
            wishlist
          </button>
          <button className="btn btn-info hover:btn-neutral btn-sm">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
