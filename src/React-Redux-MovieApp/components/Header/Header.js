import { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/profile3.jpg";
import "./Header.scss";
// import { searchTitle } from "../Home/Home";

const Header = () => {
  const [term, setTerm] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // searchTitle = term;
    console.log(term);
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Gogrene</div>
      </Link>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter movie title"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i> Search
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
