
import './App.css';
import ListTaskComponent from './components/ListTaskComponent';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateTaskComponent from './components/CreateTaskComponent';
import AddTask from './components/AddTask';
import UpdateTaskComponent from './components/UpdateTaskComponent';

function App() {
  return (
    <div><Router>
      <HeaderComponent />
        <div className="container">
        
         <Switch>
            <Route path ="/" exact component ={ListTaskComponent}></Route>
            <Route path ="/listtask" component ={ListTaskComponent}></Route>
            <Route path ="/addtask" component ={CreateTaskComponent}></Route>
            <Route path ="/updatepriority/taskid/{TaskId}/priority/{Priority}" component ={UpdateTaskComponent}></Route>
            
            <AddTask></AddTask>
            </Switch>
        </div>
       <FooterComponent />
    </Router>
    </div>

  );
}

export default App;
