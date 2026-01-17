const product = [
  { id: 1, name: "Laptop", price: 50000, inStock: true },
  { id: 2, name: "Phone", price: 20000, inStock: false },
  { id: 3, name: "Tablet", price: 30000, inStock: true }
]


const productinstock = (product) => {
    return product.filter(p => p.inStock === true);
}
const result = productinstock(product);


const updatedPrice = (product) => {
  const newProduct = product.map(p=>{
    if(p.inStock === true){
      return {
        ...p,
        price : p.price + p.price * (10/100)
      }
    }
    return p;
  })
  return newProduct;
}

const result2 = updatedPrice(product);


const total = (product) => {
  const prodTotal = product.reduce((sum,p)=>{
    if(p.inStock===true){
      return sum+p.price
    }
    return sum
  },0)
  return prodTotal
}
const result3 = total(product);

console.log(result);
console.log(result2);
console.log(result3);