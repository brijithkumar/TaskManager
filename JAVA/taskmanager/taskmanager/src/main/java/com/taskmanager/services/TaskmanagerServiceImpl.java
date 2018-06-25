package com.taskmanager.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.repository.ParentTaskRepository;
import com.taskmanager.ui.WorkOut;
import com.taskmanager.utility.TaskManagerUtility;

@Service
public class TaskmanagerServiceImpl implements TaskManagerService{

	@Autowired
	ParentTaskRepository parentTaskRepository;
	
	@Override
	public void saveTaskDetails(WorkOut workOut) {
		ParentTask parentTask=TaskManagerUtility.copyUIObjectToEntity(workOut);
		parentTaskRepository.save(parentTask);
	}


}
