import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category/Category";
import About from "./pages/About/About";
import Details from "./pages/Category/components/Details";

const items = [
  {
    id: 1,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    price: "99,000 so'm",
    stockStatus: "1+",
    stockText: "KPI +1",
  },
  {
    id: 2,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    stockText: "KPI +1",
  },
  {
    id: 3,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    stockText: "KPI +1",
  },
  {
    id: 4,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    stockText: "KPI +1",
  },
];

const buttons = [
  { text: "Elektron choynak ", icon: "/public/images/svg/choynak.svg", id: 1 },
  { text: "Aksessuarlar ", icon: "/public/images/svg/access.png", id: 2 },
  { text: "Oshxona buyumlari ", icon: "/public/images/svg/citchen.svg", id: 3 },
  { text: "Maishiy texnika ", icon: "/public/images/svg/tex.svg", id: 4 },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/category",
    element: (
      <>
        <Header />
        <Category title="Featured Products" items={items} buttons={buttons} />
        <Footer />
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        <Header />
        <About />
        <Footer />
      </>
    ),
  },

  {
    path: "/category/:id",
    element: (
      <>
        <Header />
        <Details product={items[0]} />
        <Footer />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
