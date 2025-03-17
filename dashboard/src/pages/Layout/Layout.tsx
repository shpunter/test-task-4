import { Link, Outlet } from "@tanstack/react-router";
import css from "./layout.module.css";
import { useSearch } from "@tanstack/react-router";

export function Layout() {
  const search = useSearch({ from: "/$api" });

  return (
    <div className={css.layout}>
      <nav className={css.navigation}>
        <Link
          to="/$api"
          params={{ api: "local" }}
          activeProps={{ className: css.active }}
          className={css.link}
          search={search}
        >
          Local API (hono)
        </Link>
        <Link
          to="/$api"
          params={{ api: "remote" }}
          activeProps={{ className: css.active }}
          className={css.link}
          search={search}
        >
          Remote API
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}
