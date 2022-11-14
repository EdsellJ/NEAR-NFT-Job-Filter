module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			name: {
				type: String,
				unique: true,
				required: true,
			},
      img: {
        type: String,
        required: true,
      },
			type: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "industry",
			},
			url: {
				type: String,
			},
			location: {
				type: String,
				required: true,
			},
			size: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "company_size",
			},
			date: {
				type: String,
			},
			contact: {
				type: String,
				unique: true,
				required: true,
			},
			description: {
				type: String,
			},
			token: {
				type: String,
				unique: true,
			},
		},
		{
			timestamps: true,
		}
	);

	const Company = mongoose.model("company", schema);
	return Company;
};
