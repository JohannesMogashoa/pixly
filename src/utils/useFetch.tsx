import { useState, useEffect } from "react";
import axios from "axios";
import { Photo } from "../types/photo";

const useFetch = (page_number: number) => {
  const [per_page] = useState(20);
  const [current_page, setCurrentPage] = useState(1);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [total_pages, setTotalPages] = useState(0);

  useEffect(() => {}, [page_number]);

  return { per_page, current_page, total_pages, photos, loading };
};
