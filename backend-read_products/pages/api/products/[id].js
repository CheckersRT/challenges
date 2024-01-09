import dbConnect from "@/db/Connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if(request.method === "GET") {
    const product = await Product.findById(id);
    return response.status(200).json(product)
  }
}
