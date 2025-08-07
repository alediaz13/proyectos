import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const serviciosConn = mongoose.createConnection(process.env.MONGO_URI_SERVICIOS);

serviciosConn.once("open", () => {
  console.log("✅ Conectado a MongoDB Atlas (base: servicios)");
});

export default serviciosConn;
