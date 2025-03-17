import { useSuspenseQuery } from "@tanstack/react-query";
import { TItem } from "./items.type.ts";

export const useFetchItems = (api: string) => {
  const url = api === "local"
    ? "http://localhost:8000/api/items/"
    : "https://my-json-server.typicode.com/akramsaouri/ad-performance/ads";

  return useSuspenseQuery<TItem[]>({
    queryKey: ["items", api],

    queryFn: async () => {
      const data = await fetch(url);
      const parsed = await data.json();

      return parsed;
    },
  });
};
