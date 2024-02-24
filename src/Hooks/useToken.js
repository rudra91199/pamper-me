import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const email = user?.email;
    const splittedname = user?.displayName?.split(" ");
    const lastname = user?.displayName && splittedname[splittedname?.length - 1];
    let firstname = ""
    splittedname?.forEach((split,i) => {
      if(i < splittedname.length-1)
      firstname = firstname  + split + " "
    })
  
  
    console.log(firstname, lastname);
    const userData = {
      firstName: firstname,
      lastName:lastname,
      email: user?.email,
      image:user?.photoURL
    };
    if (email) {
      axios
        .put(`http://localhost:5000/users/${email}`, userData)
        .then((res) => {
          if (res.data) {
            setToken(res.data.accessToken);
            localStorage.setItem("accessToken", res.data.accessToken);
          }
        });
    }
  }, [user]);
  return token;
};

export default useToken;
