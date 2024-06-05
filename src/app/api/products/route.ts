import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "Sepatu Cowok",
    price: 20000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/927d3fef-0657-4b82-8b3a-b34f07ffdd28/pegasus-41-road-running-shoes-RZm89S.png",
  },
  {
    id: 2,
    title: "Sepatu Item",
    price: 10000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/13fbb773-4379-4adf-b527-145384637af6/air-jordan-9-g-golf-shoes-nNqtwL.png",
  },
  {
    id: 3,
    title: "Sepatu Orange",
    price: 12000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/75d7d56d-b7f7-4336-884e-b63b6eb11349/jordan-spizike-low-shoes-P07hCP.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({ msg: "sukses", data: detailProduct });
    }
    return NextResponse.json({ msg: "data not found", data: [] });
  }
  return NextResponse.json({ msg: "sukses", data });
}
