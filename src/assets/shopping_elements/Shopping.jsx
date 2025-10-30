import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Filtering from './Filtering';
import Sorting from './Sorting';

function Shopping({ selectedcategory }) {
  const [product, setProduct] = useState([]);
  const [sorting, setSorting] = useState('');

  useEffect(() => {
    const axiosData = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProduct(res.data);
        // console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    axiosData();
  }, []);

  const filteringFunction =
    selectedcategory === 'all'
      ? product
      : product.filter((item) => item.category === selectedcategory);

  const sortingFunction = [...filteringFunction].sort((a, b) => {
    if (sorting === 'lowhigh') return a.price - b.price;
    if (sorting === 'highlow') return b.price - a.price;
    return 0;
  });

  return (
    <div>
      <Sorting setSorting={setSorting} />
      <div className="shoppingStyle">
        {sortingFunction.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.title} width={100} height={120} />
            <h3>{item.title}</h3>
            <h5>${item.price}</h5>
            <h6>
              {item.rating.rate} ({item.rating.count})
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shopping;
