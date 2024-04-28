import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Category from "./pages/Category/Category";
import About from "./pages/About/About";
import Details from "./pages/Category/components/Details";
import { useState } from "react";

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
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 3,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 4,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 5,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 6,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 7,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
  {
    id: 8,
    image: "/public/images/png/termiz.png",
    title: "Electric Kettle 1L",
    price: "99,000 so'm",
    stockStatus: "1+",
    description:
      "Lorem ipsum dolor sit amet consectetur. Id luctus pharetra suscipit dolor eu. A rhoncus sit consequat pretium in massa. Lobortis felis nisi scelerisque fringilla cursus. Tellus aliquam nascetur in accumsan massa quisque id sed.",
    stockText: "KPI +1",
  },
];

const buttons = [
  { text: "Elektron choynak ", icon: "/public/images/svg/choynak.svg", id: 1 },
  { text: "Aksessuarlar ", icon: "/public/images/svg/access.png", id: 2 },
  { text: "Oshxona buyumlari ", icon: "/public/images/svg/citchen.svg", id: 3 },
  { text: "Maishiy texnika ", icon: "/public/images/svg/tex.svg", id: 4 },
];

const App = () => {
  const [cart, setCart] = useState([]);
  return (
    <BrowserRouter>
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/category"
          element={
            <Category
              title="Featured Products"
              items={items}
              buttons={buttons}
            />
          }
        />
        <Route
          path="/category/:id"
          element={
            <Details
              cart={cart}
              setCart={setCart}
              buttons={buttons}
              products={items}
            />
          }
        />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
