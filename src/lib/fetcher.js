import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const fetcher = (url) => {
  console.log("fetcher is run 1", url);
  return axios.get(url).then((res) => {
    console.log("fetcher is run 2", res.data.length);
    return res.data;
  });
};

export default fetcher;
