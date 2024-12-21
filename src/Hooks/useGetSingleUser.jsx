import { useGetSingleUserQuery } from "../redux/feature/user/userApi";
import useAuth from "./useAuth";

const useGetSingleUser = () => {
  const { user, loading } = useAuth();
  const { data: singleUserData, isLoading: isSingleUserDataLoading } =
    useGetSingleUserQuery(user?.email, {
      skip: loading,
    });
  return [singleUserData, isSingleUserDataLoading];
};

export default useGetSingleUser;
