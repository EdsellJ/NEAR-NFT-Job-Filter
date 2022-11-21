const db = require("../models");
const industryTypes = require("../database/industry.json");

module.exports = async () => {
	const Industry = db.industries;

	for (let type of industryTypes) {
		const industry = new Industry({
			type: type,
		});
		await industry.save();
	}

	console.log("Company Industry Seeds Generated Successfully!");
};
