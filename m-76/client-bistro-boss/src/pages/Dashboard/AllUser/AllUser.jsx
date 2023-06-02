import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const AllUser = () => {
const { refetch, data: users = [] } = useQuery({
  queryKey: ["users"],
  queryFn: async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  },
});

    return <div>user --- {users.length}</div>;
};

export default AllUser;
