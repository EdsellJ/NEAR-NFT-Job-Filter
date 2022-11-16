module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			type: {
				type: String,
				unique: true,
				required: true,
			},
		},
		{
			timestamps: false,
		}
	);
	const JobType = mongoose.model("job_type", schema);
	return JobType;
};
