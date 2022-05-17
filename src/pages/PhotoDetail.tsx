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
        <section className="flex flex-col items-center px-5 py-8 space-x-5 md:py-16 md:flex-row">
          <div className="w-full md:w-2/3">
            <img
              alt={photo.tags}
              key={photo.id}
              className="block object-cover object-center w-full h-full rounded-lg"
              width={photo.imageWidth / 2}
              height={photo.imageHeight / 2}
              src={photo.largeImageURL}
            />
          </div>
          <div className="w-full mt-5 md:mt-0 md:w-1/3">
            <div className="flex items-center mb-4 space-x-5">
              <img
                className="rounded-full w-[50px] md:w-1/6"
                src={!photo.userImageURL ? DefaultImage : photo.userImageURL}
                alt={photo.user}
              />
              <span className="text-2xl font-semibold text-gray-500">
                {photo.user}
              </span>
            </div>

            {photo.tags.split(",").map((tag) => (
              <span
                key={tag}
                className="inline-block px-2 py-1 mb-5 mr-3 text-sm text-white bg-gray-600 rounded-full"
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
              className="inline-block px-5 py-3 mt-3 text-white rounded-full bg-slate-600"
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
