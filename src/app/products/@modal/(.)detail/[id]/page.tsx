import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const data = await getData(
    `http://localhost:3000/api/products?id=${params.id}`
  );
  return (
    <Modal>
      <img
        src={data?.data?.image}
        alt="lorem"
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>Title: {data?.data?.title}</h3>
        <p>Price: ${data?.data?.price}</p>
      </div>
    </Modal>
  );
}
