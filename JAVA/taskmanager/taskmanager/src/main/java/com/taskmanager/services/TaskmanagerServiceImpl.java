package com.taskmanager.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.entities.Task;
import com.taskmanager.repository.ParentTaskRepository;
import com.taskmanager.ui.WorkOut;
import com.taskmanager.utility.TaskManagerUtility;

@Service
public class TaskmanagerServiceImpl implements TaskManagerService{

	@Autowired
	ParentTaskRepository parentTaskRepository;
	
	@Override
	public ParentTask saveTaskDetails(WorkOut workOut) {
		ParentTask parentTask=TaskManagerUtility.copyUIObjectToEntity(workOut);
		parentTaskRepository.save(parentTask);
		return parentTask;
	}

	@Override
	public List<WorkOut> getAllWorkOuts() {
		// TODO Auto-generated method stub
		List<WorkOut> workOuts=new ArrayList<>();
		List<ParentTask> taskEntities=parentTaskRepository.findAll();
		TaskManagerUtility.copyEntityToUiObject(workOuts, taskEntities);
		return workOuts;
	}




}
