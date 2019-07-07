/* 
const jokeComponents = jokeData.map(joke => <MyJoke id={joke.id} joke={joke.joke}/>)
return (<div>{jokeComponents}</div>)


    let comporator = (a, b) => (a.price - b.price)
    const productComponents = productData
        .filter(product => product.price > 70)
        .sort(comporator)
        .map(product => <MyProduct key={product.id} name={product.name} price={product.price}/>)
    return <div>{productComponents}</div>


*/

const products = [
    {
        id: 1,
        price: 500,
        name: "Bana1"
    },
    {
        id: 2,
        price: 80,
        name: "Bana2"
    },
    {
        id: 3,
        price: 71,
        name: "Bana3"
    },
    {
        id: 4,
        price: 890,
        name: "Bana4"
    },
    {
        id: 5,
        price: 50,
        name: "Bana5"

    },
    {
        id: 6,
        price: 790,
        name: "Bana6"
    },
]

export default products