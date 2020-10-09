var uuid = require('uuid');
const { db } = require('../util/admin');

module.exports = {
    getStudent: async function(req, res, next) {
        try{    
            let student = await db.collection('students').doc(req.params.id).get();
            let data = student.data();
            return res.status(200).send(data);
            } catch (error) {
                console.log(error);
                return res.status(500).send(error);
            }
    },

    getAllStudents: async function(req, res, next){
        try{    
            let query = await db.collection('students');
            let stduents = [];
            await query.get().then(querySnapshot => {
                let docs = querySnapshot.docs;
                for(let doc of docs){
                    const selectedItem = {
                        id: doc.id,
                        name: doc.data().name,
                        surname: doc.data().surname,
                        contact_phone: doc.data().contact_phone,
                        email: doc.data().email,
                        courses: doc.data().courses
                    }
                    stduents.push(selectedItem);
                }
            })
            return res.status(200).json(stduents);
            }catch(err){
                    console.error(err);
                    return res.status(500).json({ error: err.code});
                };
    },

    createStudent: async function(req, res, next){
        try{    
            let studentId = uuid.v4();
            let query = await db.collection('students').doc(studentId)
                .create(req.body);
            return res.status(200).send({
                message: "success"
            }); 
        } catch (error){
                console.log(error);
                return res.status(500).send(error);
        }
    },
    
    updateStudent: async function(req, res, next){
        try{    
            let query = await db.collection('students').doc(req.params.id)
                .update({
                    ...req.body,
                });
            return res.status(200).send({
                message: "success"
            }); 
        } catch (error){
                console.log(error);
                return res.status(500).send(error);
        }
    },

    deleteStudent: async function(req, res, next){
        try{    
            let query = await db.collection('students').doc(req.params.id)
                .delete();
            return res.status(200).send({
                message: "success"
            }); 
        } catch (error){
                console.log(error);
                return res.status(500).send(error);
        }
    }
}
