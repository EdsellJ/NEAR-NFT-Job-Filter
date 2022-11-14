module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			name: {
				type: String,
				unique: true,
				required: true,
			},
		},
		{
			timestamps: false,
		}
	);

	const Skill = mongoose.model("skill", schema);
	return Skill;
};
