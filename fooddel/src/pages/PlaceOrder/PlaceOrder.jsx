
import { useContext } from "react";
import "./PlaceOrder.css"
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext (StoreContext)

  return (
    <div className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" name="" placeholder="First name" id="" />
          <input type="text" name="" placeholder="last name" id="" />
        </div>
        <input type="email" name="" placeholder="Email address" id="" />
        <input type="text" name="" placeholder="Street" id="" />
        <div className="multi-fields">
          <input type="text" name="" placeholder="City" id="" />
          <input type="text" name="" placeholder="State" id="" />
        </div>
        <div className="multi-fields">
          <input type="text" name="" placeholder="Zip code" id="" />
          <input type="text" name="" placeholder="Country" id="" />
        </div>
        <input type="text" name="" placeholder="Phone" id="" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <p className="title">Cart totals</p>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount() + 2}</b>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrder