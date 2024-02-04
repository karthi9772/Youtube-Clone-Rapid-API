import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", gap: "40px" }}>
      <Link to={"/"}>
        <p>Feed</p>
      </Link>
      <Link to={"/video/:id"}>
        <p>Video-Detail</p>
      </Link>
      <Link to={"/Channel/:id"}>
        <p>Channel-detail</p>
      </Link>
      <Link to={"/Search/:SearchTerm"}>
        <p>Search-Feed</p>
      </Link>
    </div>
  );
};

export default Navbar;
