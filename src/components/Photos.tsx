import { FunctionComponent } from "react";
import { Photo } from "../types/photo";

const Photos: FunctionComponent<{ photos: Photo[] }> = ({ photos }) => {
  return (
    <section className="overflow-hidden text-gray-700">
      <div className="px-5 py-2 mx-auto lg:pt-10 lg:px-20">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap">
            {photos.map((photo) => (
              <div className="w-1/4 p-1 md:p-2">
                <img
                  alt={photo.tags}
                  key={photo.id}
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={photo.webformatURL}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Photos;
