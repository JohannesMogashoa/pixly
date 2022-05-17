import { useEffect, useState } from "react";
import { Photo } from "../types/photo";
import { getPhotos } from "./api";

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
    per_page,
    total_pages,
    photos,
    loading,
  };
};

export default useFetch;
