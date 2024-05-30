import NewsPresentation from "../ui/news/newsPresentation";

/**
 *
 * @returns The page containing the news
 */
export default function Page() {
  return (
    <>
      <h1>News</h1>
      <section>
        <NewsPresentation></NewsPresentation>
      </section>
    </>
  );
}
