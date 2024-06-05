import { getData } from "@/services/products";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const data = await getData(
    `http://localhost:3000/api/products?id=${params.id}`
  );
  console.log(data);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <img
          src={data?.data?.image}
          alt="lorem"
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3>Title: {data?.data?.title}</h3>
          <p>Price: ${data?.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
