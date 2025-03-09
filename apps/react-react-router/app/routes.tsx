import {
  type RouteConfig,
  route,
  index,
  layout,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("layout.tsx", [
    route("foo", "routes/foo-page.tsx"),
    route("bar", "routes/bar-page.tsx"),
    route("baz", "routes/baz-page.tsx"),
  ]),
] satisfies RouteConfig;
