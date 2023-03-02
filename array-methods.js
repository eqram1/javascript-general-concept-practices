const products = [
    { name: 'laptop', price: 32000, brand: 'lenova', color: 'silver' },
    { name: 'phone', price: 42000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 12000, brand: 'casio', color: 'yellow' },
    { name: 'sunglass', price: 2000, brand: 'ribon', color: 'black' },
    { name: 'camera', price: 22000, brand: 'canon', color: 'gray' }
];
//1.map
const brands = products.map(product => product.brand) //map will return array
console.log(brands);
const prices = products.map(product => product.price);
console.log(prices);
//2.forEach
products.forEach(product => console.log(product)); //forEach will not return array
products.forEach(product => console.log(product.color));
products.forEach(product => {

});

//3.filter
const cheap = products.filter(product => product.price <= 5000); // all items will be showed
console.log(cheap);
const specificName = products.filter(p => p.name.includes('n'));
console.log(specificName);

//4.find
const special = products.find(p => p.name.includes('n')); // only first item will be showed
console.log(special);
