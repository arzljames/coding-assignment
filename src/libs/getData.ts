export default async function getData(api: string) {
  try {
    const res = await fetch(api);
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
