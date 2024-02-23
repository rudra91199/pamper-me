import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useToken = (user) => {
  console.log(user?.email);
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email;
    const userData = {
      name: user?.displayName,
      email: user?.email,
    };
    if (email) {
      const getToken = async () => {
        const { data } = await axios.put(`http://localhost:5000/users/${email}`, userData);
        if (data) {
          setToken(data.accessToken);
          localStorage.setItem("accessToken", data.accessToken);
        }
      };
      getToken();
    }
  }, [user]);
  return [token];
};

export default useToken;
