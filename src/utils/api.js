export const fetchTasksFromAPI = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw error;
  }
};