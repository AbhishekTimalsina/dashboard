import productData from "./productData";

export async function GET(request) {
  const searchParam = request.nextUrl.searchParams;
  let platform = searchParam.get("platform");
  let region = searchParam.get("region");

  let data = productData.filter((data) => {
    return (
      (platform === "all"
        ? true
        : platform.toLowerCase() === data.platform.toLowerCase()) &&
      (region === "all"
        ? true
        : region.toLowerCase() === data.region.toLowerCase())
    );
  });

  return Response.json(data);
}
