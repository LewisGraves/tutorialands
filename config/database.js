//require and setup mongoose
const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

//log the db connection status
db.on("connected", () => {
	console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});