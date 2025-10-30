import { useState } from 'react';
import './App.css';
import Filtering from './assets/shopping_elements/Filtering';
import Shopping from './assets/shopping_elements/shopping';

function App() {
  const [selectedcategory, setSelectedcategory] = useState('all');

  return (
    <div className="bodysite">
      <Filtering setSelectedcategory={setSelectedcategory} />
      <Shopping selectedcategory={selectedcategory} />
    </div>
  );
}

export default App;
