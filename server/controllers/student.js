import Studentdata  from '../models/student.js';

export const getStudents = async (req,res) => {
    try {
        const allStudents = await Studentdata.find({});

         return res.status(200).json(allStudents);
        //return res.status(200).json({"message": "test"});
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const createStudent = async (req,res) => {
    const student = req.body;
    
   // console.log(student);

    const newStudent = new Studentdata(student);

    try {
        await newStudent.save();
        return res.status(201).json(newStudent);
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteStudent = async (req,res) => {
    
  const id = req.params.id;

    try {
      await Studentdata.findByIdAndDelete(id).exec();
      res.send('Succesfully Deleted!')
    } catch (error) {
      console.log(error);
    }
}

export const updateStudent = async (req,res) => {
    const id = req.params.id;

    
    try {
        await Studentdata.findByIdAndUpdate(id).exec();
        res.send('Succesfully Updated!')
      } catch (error) {
        console.log(error);
      }

}