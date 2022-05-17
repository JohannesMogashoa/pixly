import { useState } from "react";
import { Photo } from "../types/photo";
import Photos from "../components/Photos";
import data from "../data.json";
import Pagination from "../components/Pagination";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>(data.hits);
  const [current_page, setCurrentPage] = useState(1);
  const [per_page] = useState(20);

  const paginate = (action: string) => {
    switch (action) {
      case "prev":
        setCurrentPage(current_page - 1);
        break;
      case "next":
        setCurrentPage(current_page + 1);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Photos photos={photos} />
      <Pagination
        photos_per_page={per_page}
        total_photos={data.totalHits}
        current_page={current_page}
        paginate={paginate}
      />
    </>
  );
};

export default Home;
