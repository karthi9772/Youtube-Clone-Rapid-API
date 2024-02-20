import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
// import { logo } from "../utils/constants";
import { SearchBar } from "./SearchBar";
const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        postion: "sticky",
        background: "#323e62",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to={"/"} sx={{}}>
        <figure>
          <img src="/play.png" alt="logo" height={45}></img>
        </figure>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

// <Link to={"/"}>
// <p>Feed</p>
// </Link>
// <Link to={"/video/:id"}>
// <p>Video-Detail</p>
// </Link>
// <Link to={"/Channel/:id"}>
// <p>Channel-detail</p>
// </Link>
// <Link to={"/Search/:searchTerm"}>
// <p>Search-Feed</p>
// </Link>
