import mongoose from 'mongoose';


export const connectDB = async () => {
    await mongoose
      .connect(
        "mongodb+srv://shamim:<db_password>@cluster0.jhw0f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log("DB connection established"));
}