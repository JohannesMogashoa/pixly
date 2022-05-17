import axios from "axios";
import data from "../data.json";
import { ApiResponse, Photo } from "../types/photo";

export const getPhotos = async (page_number: number, per_page: number): Promise<{ data: ApiResponse, status: number }> => {
    const { data, status } = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&page=${page_number}&per_page=${per_page}`
    );
    return { data, status };
}

export const getPhoto = async (id: number): Promise<Photo> => {
    const { data } = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`
    );
    return data.hits[0];
}

export const getMockPhotos = async (page_number: number): Promise<Photo[]> => {
    const num_pages = Math.ceil(data.totalHits / 20);
    if (page_number > num_pages) {
        throw new Error("Page number is too high");
    }
    else if (page_number < 1) {
        throw new Error("Page number is too low");
    }
    else {
        const photos = data.hits.slice((page_number - 1) * 20, page_number * 20);
        return photos;
    }
}