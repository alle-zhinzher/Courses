import React from 'react';
import MyProduct from './MyProduct';

 import productData from './productData';


function App() {
    let comporator = (a, b) => (a.price - b.price)
    const productComponents = productData
        .filter(product => product.price > 70)
        .sort(comporator)
        .map(product => <MyProduct key={product.id} name={product.name} price={product.price}/>)
    return <div>{productComponents}</div>
}
export default App