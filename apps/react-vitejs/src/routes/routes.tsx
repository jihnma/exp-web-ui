import { lazy } from "react";
import { Link, Route, Switch } from "wouter";

import HomePage from "../app";

const FooPage = lazy(() => import("./foo-page.tsx"));
const BarPage = lazy(() => import("./bar-page.tsx"));
const BazPage = lazy(() => import("./baz-page.tsx"));

function Nav() {
  return ["foo", "bar", "baz"].map((x) => (
    <div key={x}>
      <Link href={`/${x}`}>{x}</Link>
    </div>
  ));
}

export default function Routes() {
  return (
    <>
      <Nav />

      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/foo" component={FooPage} />
        <Route path="/bar" component={BarPage} />

        <Route path="/baz">
          <BazPage />
          <Link href="/">home</Link>
        </Route>

        <Route>404</Route>
      </Switch>
    </>
  );
}
