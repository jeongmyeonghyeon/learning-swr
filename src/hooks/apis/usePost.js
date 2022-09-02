import useSWR from "swr";
import fetcher from "../../lib/fetcher";

function usePosts() {
  const { data, error } = useSWR("/posts", fetcher);

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePosts;
