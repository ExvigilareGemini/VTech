import Image from "next/image";
import imageInfo from "../../../public/info.jpg";


/**
 * 
 * @param {object} newInfo - Basic informations about a recent news
 * @param {string} title - Title of the news
 * @param {string} resume - Resume of the news
 * @returns {tsx} A card type element containing basic information about the recent news
 */
export default function NewPresentation(newInfo: {
  title: string;
  resume: string;
}) {
  return (
    <div className="flex flex-col m-4 bg-gray-300 bg-opacity-20 p-4 rounded hover:bg-opacity-40 transition-all duration-250 cursor-pointer">
        <h1 className="text-xl font-bold ">{newInfo.title}</h1>
        <p>{newInfo.resume}</p>
    </div>
  );
}
