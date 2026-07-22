import {
  type RouteConfig,
  route,
  index,
  layout,
  prefix,
} from "@react-router/dev/routes";
import Cart from "./components/cart";
export default [
  index(  "routes/landing.tsx" ),
 
 

layout("components/layout.tsx", [
  route("dashboard", "routes/dashboard.tsx"),
  route("store", "routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("details/:id", "components/product-page.tsx"),
  route("cart", "components/cart.tsx"), // Fixed string path
]),

 
  
] satisfies RouteConfig;
