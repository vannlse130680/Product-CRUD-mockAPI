
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import ProductActionPage from "./pages/ProductAction/ProductActionPage";
import ProductListPage from "./pages/ProductList/ProductListPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home></Home>,
  },
  {
    path: "/productList",
    exact: false,
    main: () => <ProductListPage></ProductListPage>,
  },
  {
    path: "/product/add",
    exact: false,
    main: ({history}) => <ProductActionPage history={history}></ProductActionPage>,
  },
  {
    path: "/product/:id/edit",
    exact: false,
    main: ({match , history}) => <ProductActionPage match={match} history={history}></ProductActionPage>,
  },
  {
    path: "",
    exact: false,
    main: () => <NotFound></NotFound>,
  },
];

export default routes;
