import { useState } from "react";
import Pagination from "../components/Pagination";
import Photos from "../components/Photos";
import useFetch from "../utils/useFetch";

const Home = () => {
  const [current_page, setCurrentPage] = useState(1);
  const { per_page, total_pages, photos, loading } = useFetch(current_page);

  const paginate = (action: string) => {
    if (action === "prev" && current_page > 0) {
      setCurrentPage(current_page - 1);
    } else if (action === "next" && current_page < total_pages) {
      setCurrentPage(current_page + 1);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Photos photos={photos} />
      <Pagination
        photos_per_page={per_page}
        total_photos={total_pages}
        current_page={current_page}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
