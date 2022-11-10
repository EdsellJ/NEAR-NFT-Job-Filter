module.exports = (mongoose) => {
	const schema = mongoose.Schema(
		{
			name: String,
			username: String,
		},
		{
			timestamps: true,
		}
	);

	schema.method('toJSON', () => {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const User = mongoose.model('user', schema);
	return User;
};
