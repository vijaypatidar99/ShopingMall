import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [data, PostData] = useState([]);

  const handlePostApiData = () => {
    axios
    .post('https://dummyjson.com/products/add', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'BMW Pencil',
      })
    })
    .then(console.log);
  }
  
  useEffect(() => {
    handlePostApiData();
  }, [])

  return (
    <div>
     
    </div>
  );
}

export default ProductForm;
