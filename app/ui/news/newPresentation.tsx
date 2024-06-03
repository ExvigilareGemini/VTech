import prisma from "@/app/lib/db";

/**
 * 
 * @param {object} newInfo - Basic informations about a recent news
 * @param {string} title - Title of the news
 * @param {string} resume - Resume of the news
 * @param {Date} createdAt - Dazte of the publication
 * @param {number} publisherId - Id of the publisher, used to get the right publisher in the db
 * @returns {tsx} A card type element containing basic information about the recent news
 */
export default async function NewPresentation(newInfo: {
  title: string;
  resume: string;
  createdAt: Date;
  publisherId: number;
})

{
  const publisherName = await prisma.newsPublisher.findUnique({
    where: {
      id: newInfo.publisherId,
    },
    select: {
      name: true,
    },
  })
  return (
    <div className="flex flex-col m-4 bg-gray-300 bg-opacity-20 p-4 rounded hover:bg-opacity-40 transition-all duration-250 cursor-pointer">
        <h1 className="text-xl font-bold ">{newInfo.title}</h1>
        <p>{newInfo.resume}</p>
        <p>Publié par : {publisherName?.name}</p>
    </div>
  );
}
