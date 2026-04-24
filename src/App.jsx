import { NavLink, Route, Routes } from "react-router";
import "./App.css";
import Carts from "./components/Carts";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import Admin from "./pages/Admin";
import ProductForm from "./pages/ProductForm";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  //----------------------state---------------------
  const [items, setItems] = useState([]);

  const categories = [
    { name: "Burger", id: 1 },
    { name: "Fries", id: 2 },
    { name: "Water", id: 3 },
  ];

  const [selectedCategoryId, setSelectedCategoryId] = useState(0);

  const [dataError, setDataError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  // const totalCount = items.reduce((acc, itm) => acc + itm.counter, 0);

  // ----------------------Effect---------------------
  useEffect(() => {
    const getData = async () => {
      try {
        const { data, status } = await axios.get(
          "http://localhost:3000/products",
        );
        if (status === 200) {
          setItems(data);
        } else {
          setDataError("something went wrong, please try agin later");
        }
      } catch (err) {
        console.error(err);
        setDataError("something went wrong, please try agin later");
      }
    };
    getData();
  }, []);

  // ----------------------Handler---------------------

  const handlerIncrement = (id) => {
    // clone
    let newItems = [...items];
    // console.log(newItems);
    //edit
    const index = newItems.findIndex((item) => item.id === id);
    // console.log(index);
    newItems[index] = { ...newItems[index] };
    newItems[index].counter++;
    //setstate
    setItems(newItems);
  };

  const handlerDecrement = (id) => {
    //clone
    let newIems = [...items];
    //edit
    const index = newIems.findIndex((itm) => itm.id === id);
    // console.log(index);
    newIems[index] = { ...newIems[index] };
    newIems[index].counter === 0
      ? newIems[index].counter
      : newIems[index].counter--;
    //setstate
    setItems(newIems);
  };

  const handlerReset = () => {
    //clone
    let newIems = [...items];
    //edit
    newIems = newIems.map((itm) => ({ ...itm, counter: 0 }));
    // console.log(newIems);
    setItems(newIems);
  };

  // const handlerDelete = (id) => {
  //   //clone
  //   //edit
  //   const newItems = items.filter((itm) => itm.id !== id);
  //   //usestate
  //   setItems(newItems);
  // };

  const toggleInCart = (id) => {
    const newItems = items.map((itm) =>
      itm.id === id
        ? {
            ...itm,
            isInCart: !itm.isInCart,
            counter: !itm.isInCart ? 1 : 0,
          }
        : itm,
    );
    setItems(newItems);
  };

  const handlerFilter = (id) => {
    setSelectedCategoryId(id);
    // console.log(id);
  };

  const handlePageChange = (page) => setCurrentPage(page);

  const handlerDeleteProductFromState = (id) => {
    const newItems = items.filter((itm) => itm.id !== id);
    console.log(newItems);

    setItems(newItems);
  };

  const handleRestoreData = (data) => setItems(data);

  const handleRefreshProducts = async (product) => setItems([...items, product]);

  const handleEditProduct = (product) => {
    const newItems = items.map((itm) =>
      itm.id === product.id ? product : itm,
    );
    setItems(newItems);
  };

  //-------------------------------------------
  let filteredItems =
    selectedCategoryId === 0
      ? items
      : items.filter((i) => i.categoryId === selectedCategoryId);

  // Pagination
  const pageSize = 4;
  const noOfPages = Math.ceil(filteredItems.length / pageSize);

  const start = (currentPage - 1) * pageSize;
  filteredItems = filteredItems.slice(start, start + pageSize);

  return (
    <>
      <Navbar
        noOfItemsInCart={
          items?.length ? items.reduce((acc, itm) => acc + itm.counter, 0) : 0
        }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              noOfPages={noOfPages}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              items={filteredItems}
              key={items.id}
              categories={categories}
              handlerFilter={handlerFilter}
              selectedCategoryId={selectedCategoryId}
              toggleInCart={toggleInCart}
              dataError={dataError}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={
            <Carts
              items={items}
              handlerIncrement={handlerIncrement}
              handlerDecrement={handlerDecrement}
              handlerDelete={toggleInCart}
              handlerReset={handlerReset}
            />
          }
        />
        <Route
          path="/admin"
          element={
            <Admin
              categories={categories}
              items={items}
              handlerDeleteProductFromState={handlerDeleteProductFromState}
              handleRestoreData={handleRestoreData}
            />
          }
        />
        <Route path="/product/:id" element={<ProductForm 
        items={items}
        categories={categories}
        handleRefreshProducts={handleRefreshProducts}
        handleEditProduct={handleEditProduct}
        />} />
      </Routes>
        <ToastContainer />
    </>
  );
}

export default App;
