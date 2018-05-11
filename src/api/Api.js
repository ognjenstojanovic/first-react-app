const delay = (amount) => {
    return new Promise((resolve, reject) => {
        setTimeout( _ => {
            resolve(null)
        }, amount)
    })
}
 function getProducts(){
     return products;
}

function getProductById(id){
    return products.find(x => x.id = id);
}

export { getProductById, getProducts };

const products = [
    {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100 },
    {id: 2, name: 'Product 2', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 50 }
  ];