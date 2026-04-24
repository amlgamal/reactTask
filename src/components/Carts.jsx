import CartItem from "./CartItem";

export default function Carts(props) {
  return (
    <div className=" ">
      {props.items.filter(item => item.isInCart).map((items) => (
        <CartItem className=""
          key={items.id} //identify which items have changed
          id={items.id}
          name={items.name}
          counter={items.counter}
          handlerIncrement={props.handlerIncrement}
          handlerDecrement={props.handlerDecrement}
          handlerDelete={props.handlerDelete}
        ></CartItem>
      ))}
      <div className=" flex justify-center mt-4">
        <button className="btn" onClick={props.handlerReset}>
        Reset
      </button>
      </div>
    </div>
  );
}

