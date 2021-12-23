import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class ListTaskComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            tasks :[]
        }
        this.addtask =this.addtask.bind(this);
       // this.editTask = this.editTask.bind(this);
    }
     // editEmployee(id){

     // }

   componentDidMount(){
       TaskService.getTaskService().then((res) =>
       {
           this.setState ({tasks:res.data});
       });
   }

   addtask(){
       this.props.history.push('/addtask');
   }
   
    render() {
        return (
            <div>
                <h2 className="text-center">TaskList</h2>
                <div className= "row">
                    <button className ="btn btn-primary" onClick ={this.addtask}>Create task</button>
                
                   
                </div>
                <div className ="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Task_Id</th>
                                <th>TaskName</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tasks.map(
                                    task =>
                                    <tr key = {task.Id}>
                                     <td>{task.task_Id}</td>   
                                     <td>{task.name}</td>
                                     <td>{task.priority}</td>
                                     <td>{task.status}</td>
                                     <td>
                                         <button onClick ={ () => this.editTask(task.Id)} className="btn btn-info">Update</button>
                                     </td>

                            </tr>                               
                             )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListTaskComponent;