import React from 'react';
import { connect } from 'dva';
import {ProductList} from "components"

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    console.log(dispatch);
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={products} />
    </div>
  );
};

// export default Products;
export default connect(({ products }) => ({
  products,
}))(Products);
