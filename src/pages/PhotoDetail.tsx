import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Photo } from "../types/photo";
import { getPhoto } from "../utils/api";

const PhotoDetail = () => {
  const { id } = useParams();
  const [photo, setPhoto] = useState<Photo>();

  useEffect(() => {
    getPhoto(parseInt(id!))
      .then((data) => setPhoto(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <>
      {photo && (
        <section className="flex space-x-5 py-16">
          <div className="w-2/3">
            <img
              alt={photo.tags}
              key={photo.id}
              className="block object-cover object-center w-full h-full rounded-lg"
              src={photo.largeImageURL}
            />
          </div>
          <div className="w-1/3 pt-10">
            <div className="flex items-center space-x-5 mb-4">
              <img
                className="rounded-full w-1/6"
                src={photo.userImageURL}
                alt={photo.user}
              />
              <span className="text-2xl text-gray-500 font-semibold">
                {photo.user}
              </span>
            </div>

            {photo.tags.split(",").map((tag) => (
              <span className="bg-gray-600 text-white text-sm mr-3 py-1 px-2 rounded-full">
                {tag.trim()}
              </span>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default PhotoDetail;
