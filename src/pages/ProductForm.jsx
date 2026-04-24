import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";

export default function ProductForm(props) {
  const { categories, handleRefreshProducts, handleEditProduct } = props;

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    categoryId: 1,
  });

  const { id } = useParams();

  const mode = id === "new" ? "Add" : "Edit";

  const navigate = useNavigate();
  const product = props.items.find((itm) => itm.id == id);

  useEffect(() => {
  if (mode === "Edit" && product) {
    setFormData({
      name: product.name,
      price: product.price,
      categoryId: product.categoryId,
    });
  }
}, [product, mode]);
  //------------------ handler--------------------

  const handleInputChange = (e) => {
    const newFormData = { ...formData, [e.target.name]: e.target.value };
    setFormData(newFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mode === "Add") {
      handleAdd();
    } else {
      handleEdit();
    }
  };

  const handleAdd = async () => {
    const { data } = await axios.post("http://localhost:3000/products", {
      ...formData,
      categoryId: +formData.categoryId,
      counter: 0,
      isInCart: false,
    });
    console.log(data);
    navigate("/admin") 
    handleRefreshProducts(data)
    toast.success("product added successfully");
  };
  const handleEdit = async () => {
    const { data } = await axios.put(`http://localhost:3000/products/${id}`, {
      ...formData,
      categoryId: +formData.categoryId,
      counter: 0,
      isInCart: false,
    });
    handleEditProduct(data)
    navigate("/admin") 
    toast.success("product edited successfully");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2 "
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
          className="input"
        />
        <label htmlFor="price">Price</label>
        <input
          type="text"
          name="price"
          id="price"
          value={formData.price}
          onChange={handleInputChange}
          className="input "
        />
        <label htmlFor="categoryId">Category</label>
        <select
          name="categoryId"
          value={formData.categoryId}
          onChange={handleInputChange}
          id="categoryId"
          className="select "
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}{" "}
            </option>
          ))}
        </select>
        <button className="btn btn-primary ">Submit</button>
      </form>
    </>
  );
}
