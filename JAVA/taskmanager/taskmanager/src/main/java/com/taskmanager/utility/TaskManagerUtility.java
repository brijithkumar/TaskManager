package com.taskmanager.utility;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.taskmanager.entities.ParentTask;
import com.taskmanager.entities.Task;
import com.taskmanager.ui.WorkOut;

public class TaskManagerUtility {
	
public static Date stringtoDateConverter(String dateAsString) {
	DateFormat sourceFormat = new SimpleDateFormat("dd-MM-yyyy");
	Date date = null;
	try {
		date = sourceFormat.parse(dateAsString);
	} catch (ParseException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
	return date;
}

public static ParentTask copyUIObjectToEntity(WorkOut workOut) {
	ParentTask parentTask=new ParentTask();
	parentTask.setName(workOut.getParentTask());
	Task task=new Task();
	task.setName(workOut.getTask());
	task.setPriority(workOut.getPriority());
	task.setStartDate(stringtoDateConverter(workOut.getStartDate()));
	task.setEndDate(stringtoDateConverter(workOut.getEndDate()));
	task.setParentTask(parentTask);
	parentTask.getTasks().add(task);
	return parentTask;
	
}

}
