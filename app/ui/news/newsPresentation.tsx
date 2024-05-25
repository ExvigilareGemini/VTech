const { news } = require("../../lib/placeholder-news");
import NewPresentation from "./newPresentation";

export default function NewsPresentation() {
  console.log(news);
  const newsList = news.map(
    (info: { id: number; title: string; resume: string }) => (
      <NewPresentation
        key={info.id}
        title={info.title}
        resume={info.resume}
      ></NewPresentation>
    )
  );
  return <>{newsList}</>;
}
