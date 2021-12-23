import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class CreateTaskComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            Task_Id:'',
           // Owner_Id:'',
           // Creator_Id:'',
            Name:'',
            //Description :'',
            Status:'',
            Priority:'',
            //Notes:'',
            //isBookMarked:'',
            //Created_On:'',
            //Status_Changed_On:''

        }
        this.changeTaskIdHandler = this.changeTaskIdHandler.bind(this);
        this.changeTaskNameHandler= this.changeTaskNameHandler.bind(this);
        this.changePriorityHandler =this.changePriorityHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
         this.saveTask = this.saveTask.bind(this);
    }

    saveTask =(e)=> {
        e.preventDefault();
        let task ={Task_Id :this.state.Task_Id , TaskName: this.state.TaskName , Priority: this.state.Priority, Status: this.state.Status};
        console.log('task =>'  + JSON.stringify(task));

        TaskService.createTask(task).then(res =>{
    this.props.history.push('/task');
        });
    }
  changeTaskIdHandler =(event) =>{
      this.setState({Task_Id: event.target.value});
  }
  
  changeTaskNameHandler =(event) =>{
    this.setState({TaskName: event.target.value});
}

changePriorityHandler =(event) =>{
    this.setState({Priority: event.target.value});
}

changeStatusHandler =(event) =>{
    this.setState({Status: event.target.value});
}

  cancel(){
      this.props.history.push('/listtask');
  }


    render() {
        return (
            <div>
               <div className ="container">
                   <div className ="row">
                  
                       <div className="card col-md-6 offset-md-3 offset-md-3"></div>
                       <h3  className ="text-center"></h3>
                       <div className="card-body">
                           <form>
                           
                               <div className = "/form-group">
                                   <label>Task_Id</label>
                                   <input placeholder="Task_Id" name="Task_Id" className="form-control"
                                   value={this.state.Task_Id} onChange={this.changeTaskIdHandler} />
                               </div>

                               <div className = "/form-group">
                                   <label>Name</label>
                                   <input placeholder="TaskName" name="TaskName" className="form-control"
                                   value={this.state.TaskName} onChange={this.changeTaskNameHandler} />
                               </div>

                               <div className = "/form-group">
                                   <label>Priority</label>
                                   <input placeholder="Priority" name="Priority" className="form-control"
                                   value={this.state.Priority} onChange={this.changePriorityHandler} />
                               </div>

                               <div className = "/form-group">
                                   <label>Status</label>
                                   <input placeholder="Status" name="Status" className="form-control"
                                   value={this.state.Status} onChange={this.changeStatusHandler} />
                               </div>
                           <br></br>
                               <button className="btn btn-success" onClick={this.saveTask} >Save</button>
                             <button className="btn btn-danger" onClick={this.cancel.bind(this)} style ={{marginLeft : "10px"}}>Cancel</button>


                           </form>
                       </div>

                       </div>
                   </div>
            </div>
        );
    }
}

export default CreateTaskComponent;