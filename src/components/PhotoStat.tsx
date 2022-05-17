import { FunctionComponent } from "react";

const PhotoStat: FunctionComponent<{ Icon: any; stat: number }> = ({
  Icon,
  stat,
}) => {
  return (
    <p className="flex space-x-3 pb-5 items-center">
      <Icon height={25} width={25} className="text-slate-600" />
      <span className="font-semibold text-gray-400">{stat}</span>
    </p>
  );
};

export default PhotoStat;
