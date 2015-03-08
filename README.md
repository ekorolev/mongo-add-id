# mongo-add-id
Add property "id" in mongoose model.

# Using

```
	var mongoose = require('mongoose').connect('mongodb://localhost/test');
	var addId = require('mongo-add-id');

	var schema = mongoose.Schema({
		
		field1: Number,
		...
		fieldN: String

	});

	addId(schema);

	var model = mongoose.model("records", schema);
```

And your schema will having field "id".