// routes/index.js

const resumeRoutes = require('./resume_routes');
const annotationRoutes = require('./annotation_routes');


module.exports = function(app, db){
	resumeRoutes(app, db);
	annotationRoutes(app, db);
};
