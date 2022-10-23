import { app } from "./app";
import mongoose from "mongoose";

const PORT: string | undefined = "5000";
try {
  mongoose.connect(
    "mongodb+srv://admin:ShWHwg8sbYCstOsW@cluster0.fnwlj.mongodb.net/yt-reduxtk-ts"
  );
  console.log("db connected");
  app.listen(PORT, () => {
    console.log("server running...");
  });
} catch (error) {
  console.log("failed", error);
}
