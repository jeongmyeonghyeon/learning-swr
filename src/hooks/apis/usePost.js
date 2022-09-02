import useSWR from "swr";
import fetcher from "../../lib/fetcher";

function usePosts(refreshInterval = false) {
  const { data, error } = useSWR("/posts", fetcher, {
    refreshInterval,
  });

  return {
    posts: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default usePosts;
