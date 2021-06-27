import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function CreateStudent() {
  const classes = useStyles();
   const [student , setStudent] = useState(
     { regNo: '', 
        studentName: '',
        Branch: '',
        Grade: ''   
    }
   );

   const createStudent = async () => { 

    console.log(student)

    try {
      const response = await axios.post('/createstudent' , student);

      console.log(response);
      if(response.status === 201){window.location.reload()}
    }
    catch(err) {
      console.log(err);
    }

    }
  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="filled-basic" label="Reg.No" variant="filled" value={student.regNo} onChange ={(event) =>{setStudent({...student, regNo: event.target.value})} } />
      
      <TextField id="filled-basic" label="Name" variant="filled" value={student.studentName} onChange ={(event) =>{setStudent({...student, studentName: event.target.value})} } />
      
      <TextField id="filled-basic" label="Branch" variant="filled" value={student.Branch}  onChange ={(event) =>{setStudent({...student, Branch: event.target.value})} }/>
      
      <TextField id="filled-basic" label="Grade" variant="filled" value={student.Grade} onChange ={(event) =>{setStudent({...student, Grade: event.target.value})} }/>
      <Button variant="contained" color="primary" onClick ={createStudent}>
        Create
      </Button>
  
    </form>
  );
}
