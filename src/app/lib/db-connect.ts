import mongoose, { ConnectOptions } from "mongoose";

const uri = process.env.MONGODB_URI!;

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

export async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(uri, clientOptions as ConnectOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    
    return "Pinged your deployment. You successfully connected to MongoDB!";
  } catch(error){
    return error;
  } finally {
    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}
