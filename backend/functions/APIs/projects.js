const { db } = require('../util/admin');

exports.getAllProjects = (request, response) => {
	db
        .collection('projects')
		.get()
		.then((data) => {
			let projects = [];
			data.forEach((doc) => {
				projects.push({
                    projectId: doc.id,
                    name: doc.data().title,
					description: doc.data().body,
                    startDate: doc.data().startDate,
                    deadline: doc.data().deadline
				});
            });
			return response.json(projects);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.postOneProject = (request, response) => {
	if (request.body.description.trim() === '') {
		return response.status(400).json({ description: 'Must not be empty' });
    }
    
    if(request.body.name.trim() === '') {
        return response.status(400).json({ name: 'Must not be empty' });
    }
    
    const newProjectItem = {
        name: request.body.name,
        description: request.body.description,
        startDate: new Date().toISOString(),
        deadline: request.body.deadline
    }
    db
        .collection('projects')
        .add(newProjectItem)
        .then((doc)=>{
            const responseProjectItem = newProjectItem;
            responseProjectItem.id = doc.id;
            return response.json(responseProjectItem);
        })
        .catch((err) => {
			response.status(500).json({ error: 'Something went wrong' });
			console.error(err);
		});
};

exports.deleteProject = (request, response) => {
    const document = db.doc(`/projects/${request.params.projectId}`);
    document
        .get()
        .then((doc) => {
            if (!doc.exists) {
                return response.status(404).json({ error: 'Project not found' })
            }
            return document.delete();
        })
        .then(() => {
            response.json({ message: 'Delete successfull' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};

exports.editProject = ( request, response ) => { 
    if(request.body.projectId || request.body.startDate){
        response.status(403).json({message: 'Not allowed to edit'});
    }
    let document = db.collection('projects').doc(`${request.params.projectId}`);
    document.update(request.body)
    .then(()=> {
        response.json({message: 'Updated successfully'});
    })
    .catch((err) => {
        console.error(err);
        return response.status(500).json({ 
                error: err.code 
        });
    });
};