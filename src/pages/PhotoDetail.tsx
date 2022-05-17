import {
  ChatIcon,
  CollectionIcon,
  DownloadIcon,
  EyeIcon,
  HeartIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PhotoStat from "../components/PhotoStat";
import { Photo } from "../types/photo";
import DefaultImage from "../user.png";
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
        <section className="flex space-x-5 py-16 items-center">
          <div className="w-2/3">
            <img
              alt={photo.tags}
              key={photo.id}
              className="block object-cover object-center w-full h-full rounded-lg"
              src={photo.largeImageURL}
            />
          </div>
          <div className="w-1/3">
            <div className="flex items-center space-x-5 mb-4">
              <img
                className="rounded-full w-1/6"
                src={!photo.userImageURL ? DefaultImage : photo.userImageURL}
                alt={photo.user}
              />
              <span className="text-2xl text-gray-500 font-semibold">
                {photo.user}
              </span>
            </div>

            {photo.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="bg-gray-600 text-white text-sm mr-3 py-1 px-2 rounded-full inline-block mb-5"
              >
                {tag.trim()}
              </span>
            ))}

            <PhotoStat Icon={EyeIcon} stat={photo.views} />
            <PhotoStat Icon={DownloadIcon} stat={photo.downloads} />
            <PhotoStat Icon={CollectionIcon} stat={photo.collections} />
            <PhotoStat Icon={HeartIcon} stat={photo.likes} />
            <PhotoStat Icon={ChatIcon} stat={photo.comments} />

            <a
              href={photo.pageURL}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-600 text-white py-3 px-5 rounded-full mt-3 inline-block"
            >
              View on Pixabay
            </a>
          </div>
        </section>
      )}
    </>
  );
};

export default PhotoDetail;
