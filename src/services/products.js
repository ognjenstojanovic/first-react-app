import find from 'lodash/find'


const delay = (amount) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(null)
        }, amount)
    })
}

 export const getProducts = () => {
     return delay(2000)
     .then(_ => {
         return products;
     })
}

export const getProductById = (id) => {
    return delay(2000)
    .then(() => {
        return find(products, product => product.id === id)
    })
}


const products = [
    {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100 },
    {id: 2, name: 'Product 2', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 50 }
  ];