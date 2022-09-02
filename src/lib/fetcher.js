import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetcher = (url) =>
  axios.get(url).then((res) => {
    console.log("fetcher is run");
    return res.data;
  });

export default fetcher;
