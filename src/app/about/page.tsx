import { API_ABOUT_ENDPOINT } from "@/constant";
import getData from "@/libs/getData";

export default async function About() {
  const data = await getData(API_ABOUT_ENDPOINT);
  const aboutContent = data?.data?.[0]?.content?.page_content;

  return (
    <article className="w-full h-full">
      {!aboutContent || aboutContent === null ? (
        <div className="w-full flex justify-center mt-20">
          <p>No content to show.</p>
        </div>
      ) : (
        <div>{aboutContent}</div>
      )}
    </article>
  );
}
