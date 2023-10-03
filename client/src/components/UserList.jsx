import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetchUsersQuery } from "../redux/apis/userApi";
import { updateUsers } from "../redux/slices/appSlice";
import UserElement from "./UserElement";

const UserList = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.app);

  const { data: usersResult } = useFetchUsersQuery({ token });

  useEffect(() => {
    dispatch(updateUsers({ data: usersResult?.data }));
  }, [usersResult]);

  return (
    <>
      {users?.length > 0 &&
        users.map((el, index) => {
          return <UserElement key={index} {...el} />;
        })}
    </>
  );
};

export default UserList;
