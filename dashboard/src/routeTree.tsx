import { createRootRoute } from "@tanstack/react-router";
import { Layout } from "./pages/Layout/Layout.tsx";
import { createRoute } from "@tanstack/react-router";
import Home from "./pages/Home/Home.tsx";
import { TType } from "./pages/Home/Items/items.type.ts";
import { ALL } from "./pages/Home/Items/constant.ts";

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/$api",
  component: Home,
  validateSearch: (search: Record<string, unknown>): FilterSearch => {
    return {
      type: search.type as TType || ALL
    };
  },
});

export const routeTree = rootRoute.addChildren([indexRoute]);

type FilterSearch = {
  type: TType;
};
