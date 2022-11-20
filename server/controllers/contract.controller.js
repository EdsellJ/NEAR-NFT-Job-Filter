require("dotenv").config();
const execSync = require("child_process").execSync;
const yaml = require("js-yaml");
// const environment = process.env.NODE_ENV || "development";
const environment = process.platform === 'linux' ? 'production' : 'development'

exports.getNFTs = async (req, res) => {
	try {
		var find = '"';
		var re = new RegExp(find, "g");
		const { contractId, accountId } = req.body;
		const tmp = `{"account_id": "${accountId}"}`;
		// console.log(tmp);
		// const str = environment === 'production' ? "'" + tmp + "'" : '"' + tmp.replaceAll('"', `""`) + '"';
		const str =
			environment === "production" ? "'" + tmp + "'" : '"' + tmp.replace(re, `""`) + '"';
		let content = `near view ${contractId} nft_tokens_for_owner ` + str;
		// let content = `near view ${contractId} nft_tokens_for_owner "{""account_id"": ""${accountId}""}"`;
		// console.log(content);
		const output = await execSync(content, {
			encoding: "utf-8",
		});
		const result = await yaml.load(output.substring(output.indexOf("\n") + 1));
		// console.log('result', result)
		res.status(200).send(result);
	} catch (error) {
		res.status(500).send();
	}
};
