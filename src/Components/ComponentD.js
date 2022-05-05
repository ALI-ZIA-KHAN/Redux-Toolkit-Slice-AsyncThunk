import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../Slice/AppThunk";


function ComponentD() {
  const dispatch = useDispatch();
  const  {users}  = useSelector((state) => state.counter);


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div style={{textAlign:"center",margin:"0px auto",marginTop:"30px"}}>
      <h1><em>Component D</em></h1>
      {users && users.map((user, i) => <h1 key={i}>{user.name}</h1>)}
    </div>
  );
}

export default ComponentD;