import './SignIn.scss';

import FormUserSignIn from '../../components/Form/FormUserSignIn/FormUserSignIn';

const SignIn = () => {
  return (
    <section className="sign-in bg-dark">
      <div className="sign-in__content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <div className="sign-in__form">
          <FormUserSignIn />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
