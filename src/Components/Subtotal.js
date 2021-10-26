import React from 'react';
import CurrencyFormat from 'react-currency-format';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let basketSubtotal = 0;
  let basketTotal = 0;
  basket.forEach((item) => {
    basketSubtotal = basketSubtotal + item.price;
    basketTotal = Math.round(basketSubtotal);
    console.log(basketTotal);
  });
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>$ {basketTotal}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
