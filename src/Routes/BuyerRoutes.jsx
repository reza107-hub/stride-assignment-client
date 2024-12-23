import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import useGetSingleUser from "../Hooks/useGetSingleUser";

const BuyerRoutes = ({ children }) => {
  const [singleUserData, isSingleUserDataLoading] = useGetSingleUser();
  if (isSingleUserDataLoading) {
    return <Loading />;
  }
  if (singleUserData.status === "unbanned" && singleUserData.role === "buyer") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoutes;