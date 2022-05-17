import { Photo } from "../types/photo";
import data from "../data.json";

export const getPhotos = async (page_number: number): Promise<Photo[]> => {
    const num_pages = Math.ceil(data.totalHits / 20);
    if (page_number > num_pages) {
        throw new Error("Page number is too high");
    }
    else if (page_number < 1) {
        throw new Error("Page number is too low");
    }
    else {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&page=${page_number}&per_page=20`);
        const photos = await response.json();
        return photos.hits;
    }
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