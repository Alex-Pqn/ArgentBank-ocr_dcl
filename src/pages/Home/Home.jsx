import './Home.scss';

import IconChat from '../../assets/icons/icon-chat.png';
import IconMoney from '../../assets/icons/icon-money.png';
import IconSecurity from '../../assets/icons/icon-security.png';

const Home = () => {
  return (
    <section className="home">
      <section className="home__hero">
        <div className="hero">
          <div className="hero__content">
            <h2 className="sr-only">Promoted Content</h2>
            <p className="subtitle">No fees.</p>
            <p className="subtitle">No minimum deposit.</p>
            <p className="subtitle">High interest rates.</p>
            <p className="text">
              Open a savings account with Argent Bank today!
            </p>
          </div>
        </div>
      </section>
      <section className="home__features">
        <div className="features">
          <h2 className="sr-only">Features</h2>
          <article className="feature__item">
            <img src={IconChat} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature__item__title">You are our #1 priority</h3>
            <p>
              Need to talk to a representative? You can get in touch through our
              24/7 chat or through a phone call in less than 5 minutes.
            </p>
          </article>
          <article className="feature__item">
            <img src={IconMoney} alt="Money Icon" className="feature-icon" />
            <h3 className="feature__item__title">
              More savings means higher rates
            </h3>
            <p>
              The more you save with us, the higher your interest rate will be!
            </p>
          </article>
          <article className="feature__item">
            <img
              src={IconSecurity}
              alt="Security Icon"
              className="feature-icon"
            />
            <h3 className="feature__item__title">Security you can trust</h3>
            <p>
              We use top of the line encryption to make sure your data and money
              is always safe.
            </p>
          </article>
        </div>
      </section>
    </section>
  );
};

export default Home;
