import useFetch from "use-http";

export const useFetchData = (url: string) => {
    const { data, loading, error } = useFetch(url, [url]);
    return { data, loading, error };
}