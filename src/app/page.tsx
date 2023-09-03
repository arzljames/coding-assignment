import Card from "@/components/card";
import { API_HOME_ENDPOINT } from "@/constant";
import getData from "@/libs/getData";

export default async function Home() {
  const data = await getData(API_HOME_ENDPOINT);

  return (
    <article className="w-full h-full">
      {data?.map((item: any, index: number) => {
        const textContent = item?.text_content;
        return <Card key={index} itemData={item} textContent={textContent} />;
      })}
    </article>
  );
}
