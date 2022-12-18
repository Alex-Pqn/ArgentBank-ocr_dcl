import './Login.scss';

import FormUserLogin from '../../components/Form/FormUserLogin/FormUserLogin';

const Login = () => {
  return (
    <section className="login bg-dark">
      <div className="login__content">
        <i className="fa fa-user-circle login-icon"></i>
        <h1>Sign In</h1>
        <div className="login__form">
          <FormUserLogin />
        </div>
      </div>
    </section>
  );
};

export default Login;
