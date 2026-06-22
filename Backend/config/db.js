const mongoose = require("mongoose");

// Cache the connection across serverless invocations.
let cached = global.__mongooseCache;
if (!cached) {
  cached = global.__mongooseCache = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not set in environment");

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(uri, { bufferCommands: false })
      .then((m) => {
        console.log(`MongoDB connected: ${m.connection.host}/${m.connection.name}`);
        return m;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (err) {
    cached.promise = null;
    throw err;
  }
  return cached.conn;
};

module.exports = connectDB;
