import axios from "axios";

export const productsInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/users',
    headers: { Authorization: 'Bearer token' },
});

//productsInstance.get(/products)
//productsInstance.post(/users)
