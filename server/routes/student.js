import  express  from "express";
import {getStudents , createStudent , deleteStudent} from "../controllers/student.js"
import student  from '../models/student.js'
const router = express.Router();


router.get("/", (req, res) => {
    return res.send("You've reached the Server side")
})

router.get('/getstudents' , getStudents);

router.post('/createstudent' , createStudent);
/*router.delete("/getstudents/:id" , (req, res) => {
        
    const {id} = req.params;

    users = users.filter((user) => user.id!=id);
   res.send(`user with ${id} got sworded`);
});*/
router.delete('/getstudents/:id' , deleteStudent);

export default router;