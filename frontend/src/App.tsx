import React from 'react';

function App() {
  const handleClick = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/health`);
      const data = await res.text();
      alert(data);
    } catch (error) {
      alert('Erreur lors de la requête');
      console.error(error);
    }
  };
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">EcoRide Frontend</h1>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded"
      >
        Tester l’API
      </button>
    </div>
  );
}

export default App;
