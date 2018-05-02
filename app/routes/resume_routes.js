// routes/resume_routes.js

module.exports = function(app, db){

	// Create resume
	app.post('/resumes', (req, res) => {
		res.send("Create endpoint");
	});

	// Read resume
	app.get('/resumes/:id', (req, res) => {
		
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
