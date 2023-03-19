const Tutorial = require("../../models/tutorial");

function createTutorial(req, res, next) {
	const tutorial = req.body;
	tutorial.owner = req.user._id;
	Tutorial.create(tutorial)
		.then((tutorial) => {
			res.status(201).json({ tutorial: tutorial });
		})
		.catch(next);
}

function deleteTutorial(req, res, next) {
	Tutorial.findById(req.params.id)
		.then((tutorial) => {
			if (tutorial.owner.equals(req.user._id)) {
				return tutorial.deleteOne();
			} else {
				res.sendStatus(401);
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next);
}

function indexTutorial(req, res, next) {
	Tutorial.find({})
		.populate("owner")
		.then((tutorials) => {
			return tutorials.map((tutorials) => tutorials);
		})
		.then((tutorials) => {
			return res.status(200).json({ tutorials: tutorials });
		})
		.catch(next);
}

function updateTutorial(req, res, next) {
	Tutorial.findById(req.params.id)
		.then((tutorial) => {
			if (tutorial.owner.equals(req.user._id)) {
				return tutorial.updateOne(req.body);
			} else {
				res.sendStatus(401);
			}
		})
		.then(() => res.sendStatus(204))
		.catch(next);
}

function indexMyTutorials(req, res, next) {
	const user = req.user._id;
	Tutorial.find({ owner: user })
		.populate("owner")
		.then((tutorials) => {
			return tutorials.map((tutorials) => tutorials);
		})
		.then((tutorials) => {
			return res.status(200).json({ tutorials: tutorials });
		})
		.catch(next);
}

module.exports = {
	createTutorial,
	deleteTutorial,
	indexTutorial,
	updateTutorial,
	indexMyTutorials,
};