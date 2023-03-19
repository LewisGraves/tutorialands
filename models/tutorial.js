const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tutorialSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
        picture: {
            type: String,
            required: false,
        },
		sortOrder: Date,
		owner: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		}
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("Tutorial", tutorialSchema);