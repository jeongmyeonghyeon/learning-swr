import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default fetcher;
