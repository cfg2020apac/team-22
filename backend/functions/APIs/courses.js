const { db } = require('../util/admin');

exports.getAllCourses = (request, response) => {
	db
		.collection('courses')
		.orderBy('startDate', 'desc')
		.get()
		.then((data) => {
			let courses = [];
			data.forEach((doc) => {
				courses.push({
                    courseId: doc.id,
                    name: doc.data().name,
					startDate: doc.data().startDate,
					endDate: doc.data().endDate,
					capacity: doc.data().capacity,
					telegram: doc.data().telegram,
					topics: doc.data().topics
				});
            });
			return response.json(courses);
		})
		.catch((err) => {
			console.error(err);
			return response.status(500).json({ error: err.code});
		});
};

exports.getSpecificCourse = (request, response) => {
    const document = db.doc(`/Course/${request.params.CourseID}`);
    document
        .get()
        .then((doc) => {
            if (doc.id != request.params.CourseID) {
                return response.status(404).json({ error: 'No such course' })
			}
			data = ({
				CourseID: doc.id,
				Name: doc.data().Name,
				Content: doc.data().Content,
				Instructor: doc.data().Instructor,
				CourseID: doc.data().CourseID,
				StartD: doc.data().StartD,
				EndD: doc.data().EndD,
				sizeC: doc.data().sizeC,
				TELElink: doc.data().TELElink,
				createdAt: doc.data().createdAt,
			});
            return response.json(data);
        })
        .then(() => {
            response.json({ message: 'Course Found' });
        })
        .catch((err) => {
            console.error(err);
            return response.status(500).json({ error: err.code });
        });
};




exports.CreateCourse = (request, response) =>{
	if (request.body.Name.trim() === "") {
		return response.status(400).json({ Name: 'Must not be empty' });
    }
    if(request.body.Content.trim() === "") {
        return response.status(400).json({ Content: 'Must not be empty' });
	}
	if (request.body.Instructor.trim() === "") {
		return response.status(400).json({ Instructor: 'Must not be empty' });
    }
    if(request.body.CourseID.trim() === "") {
        return response.status(400).json({ CourseID: 'Must not be empty' });
	}
	if(request.body.StartD.trim() === "") {
        return response.status(400).json({ StartD: 'Must not be empty' });
	}
	if(request.body.EndD.trim() === "") {
        return response.status(400).json({ EndD: 'Must not be empty' });
	}
	if(request.body.sizeC.trim() === "") {
        return response.status(400).json({ sizeC: 'Must not be empty' });
	}
	if(request.body.TELElink.trim() === "") {
        return response.status(400).json({ TELElink: 'Must not be empty' });
	}
	const newCourseItem =  {
        Name: request.body.Name,
		Content: request.body.Content,
		Instructor: request.body.Instructor,
		StartD: request.body.StartD,
		EndD: request.body.EndD,
		sizeC: request.body.sizeC,
		TELElink: request.body.TELElink,
		createdAt: new Date().toISOString(),
		CourseID: request.body.CourseID
	}
	var k = db.collection('Course').doc(request.body.CourseID);
	k.set({
        Name: request.body.Name,
		Content: request.body.Content,
		Instructor: request.body.Instructor,
		StartD: request.body.StartD,
		EndD: request.body.EndD,
		sizeC: request.body.sizeC,
		TELElink: request.body.TELElink,
		createdAt: new Date().toISOString(),
		CourseID: request.body.CourseID
	}).then((doc)=>{
		doc.id = request.body.CourseID;
		const responseCItem = newCourseItem;
		responseCItem.id = request.body.CourseID;
		return response.json(responseCItem);
	})
	.catch((err) => {
		response.status(500).json({ error: 'Something went wrong' });
		console.error(err);
	});
};