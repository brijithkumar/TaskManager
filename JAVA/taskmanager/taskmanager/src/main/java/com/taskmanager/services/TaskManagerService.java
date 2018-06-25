package com.taskmanager.services;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.ui.WorkOut;

public interface TaskManagerService {

	ParentTask saveTaskDetails(WorkOut workOut);

}
