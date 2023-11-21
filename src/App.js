import React, { useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);

  // Define an asynchronous function
  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
      );
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call the asynchronous function when the component mounts
  (async () => {
    await fetchData();
  })();

  return <div>{data && <h1>{data.title}</h1>}</div>;
};

export default MyComponent;
