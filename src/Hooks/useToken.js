import axios from "axios";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { Context } from "../Providers/PamperContext";

const useToken = (user) => {
  const [token, setToken] = useState("");
  const {number} = useContext(Context);
  useEffect(() => {
    const email = user?.email;
    const splittedname = user?.displayName?.split(" ");
    const lastname =
      user?.displayName && splittedname[splittedname?.length - 1];
    let firstname = "";
    splittedname?.forEach((split, i) => {
      if (i < splittedname.length - 1) firstname = firstname + split + " ";
    });

    const userData = {
      ...(user?.providerData[0].providerId === "google.com" && {
        firstName: firstname,
        lastName: lastname,
        image: {url:user?.photoURL},
      }),
      ...((user?.providerData[0].providerId === "password" && number) && {
        phone:number
      }),
      email: user?.email,
      //
    };

    if (email) {
      axios
        .put(
          `https://pamper-me-backend.vercel.app/api/users/${email}`,
          userData
        )
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
