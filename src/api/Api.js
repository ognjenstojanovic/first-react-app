const delay = (amount) => {
    return new Promise((resolve, reject) => {
        setTimeout( _ => {
            resolve(null)
        }, amount)
    })
}

export default function getProducts() {
    return delay(2000)
        .then(_ => {
            return {
                data: products
            }
        })
}

const products = [
    {id: 1, name: 'Product 1', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 100 },
    {id: 2, name: 'Product 2', image: 'http://rs863.pbsrc.com/albums/ab194/Samuelrhys/tweeter_32x32.png~c200', price: 50 }
  ];