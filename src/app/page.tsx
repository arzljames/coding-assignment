import { API_HOME_ENDPOINT } from "@/const";
import getData from "@/libs/getData";
import parse from "html-react-parser";

export default async function Home() {
  const data = await getData(API_HOME_ENDPOINT);

  return (
    <article className="w-full h-full">
      {data?.map((item: any, index: number) => {
        const textContent = item?.text_content;
        return (
          <div className="mb-6 text-gray-900" key={index}>
            <h1 className="font-bold text-lg">{item.title}</h1>
            {/* used third party library since I noticed that its content is a string of html tags */}
            <div className="text-base ">{parse(textContent ?? "")}</div>
          </div>
        );
      })}
    </article>
  );
}
