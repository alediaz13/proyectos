import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const juventudesConn = mongoose.createConnection(process.env.MONGO_URI_JUVENTUDES);

juventudesConn.once("open", () => {
  console.log("✅ Conectado a MongoDB Atlas (base: juventudes)");

});

console.log("🔍 URI:", process.env.MONGO_URI_JUVENTUDES);


export default juventudesConn;
