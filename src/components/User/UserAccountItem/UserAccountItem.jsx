import './UserAccountItem.scss';

const UserAccountItem = ({ title, amount }) => {
  return (
    <article className="account-item">
      <div className="account-item__content-wrapper">
        <h3 className="account-item__title">{title}</h3>
        <p className="account-item__amount">
          $<span>{amount}</span>
        </p>
        <p className="account-item__description">Available Balance</p>
      </div>
      <div className="account-item__wrapper">
        <button className="account-item-button">View transactions</button>
      </div>
    </article>
  );
};

export default UserAccountItem;
