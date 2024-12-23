import { Link } from "react-router-dom";
import useGetSingleUser from "../../Hooks/useGetSingleUser";
import {
  useAddToCartMutation,
  useAddToWishListMutation,
} from "../../redux/feature/user/userApi";
import Swal from "sweetalert2";

const Product = ({ product }) => {
  const [addToWishList] = useAddToWishListMutation();
  const [addToCart] = useAddToCartMutation();
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();
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
  // add to wishlist

  const handleAddToWishList = async (productId) => {
    Swal.fire({
      title: "wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await addToWishList({ productId }).unwrap();
    if (res.modifiedCount === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added on wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "MongoDB Error",
        text: res.message || "Failed to save wishlist in the database.",
      });
    }
  };

  // add to cart
  const handleAddToCart = async (productId) => {
    Swal.fire({
      title: "wait...",
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const res = await addToCart({ productId }).unwrap();
    if (res.modifiedCount === 1) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added on wishlist",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "MongoDB Error",
        text: res.message || "Failed to save wishlist in the database.",
      });
    }
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
          <button
            onClick={() => handleAddToWishList(product._id)}
            disabled={
              (!isSingleUserDataLoading &&
                singleUserData &&
                singleUserData?.role !== "buyer") ||
              singleUserData?.wishlist?.includes(product._id)
            }
            className={`btn btn-neutral hover:btn-info btn-sm ${
              (!isSingleUserDataLoading &&
                singleUserData &&
                singleUserData?.role !== "buyer") ||
              singleUserData?.wishlist?.includes(product._id)
                ? "cursor-not-allowed opacity-40"
                : ""
            }`}
          >
            wishlist
          </button>
          <button
            onClick={() => handleAddToCart(product._id)}
            disabled={
              (!isSingleUserDataLoading &&
                singleUserData &&
                singleUserData?.role !== "buyer") ||
              singleUserData?.cart?.includes(product._id)
            }
            className={`btn btn-neutral hover:btn-info btn-sm ${
              (!isSingleUserDataLoading &&
                singleUserData &&
                singleUserData?.role !== "buyer") ||
              singleUserData?.cart?.includes(product._id)
                ? "cursor-not-allowed opacity-40"
                : ""
            }`}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
