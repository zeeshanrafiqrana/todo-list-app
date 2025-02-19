import { Task } from '../types/Task';

const BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTasks = async (limit = 5): Promise<Task[]> => {
  const response = await fetch(`${BASE_URL}?_limit=${limit}`);
  if (!response.ok) {
    throw new Error('Error fetching tasks');
  }
  return response.json();
};

export const addTask = async (title: string): Promise<Task> => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, completed: false }),
  });
  if (!response.ok) {
    throw new Error('Error adding task');
  }
  return response.json();
};

export const deleteTask = async (id: number): Promise<void> => {
  const response = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Error deleting task');
  }
};
