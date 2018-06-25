package com.taskmanager.services;

import java.util.List;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.ui.WorkOut;

public interface TaskManagerService {

	ParentTask saveTaskDetails(WorkOut workOut);

	List<WorkOut> getAllWorkOuts();

}
