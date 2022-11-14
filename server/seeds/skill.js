const db = require("../models");
const skills = require("../database/skill.json");

module.exports = async () => {
	const Skill = db.skills;

	for (let skill of skills) {
		const item = new Skill({
			name: skill,
		});
		await item.save();
	}

	console.log("Skill Seeds Generated Successfully!");
};
