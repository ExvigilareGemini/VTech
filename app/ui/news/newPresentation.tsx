import Image from "next/image";
import imageInfo from "../../../public/info.jpg";

export default function NewPresentation(newInfo: {
  title: string;
  resume: string;
}) {
  return (
    <div className="flex flex-col md:flex-row m-4 bg-gray-300 bg-opacity-20 p-4 rounded hover:bg-opacity-40 transition-all duration-250 cursor-pointer">
      <Image src={imageInfo} alt="Info Image" width={300} height={500}  className="hidden md:block mr-4" />
      <div >
        <h1 className="text-xl font-bold ">{newInfo.title}</h1>
        <p>{newInfo.resume}</p>
      </div>
    </div>
  );
}
