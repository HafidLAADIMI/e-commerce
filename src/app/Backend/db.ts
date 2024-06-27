import mongoose from "mongoose";
const connectionString = process.env.MONGO_URL;

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("you are already connected to the database");
    return;
  }

  try {
    await mongoose.connect(connectionString!, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log("you are connected to the databse Now !");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB