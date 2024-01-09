import dbConnect from "@/db/Connect";
import Product from "@/db/models/Product";

export default async function handler(request, response) {
  await dbConnect();
  // const {id} = request.query;
  // console.log(request.query)
  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
