import NewPresentation from "./newPresentation";
import prisma from "@/app/lib/db";

/**
 * 
 * @returns Element displaying each recent news as a list to display in the News page
 */
export default async function NewsPresentation() {
const latestNews = await await prisma.latestNews.findMany()

  const newsList = latestNews.map(
    (info: { id: number; title: string; content: string; createdAt: Date; publisherId: number }) => (
      <NewPresentation
        key={info.id}
        title={info.title}
        resume={info.content}
        createdAt={info.createdAt}
        publisherId={info.publisherId}
      ></NewPresentation>
    )
  );
  return <>{newsList}</>;
}
