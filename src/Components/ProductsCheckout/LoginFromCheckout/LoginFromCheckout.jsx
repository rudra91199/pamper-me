import "./LoginFromCheckout.css";
import useToken from '../../../Hooks/useToken';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const LoginFromCheckout = () => {
    const [signInWithEmailAndPassword, user, , loginError] =
    useSignInWithEmailAndPassword(auth);

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
      };

      const [token] = useToken(user?.user);

  return (
    <div className="checkout-login">
          <h3>Login</h3>
          <form onSubmit={handleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                required
                name="email"
                placeholder="Your Email"
                id="email"
              />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <div>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Password"
                  id="password"
                />
                <button type="submit">login</button>
              </div>
            </div>
          </form>
        </div>
  )
}

export default LoginFromCheckout