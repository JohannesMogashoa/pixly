import { useEffect, useState } from "react";
import { Photo } from "../types/photo";
import { getPhotos } from "./api";

/**
 * A custom React hook that is used to store the logic for getting photos from the Pixabay API
 * @param page_number The page number to get the photos from
 * @returns An object that consists of the total pages, photos array and the loading state
 */
const useFetch = (page_number: number) => {
  const [per_page] = useState(20);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [total_pages, setTotalPages] = useState(0);

  useEffect(() => {
    setLoading(true);
    getPhotos(page_number, per_page)
      .then(({ data, status }) => {
        if (status === 200) {
          const totalPages = Math.ceil(data.totalHits / per_page);
          setTotalPages(totalPages);
          setPhotos(data.hits);
          setLoading(false);
        }
      })
      .catch((err) => err);
  }, [page_number, per_page]);

  return {
    total_pages,
    photos,
    loading,
  };
};

export default useFetch;
