import axios from "axios";
import React from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";

export default function Admin(props) {
  const {
    items,
    categories,
    handlerDeleteProductFromState,
    handleRestoreData,
  } = props;

  const handleDel = async (item) => {
    const itemsBeforeDel = [...items];

    try {
      handlerDeleteProductFromState(item.id);

      const { data } = await axios.delete(
        `http://localhost:3000/products/${item.id}`,
      );
      toast.success("Product Deleted Successfully");
    } catch (err) {
      handleRestoreData(itemsBeforeDel);
      toast.error("something went wrong , please try again later");
    }
  };

  return (
    <div>
      <Link
        to="/product/new"
        className="btn btn-circle btn-primary fixed bottom-4 right-4"
      >
        +
      </Link>
      <table className="table w-3/4 mx-auto">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((itm) => (
            <tr key={itm.id}>
              <td>{itm.name}</td>
              <td>{itm.price}</td>
              <td>
                {categories.find((cat) => cat.id === itm.categoryId).name}
              </td>
              <td>
                <Link to={`/product/${itm.id}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                    />
                  </svg>
                </Link>
              </td>
              <td>
                <button
                  className="cursor-pointer"
                  onClick={() => handleDel(itm)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
