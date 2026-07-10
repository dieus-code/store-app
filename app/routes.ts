import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  index(  "routes/landing.tsx" ),
 
 

  layout("components/layout.tsx", [
    route("dashboard", "routes/dashboard.tsx"),
    route("home", "routes/home.tsx"),
    route("product", "routes/product-page.tsx"),
  ]),
  

 
  
] satisfies RouteConfig;
