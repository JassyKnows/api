import React from 'react';
import Filtering from './Filtering';
import Shopping from './Shopping';

function Home({
  selectedcategory,
  setSelectedcategory,
  product,
  addToCart,
  removeFromCart,
}) {
  return (
    <div className="bodysite">
      <Filtering setSelectedcategory={setSelectedcategory} />
      <Shopping
        selectedcategory={selectedcategory}
        product={product}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default Home;
