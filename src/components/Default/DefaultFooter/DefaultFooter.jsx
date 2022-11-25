import './DefaultFooter.scss';

const DefaultFooter = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">Copyright {year} Argent Bank</p>
    </footer>
  );
};

export default DefaultFooter;
