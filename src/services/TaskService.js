import axios from 'axios';

const TASK_API_BASE_URL ="http://localhost:8080/listtask";

class TaskService {

   getTaskService(){
       return axios.get(TASK_API_BASE_URL);
   }
     createTask(task){
          return axios.post(TASK_API_BASE_URL, task);
     }
}
export default new TaskService()