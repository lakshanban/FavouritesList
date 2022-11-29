import List from "../components/list";
import useFetch from "../custom-hook/useFetch";
import styles from "../styles/Home.module.scss";

export default function Favourites() {
  const { data, loading, error } = useFetch("/api/favourites");
  if (error) {
    alert("Something went wrong while fetching the data");
  }
  return (
    <div className={styles.container}>
      <List data={data} />
    </div>
  );
}
