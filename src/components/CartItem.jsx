import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, setQuantityAsync } from "../redux/app.actions";

export default function CartItem() {
  const carts = useSelector((state) => state.app.carts);
  const dispatch = useDispatch();

  console.log('carts: ', carts)


  const deleteCartItem = (id) => {
    dispatch(removeItem(id));
  };

  const handleChangeQuality = (id, type) => {
    dispatch(setQuantityAsync(id, type));
  }

  return (
    <>
      {carts.map((cart) => (
        <React.Fragment key={cart.id}>
          <div className="cardItem">
            <div className="cardItem_left">
              <div
                className="cardItem_image"
                style={{ backgroundColor: cart.color }}
              >
                <img alt="" src={cart.image} />
              </div>
            </div>
            <div className="cardItem_right">
              <div className="cardItem_name">{cart.name}</div>
              <div className="cardItem_price">${cart.price}</div>
              <div className="cartItem_actions">
                <div className="cartItem_count">
                  <div 
                    className="cartItem_button"
                    onClick={() => handleChangeQuality(cart.id, 'decrement')}
                  >
                    -
                  </div>
                  <div className="cartItem_number">{cart.quantity}</div>
                  <div 
                    className="cartItem_button"
                    onClick={() => handleChangeQuality(cart.id, 'increment')}
                  >
                    +
                  </div>
                </div>
                <div
                  className="carItem_remove"
                  onClick={() => {
                    deleteCartItem(cart.id);
                  }}
                >
                  <img
                    alt=""
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC"
                  />
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
}
