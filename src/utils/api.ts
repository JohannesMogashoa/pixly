import axios from "axios";
import { ApiResponse, Photo } from "../types/photo";

/**
 * This is a function that makes the API call to the Pixabay API to get the photos
 * @param page_number  The page number to get the photos from
 * @param per_page   The number of photos to get per page
 * @returns  A promise that resolves to an APIResponse object
 */
export const getPhotos = async (page_number: number, per_page: number): Promise<{ data: ApiResponse, status: number }> => {
    const { data, status } = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&page=${page_number}&per_page=${per_page}`
    );
    return { data, status };
}

/**
 *  This is a function that makes the API call to the Pixabay API to get the photo
 * @param id The id of the photo to get
 * @returns  A promise that resolves to a Photo object
 */
export const getPhoto = async (id: number): Promise<Photo> => {
    const { data } = await axios.get(
        `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${id}`
    );
    return data.hits[0];
}