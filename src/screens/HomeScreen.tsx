import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
} from 'react-native';
import TaskItem from '../components/TaskItem';
import { Task } from '../types/Task';
import { fetchTasks, addTask, deleteTask } from '../services/api';

const HomeScreen: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        Alert.alert('Error', (error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const handleAddTask = async () => {
    if (!newTaskTitle.trim()) return;

    // Optimistic update
    const tempTask: Task = {
      id: Date.now(), // temporary unique id
      title: newTaskTitle,
      completed: false,
    };
    setTasks(prevTasks => [tempTask, ...prevTasks]);
    setNewTaskTitle('');

    try {
      const addedTask = await addTask(newTaskTitle);
      // Replace the temporary task with the one from API
      setTasks(prevTasks =>
        prevTasks.map(task => (task.id === tempTask.id ? addedTask : task))
      );
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
      // Rollback: remove the temporary task
      setTasks(prevTasks => prevTasks.filter(task => task.id !== tempTask.id));
    }
  };

  const handleToggleTask = (id: number) => {
    // toggle the completed state locally
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
    // Note: Since JSONPlaceholder is a mock API, no endpoint for updating tasks is provided.
  };

  const handleDeleteTask = async (id: number) => {
    // Optimistic update: remove the task immediately
    const previousTasks = tasks;
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));

    try {
      await deleteTask(id);
    } catch (error) {
      Alert.alert('Error', (error as Error).message);
      // Rollback deletion on error
      setTasks(previousTasks);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading tasks...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.addTaskContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={newTaskTitle}
          onChangeText={setNewTaskTitle}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
          <Text style={styles.addButtonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem
            task={item}
            onToggle={handleToggleTask}
            onDelete={handleDeleteTask}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingText: {
    marginTop: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  addTaskContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
