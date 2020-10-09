var uuid = require('uuid');
const { db } = require('../util/admin');

module.exports = {
    getCourse: async function(req, res, next) {
        try{    
            let course = await db.collection('courses').doc(req.params.id).get();
            let data = course.data();
            return res.status(200).send(data);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
    },
    getAllCourses: async function(req, res, next){
        try{    
            let query = await db.collection('courses');
            let courses = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                console.log(docs);
                for(let doc of docs){
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        instructor: doc.data().instructor,
                        courseId: doc.data().course_id,
                        startDate: doc.data().start_date,
                        endDate: doc.data().end_date,
                        maxSize: doc.data().max_size,
                        tgLink: doc.data().tg_Link
                    }
                    courses.push(selectedItem);
                }
            })
            return res.status(200).json(courses);
            }catch(err){
                    console.error(err);
                    return res.status(500).json({ error: err.code});
                };
    },

    createCourse: async function(req, res, next){
        try{    
            let courseId = uuid.v4();
            let query = await db.collection('courses').doc(courseId)
                .create(req.body);
            return res.status(200).send({
                message: "success"
            }); 
        } catch (error){
                console.log(error);
                return res.status(500).send(error);
        }
    }
    

}
