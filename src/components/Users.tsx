import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootReducerType } from '../modules';
import { getUsersStart } from '../modules/users';

const Users = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootReducerType) => state.users);
  console.log(state);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const { loading, data } = state;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default Users;
