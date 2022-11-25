import './User.scss';

import UserAccountItem from '../../components/User/UserAccountItem/UserAccountItem';

import { accountsMock } from '../../assets/accountsMock.js';

const User = () => {
  return (
    <div className="user bg-dark">
      <header className="user__header">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
      </header>
      <h2 className="sr-only">Accounts</h2>
      <section className="user__accounts">
        <div className="accounts">
          {accountsMock.map((account, index) => (
            <div key={index} className="accounts__item">
              <UserAccountItem title={account.title} amount={account.amount} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default User;
