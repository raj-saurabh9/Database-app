import './App.css';
import Student from './components/showStudent/showStudent.js';
import Create from './components/createStudent/createStudent';
import { Container , AppBar , Typography , Grid , Grow } from '@material-ui/core';
import useStyles from './styles';
function App() {
  const classes = useStyles();
  return (
    <div className="App">
     <Container maxWidth="lg">
       <AppBar className={classes.appBar} position="static" color = "inherit">
         <Typography className={classes.heading} variant = "h2" align = "center">Students DATABASE</Typography>

         </AppBar>
         <div className="dabba">
         <Grow in>
           <Container>
           <Grid container justify ="space-between" align = "strect"></Grid>
             <Grid items xs ={12} sm={7}>
               <AppBar className={classes.appBar} position ="static" color = "inherit" align = "strect">

               <Student/>
               </AppBar>
             </Grid>
             <Grid items xs ={12} sm={4}>
             <AppBar className={classes.appBar} position ="static" color = "inherit">
             <Create/>
                  </AppBar>
             </Grid>
           </Container>
         </Grow>
         </div>
     </Container>
    </div>
  );
}

export default App;
