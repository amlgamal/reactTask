import React from "react";

export default function Home(props) {
  const {
    categories,
    selectedCategoryId,
    handlerFilter,
    items,
    toggleInCart,
    noOfPages,
    currentPage,
    handlePageChange,
  } = props;

  const pages = (noOfPages) => {
    const res = [];
    for (let i = 1; i <= noOfPages; i++) {
      res.push(i);
    }
    return res;
  };
  return (
    <>
      <div className="grid grid-cols-4 ">
        <div>
          {[{ id: 0, name: "All" }, ...categories].map((cat, i) => (
            <div
              className={`cursor-pointer border p-2 border-t-0 ${i === 0 && "!border-t"} ${cat.id === selectedCategoryId && "bg-blue-500"}`}
              key={cat.id}
              onClick={() => handlerFilter(cat.id)}
            >
              {cat.name}
            </div>
          ))}
        </div>
          <div className="col-span-3">
        <table className="table ">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((itm) => (
              <tr key={itm.id}>
                <td> {itm.name} </td>
                <td>{itm.price}</td>
                <td onClick={() => toggleInCart(itm.id)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={itm.isInCart ? "currentColor" : "none"}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className={`size-6 cursor-pointer 
                    ${itm.isInCart ? "text-blue-600" : "text-gray-400"}
                  `}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {noOfPages > 1 && (
          <div className="flex justify-center mt-4">
            {pages(noOfPages).map((page) => (
              <button
                onClick={() => handlePageChange(page)}
                key={page}
                className={`join-item btn ${page === currentPage && "btn-active"}`}
              >
                {page}
              </button>
            ))}
          </div>
        )}
        </div>
      </div>
    </>
  );
}
