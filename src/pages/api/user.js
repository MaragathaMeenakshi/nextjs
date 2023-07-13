
import clientPromise from "@/library/mangodb";
export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("database");
  switch (req.method) {
    case "POST":
        const { data } = req.body;
        let myPost =  await db.collection('users').insertOne({data});
      res.json(myPost);
      break;
    case "GET":
      const allPosts = await db.collection("users").find({}).toArray();
      res.json({allPosts });
      break;
  }
}