import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;

  const db1 = client.db("nextjs-api-demo");
  switch (req.method) {
    case "GET":
      const users1 = await db1.collection("users").find({}).toArray();
      res.json(users1);
      break;
  }
}
