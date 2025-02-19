import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Task } from '../types/Task';
import CheckBox from '@react-native-community/checkbox';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <View style={styles.container}>
      <CheckBox
        value={task.completed}
        onValueChange={() => onToggle(task.id)}
      />
      <Text style={[styles.title, task.completed && styles.completed]}>
        {task.title}
      </Text>
      <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 16,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 5,
    borderRadius: 5,
  },
  deleteText: {
    color: '#fff',
  },
});

export default TaskItem;
