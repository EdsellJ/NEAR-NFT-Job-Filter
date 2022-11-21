module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			jobId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "job",
			},
			badge: {
				type: [mongoose.Schema.Types.ObjectId],
			},
			description: {
				type: String,
			},
			bidAt: {
				type: String,
			},
		},
		{
			timestamps: false,
		}
	);

	const Applicant = mongoose.model("applicant", schema);
	return Applicant;
};
