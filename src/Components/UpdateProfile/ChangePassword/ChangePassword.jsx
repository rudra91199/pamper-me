import React, { useContext, useState } from 'react'
import { Context } from '../../../Providers/PamperContext';
import { useAuthState, useSignOut, useUpdatePassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import Swal from 'sweetalert2';

const ChangePassword = () => {
    const { userData, setUserData } = useContext(Context);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({
      currentPassNotMatch: "",
      confirmPassNotMatch: "",
      numberMatched: false,
    });
    const [updatePassword, updating, error] = useUpdatePassword(auth);
    const [signOut, loading] = useSignOut(auth);

    const passWordHandle = (e) => {
        e.preventDefault();
        console.log(e.target.currentPass.value);
        console.log(e.target.newPass.value);
        const currentPass = e.target.currentPass?.value;
        const newPass = e.target.newPass?.value;
        const confirmPass = e.target.confirmPass?.value;
        if (newPass === confirmPass) {
          signInWithEmailAndPassword(auth, user?.email, currentPass)
            .then(async (userCredential) => {
              // Signed in
              console.log("mathced");
              const success = await updatePassword(newPass);
              console.log(success);
              if (success) {
                Swal.fire({
                  title: "Password updated",
                  text: "Please login again",
                  icon: "success",
                  showCancelButton: false,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "OK",
                  allowOutsideClick: false,
                }).then(async (result) => {
                  if (result.isConfirmed) {
                    const signOut2 = await signOut();
                    if (signOut2) {
                      navigate("/login");
                    }
                  }
                });
              }
              // ...
            })
            .catch((error) => {
              setErrorMessage({
                currentPassNotMatch: "Invalid Password",
                confirmPassNotMatch: "",
              });
            });
        } else {
          console.log("first");
          setErrorMessage({
            currentPassNotMatch: "",
            confirmPassNotMatch: "Confirm Password Does Not Match!",
          });
        }
      };

  return (
    <div className="password-change">
        <p className="gradient change-password">Change Your Password</p>
        <form onSubmit={passWordHandle} className="change-password-form">
          <div
            className={`floating-label ${
              errorMessage.currentPassNotMatch && "floating-err-msg"
            }`}
            onBlur={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
            onClick={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
          >
            <input
              type="text"
              // required
              id="currentPass"
              name="currentPass"
              placeholder=""
              defaultValue=""
            />
            <label htmlFor="currentPass">Current Password</label>
          </div>

          <p
            className={`err-msg ${
              errorMessage.currentPassNotMatch
                ? "error-msg-show"
                : "error-msg-hide"
            }`}
          >
            Invalid Password!
          </p>

          <div
            className="floating-label"
            onBlur={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
            onClick={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
          >
            <input
              type="text"
              // required
              id="newPass"
              name="newPass"
              placeholder=""
              defaultValue=""
            />
            <label htmlFor="newPass">New Password</label>
          </div>

          <div
            className={`floating-label ${
              errorMessage.confirmPassNotMatch && "floating-err-msg"
            }`}
            onBlur={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
            onClick={() =>
              setErrorMessage({
                currentPassNotMatch: "",
                confirmPassNotMatch: "",
              })
            }
          >
            <input
              type="text"
              // required
              id="confirmPass"
              name="confirmPass"
              placeholder=""
              defaultValue=""
            />
            <label htmlFor="confirmPass">Confirm Password</label>
          </div>
          {errorMessage.confirmPassNotMatch && (
            <p className="err-msg">{errorMessage.confirmPassNotMatch}</p>
          )}
          <button type="submit" className="save-changes-btn">
            Change Password
          </button>
        </form>
      </div>
  )
}

export default ChangePassword