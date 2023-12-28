import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [data, getData] = useState([]);

  const handleGetApiData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        getData(response.data.products)
        console.log(response.data.products);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      })
  }
  useEffect(() => {
    handleGetApiData();
  }, [])

  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">title</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>

          {/* map through the data array and create a new row for each item */}
          {data.map((items) => (
            <tr key={items.id}>
              <th scope="row">{items.id}</th>
              <td>{items.title}</td>
              <td>{items.description}</td>
              <td>{items.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;
