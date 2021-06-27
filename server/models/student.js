import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    regNo: Number,
    studentName: String,
   
    Grade: String,
    Branch :
    {
        type: String,
        default: 'cse'
    },
 
});

const student = mongoose.model('student' , studentSchema)
export default student;