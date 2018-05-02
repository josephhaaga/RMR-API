// routes/annotation_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){

	// Create
	app.post('/annotations', (req, res) => {
		const annotation = {
			resume_id: req.body.resume_id,
			text: req.body.text,
			type: req.body.type,
			author_id: req.body.author_id,
			date_submitted: req.body.date_submitted
		};
		db.collection('annotation').insert(annotation, (err, item) => {
			if(err){
				res.send({"error":err});	
			}else{
				res.send(item);
			}
		});
	});

	// Read
	app.get('/annotations/:id', (req, res) => {
		const id = req.params.id;
		const details = { "_id": new ObjectID(id) };
		db.collection('annotation').findOne(details, (err, item) => {
			if(err){
				res.send({"error": err});	
			}else{
				res.send(item);
			}
		});
	});

	// Update
	// app.put(

	// Destroy

}
