function getFirstLast(array){
    if(array.length === 0){
        return null;
    }    return {
        first: array[0],
        last: array[array.length - 1]
    };
}
// console.log(getFirstLast([1, 2, 3, 4]));

function swapElements(arr){
    let a = 1, b = 2, c = 3, d = 4, e =5;
    [arr[b], arr[d]] = [arr[d], arr[b]];
    return arr;
}
// console.log(swapElements([1, 2, 3, 4, 5]));

const user = {
  id: 1,
  personalInfo: {
    name: "javascript",
    contact: {
      email: "javascript@email.com",
      phone: "123-456-7890",
    },
  },
};

function getUserInfo(user){
    const { personalInfo: { name, contact: { email } } } = user;
    return { name, email };
}

// console.log(getUserInfo(user));

function createProduct({ name, price, category = "general", inStock = true }) {
    return { name, price, category, inStock };
}
const product = createProduct({ name: "Laptop", price: 999.99 });

// console.log(product);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// delay(2000).then(() => console.log("2 seconds passed"));

function fetchMultipleData(urls){
    return Promise.all(urls.map(url => fetch(url).then(res => res.json())));
}
// fetchMultipleData(["https://jsonplaceholder.typicode.com/users/1", "https://jsonplaceholder.typicode.com/users/2"]).then((users) =>
//   console.log(users)
// );

async function processOrder(orderId) {
  try {
    const orderResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${orderId}`);
    const orderData = await orderResponse.json(); } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }}
  console.log(processOrder(1));

async function safeApiCall(apiFunc, ...args) {
    try {
        const result = await apiFunc(...args);
        return result;
    } catch (error) {
        console.error("API call failed:", error);
        return null;
    }}

// safeApiCall(fetch, "https://jsonplaceholder.typicode.com/users/").then(data => console.log(data));