package com.taskmanager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.services.TaskManagerService;
import com.taskmanager.ui.WorkOut;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class TaskManagerController {
	
	@Autowired
	TaskManagerService taskManagerService;
	
	@RequestMapping(value="/saveTaskDetails", method=RequestMethod.POST)
	public ResponseEntity<Void> saveTaskDetails(@RequestBody WorkOut workOut, UriComponentsBuilder builder) {
		ParentTask parentTask=taskManagerService.saveTaskDetails(workOut);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/?id={id}").buildAndExpand(parentTask.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}


}
