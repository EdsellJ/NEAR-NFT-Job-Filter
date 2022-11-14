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

	const Industry = mongoose.model("industry", schema);
	return Industry;
};
