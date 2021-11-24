package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.impl.DefaultUserValidation;
import com.example.demo.impl.TaskDaoImpl;

@Controller
public class LoginController {
	
	@Autowired
	DefaultUserValidation duv;
	
	@Autowired
	TaskDaoImpl dao;
	
	@Autowired
	Task tk1;
	
	@RequestMapping("/login")
	public String showLogin() {
		return "login";
	}
	
	@RequestMapping("/success")
	public String validateUser(@RequestParam("username") String username,@RequestParam("password") String password, Model model) {
		
		model.addAttribute("username", username);
		model.addAttribute("password", password);
		boolean status = duv.validateUser(username, password);
		if(status == true)
		   return "success";
		else
			return "unsuccess";
		}
	
	@RequestMapping("/created")
	public String createTask(@RequestParam("taskid") int taskid,@RequestParam("ownerid") int ownerid, 
			                 @RequestParam("creatorid") int creatorid, @RequestParam("name") String name, 
			                 @RequestParam("desc") String desc, @RequestParam("status") String status, 
			                 @RequestParam("priority") String priority, @RequestParam("notes") String notes, 
			                 @RequestParam("isbookmarked") boolean isbookmarked, @RequestParam("createdon") String createdon, 
			                 @RequestParam("changedon") String changedon, Model model) {
		
		model.addAttribute("taskid", taskid);
		model.addAttribute("ownerid", ownerid);
		model.addAttribute("creatorid", creatorid);
		model.addAttribute("name", name);
		model.addAttribute("desc", desc);
		model.addAttribute("status", status);
		model.addAttribute("priority", priority);
		model.addAttribute("notes", notes);
		model.addAttribute("isbookmarked", isbookmarked);
		model.addAttribute("createdon", createdon);
		model.addAttribute("changedon", changedon);
		tk1.setTaskID(taskid);
		tk1.setOwnerID(ownerid);
		tk1.setCreatorID(creatorid);
		tk1.setName(name);
		tk1.setDescription(desc);
		tk1.setStatus(status);
		tk1.setPriority(priority);
		tk1.setNotes(notes);
		tk1.setIsBookmarked(isbookmarked);
		tk1.setCreatedOn(createdon);
		tk1.setStatusChangedOn(changedon);
		int row = dao.save(tk1);
		if(row == 1)
		   return "taskcreated";
		else
			return "tasknotcreated";
		}
	

}
