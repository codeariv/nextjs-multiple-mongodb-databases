import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;

  const db2 = client.db("nextjs-mongodb-atlas-demo");
  switch (req.method) {
    case "GET":
      const users2 = await db2.collection("users").find({}).toArray();
      res.json(users2);
      break;
  }
}
