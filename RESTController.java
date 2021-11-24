package com.example.demo;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.impl.TaskDaoImpl;

@RestController
public class RESTController {
	
	@Autowired
	Task tk;
	
	@Autowired
	TaskDaoImpl dao;

	@RequestMapping(value = "/tasks", method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> getTask() {
		return dao.getAllTasks();
	}
	
	@RequestMapping(value="/taskid/{taskid}/priority/{priority}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printTask(@PathVariable("taskid") int taskid, @PathVariable("priority") String priority, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("priority", priority);
		int row = dao.setpriority(taskid, priority);
		return dao.getAllTasks();
	}
	
	@PostMapping(value= "/addtask", consumes = "application/json", produces = "application/json")
	public Task addTask(@RequestBody Task task) throws Exception
	{
	   dao.addTask(task);
	   return task;

	}
	
	@RequestMapping(value="/taskid/{taskid}/notes/{notes}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printNotes(@PathVariable("taskid") int taskid, @PathVariable("notes") String notes, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("notes", notes);
		int row = dao.setnotes(taskid, notes);
		return dao.getAllTasks();
	}
	
	@RequestMapping(value="/taskid/{taskid}/isBookmarked/{isBookmarked}",method = RequestMethod.GET,produces = {"application/json","application/xml"})
	public List<Task> printBookmarked(@PathVariable("taskid") int taskid, @PathVariable("isBookmarked") Boolean isBookmarked, Model model) {
		model.addAttribute("taskid", taskid);
		model.addAttribute("notes", isBookmarked);
		int row = dao.bookmark(taskid, isBookmarked);
		return dao.getAllTasks();
	}
	

}
