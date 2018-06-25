package com.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.taskmanager.services.TaskManagerService;
import com.taskmanager.ui.WorkOut;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TaskManagerController {
	
	@Autowired
	TaskManagerService taskManagerService;
	
	@RequestMapping(value="/saveTaskDetails", method=RequestMethod.POST)
	public void saveTaskDetails(@RequestBody WorkOut workOut) {
		taskManagerService.saveTaskDetails(workOut);
	}


}
