// routes/resume_routes.js

var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db){

	// Create resume
	app.post('/resumes', (req, res) => {
		const resume = {
			user_id: req.body.user_id,
			upload_date: req.body.upload_date			
		};
		
		db.collection('resumes').insert(resume, (err, results) => {
			if(err){
				res.send("Something went wrong with the CREATE operation");	
			}else{
				res.send(results);
			}
		});
	});

	// Read resume
	app.get('/resumes/:id', (req, res) => {
		const details = { "_id": new ObjectID(id) };
		db.collection('resumes').findOne(details, (err, item) => {
			if(err){
				res.send({"error":"An unexpected error has occurred"});
			}else{
				res.send(item);
			}
		});
	});
	
	// Update resume
	app.put('/resumes/:id', (req, res) => {
	
	});

	// Delete resume
	app.delete('/resumes/:id', (req, res) => {
		const id = req.params.id;
		const details = { '_id': new ObjectID(id) };
		
	});

}
