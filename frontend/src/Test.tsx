import React, { useState, useEffect } from 'react';

const TestComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Hello from useEffect');
  }, []);

  return <div onClick={() => setCount(count + 1)}>Click me! {count}</div>;
};

export default TestComponent;
