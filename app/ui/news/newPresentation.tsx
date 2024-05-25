import Image from "next/image";
import imageInfo from "../../../public/info.jpg";

export default function NewPresentation(newInfo: {
  title: string;
  resume: string;
}) {
  return (
    <div>
      <Image src={imageInfo} alt="Info Image" width={500} height={500} />
      <h1>{newInfo.title}</h1>
      <p>{newInfo.resume}</p>
    </div>
  );
}
