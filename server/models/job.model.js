module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			companyId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "company",
			},
			title: {
				type: String,
				required: true,
			},
			location: {
				type: String,
				required: true,
			},
			remote: {
				type: Boolean,
				required: true,
			},
			type: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "job_type",
			},
			skill: {
				type: [mongoose.Schema.Types.ObjectId],
				required: true,
			},
			from: {
				type: Number,
			},
			to: {
				type: Number,
			},
			description: {
				type: String,
				required: true,
			},
			walletAddress: {
				type: String,
				required: true,
			},
			postedAt: {
				type: String,
				required: true,
			},
		},
		{
			timestamps: true,
		}
	);

	const Job = mongoose.model("job", schema);
	return Job;
};
