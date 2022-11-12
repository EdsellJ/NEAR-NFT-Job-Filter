module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			name: String,
		},
		{ timestamps: true }
	);

	schema.method('toJSON', () => {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const Company = mongoose.model('company', schema);
	return Company;
};
