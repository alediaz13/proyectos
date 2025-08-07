import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const juventudesConn = mongoose.createConnection(process.env.MONGO_URI_JUVENTUDES);

juventudesConn.once("open", () => {
  console.log("✅ Conectado a MongoDB Atlas (base: juventudes)");
});

export default juventudesConn;
