import { API_ABOUT_ENDPOINT } from "@/const";
import getData from "@/libs/getData";

export default async function About() {
  const data = await getData(API_ABOUT_ENDPOINT);
  const aboutContent = data?.data?.[0]?.content?.page_content;

  return (
    <main className="w-full h-full">
      {aboutContent === null || aboutContent === undefined ? (
        <div className="w-full flex justify-center mt-20">
          No content to show.
        </div>
      ) : (
        <div>{aboutContent}</div>
      )}
    </main>
  );
}
