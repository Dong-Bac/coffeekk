import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CategoriesComponent = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Gửi yêu cầu GET đến máy chủ để lấy dữ liệu các categories.
    axios.get('http://localhost:8080/api/v1/categories')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesComponent;
