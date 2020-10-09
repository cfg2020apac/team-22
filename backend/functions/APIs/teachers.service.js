var uuid = require('uuid');
const { db } = require('../util/admin');

module.exports = {
    getTeacher: async function(req, res, next) {
        try{    
            let teacher = await db.collection('teachers').doc(req.params.id).get();
            let data = teacher.data();
            return res.status(200).send(data);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
    },
    getAllTeachers: async function(req, res, next){
        try{    
            let query = db.collection('teachers');
            let teachers = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for(let doc of docs){
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        surname: doc.data().surname,
                        contactPhone: doc.data().contact_phone,
                        email: doc.data().email,
                        courses: doc.data().courses,
                        status: doc.data().status
                    }
                    teachers.push(selectedItem);
                }
            })
            return res.status(200).json(teachers);
            }catch(err){
                    console.error(err);
                    return res.status(500).json({ error: err.code});
                };
    },
    createTeacher: async function(req, res, next){
        try{    
            let teacherId = uuid.v4();
            await db.collection('teachers').doc(teacherId)
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
