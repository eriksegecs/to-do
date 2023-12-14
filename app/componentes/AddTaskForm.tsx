import React, { useState } from 'react';

interface AddTaskFormProps {
  onAddTask: (title: string) => void;
}

const AddTaskForm: React.FC<AddTaskFormProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAddTask(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        className="p-2 border border-gray-300 rounded mr-2 flex-grow"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Add Task
      </button>
    </form>
  );
};

export default AddTaskForm;