module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			size: {
				type: String,
				unique: true,
				required: true,
			},
		},
		{
			timestamps: false,
		}
	);

	const CompanyType = mongoose.model("company_size", schema);
	return CompanyType;
};
