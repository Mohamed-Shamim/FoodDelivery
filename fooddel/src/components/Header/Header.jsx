import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      {" "}
      <div className="header-container">
        <h2>Order your favorite food here</h2>{" "}
        <p>
          Were here to help you find the perfect meal, from the most popular to
          the most unique. Order now and enjoy a tasty meal delivered straight
          to your doorstep.{" "}
        </p>
        <button className="header-button">View Menu</button>{" "}
      </div>{" "}
    </div>
  );
};

export default Header;
