import axios from 'axios';

const posts = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts?_limit=10',
});

export default posts;
