const execSync = require("child_process").execSync;
const yaml = require("js-yaml");
const environment = process.env.NODE_ENV || "development";

exports.getNFTs = async (req, res) => {
	try {
		var find = '"';
		var re = new RegExp(find, "g");
		const { contractId, accountId } = req.body;
		const tmp = `{"account_id": "${accountId}"}`;
		// const str = environment === 'production' ? "'" + tmp + "'" : '"' + tmp.replaceAll('"', `""`) + '"';
		const str =
			environment === "production" ? "'" + tmp + "'" : '"' + tmp.replace(re, `""`) + '"';
		let content = `near view ${contractId} nft_tokens_for_owner ` + str;
		const output = await execSync(content, {
			encoding: "utf-8",
		});
		const result = await yaml.load(output.substring(output.indexOf("\n") + 1));
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send();
	}
};
