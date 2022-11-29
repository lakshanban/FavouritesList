import Link from "next/link";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import useWindowDimensions from "../../custom-hook/useWindowDimensions";
import styles from "../../styles/Navbar.module.scss";

const NavBar: React.FunctionComponent = () => {
  const { width } = useWindowDimensions();

  return (
    <div className={styles.container}>
      <div className={styles.homeContainer}>
        <Link href="/">{width < 600 ? <HomeIcon /> : "Home"}</Link>
      </div>
      <div className={styles.favContainer}>
        <Link href="/favourites">
          {width < 600 ? <FavoriteIcon /> : "Liked"}
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
