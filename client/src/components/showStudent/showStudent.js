
import axios from 'axios';
import React ,{ useState , useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton  from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//import student from '../../../../server/models/student';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ShowStudent() {
  const classes =useStyles();
  
  const [studentsList, setStudentList] = useState([]);
 const deleteStudent = (id) =>{
   axios.delete(`http://localhost:5000/getstudents/${id}`).then( ()=>{
     window.location.reload(false);
   })
 }
/*
 const updateStudent = (id) =>{
  axios.put(`http://localhost:5000/getstudents/${id}`).then( ()=>{
    window.location.reload(false);
  })
}*/
  useEffect(() => {
    axios.get('http://localhost:5000/getstudents')
    .then((allStudents) => {
      console.log(allStudents);
      setStudentList(allStudents.data);
  })

  },[])

  return (
    <> <h2>All Students</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">REG NO.</TableCell> 
            <TableCell align="right">BRANCH</TableCell>
            <TableCell align="right">GRADE</TableCell>
            <TableCell align="right">ACTION</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {studentsList?.map((student , key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {student.studentName}
              </TableCell>
    
              <TableCell align="right">{student.regNo}</TableCell>
              <TableCell align="right">{student.Branch}</TableCell>
              <TableCell align="right">{student.Grade}</TableCell>
              <TableCell align="right"><IconButton aria-label="delete" className={classes.margin} onClick={()=> deleteStudent(student._id)}>
        <DeleteIcon fontSize = "small"/>
      </IconButton> 
      </TableCell>
    
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}


  