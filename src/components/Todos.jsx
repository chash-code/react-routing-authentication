import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  
  useEffect(() => {
    // Fetch only first 10 todos
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTodos(data.slice(0, 10));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
        setLoading(false);
      });
  }, []);
  
  const handleTodoClick = (todoId) => {
    // Navigate to todo details page
    navigate(`/todos/${todoId}`);
  };
  
  if (loading) {
    return (
      <div style={{
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '3rem',
        textAlign: 'center',
        marginTop: '2rem'
      }}>
        <h2>Loading todos...</h2>
      </div>
    );
  }
  
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '10px',
      padding: '2rem',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      marginTop: '2rem'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Todos (Protected Page)
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '1.5rem'
      }}>
        {todos.map(todo => (
          <div 
            key={todo.id} 
            onClick={() => handleTodoClick(todo.id)}
            style={{
              backgroundColor: '#f8f9fa',
              border: '2px solid #e9ecef',
              borderRadius: '8px',
              padding: '1.5rem',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = '#667eea';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = '#e9ecef';
            }}
          >
            <h3 style={{
              fontSize: '1.2rem',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              {todo.title}
            </h3>
            
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{
                fontSize: '0.9rem',
                color: '#7f8c8d'
              }}>
                Click to view details
              </span>
              
              <span style={{
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: 'bold',
                backgroundColor: todo.completed ? '#27ae60' : '#e74c3c',
                color: 'white'
              }}>
                {todo.completed ? 'Completed' : 'Not Completed'}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
