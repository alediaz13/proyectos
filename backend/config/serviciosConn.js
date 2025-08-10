import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const serviciosConn = mongoose.createConnection(process.env.MONGO_URI_SERVICIOS);

serviciosConn.once("open", () => {
  console.log("✅ Conectado a MongoDB Atlas (base: servicios)");
});

console.log("🔍 URI servicios:", process.env.MONGO_URI_SERVICIOS);


export default serviciosConn;
