
module.exports = function ( schema ) {
	
	schema.add({
		id: {
			type: String,
			get: function () {
				return this._id.toString()
			}
		}
	});

}