import React from "react";

const OrderSummary = ({ cart, subtotal , shippingFee , orderTotal }) => {
  return (
    <section className="flex justify-center items-center bg-black/95 fixed inset-0 z-40">
      <div className="bg-zinc-100 p-8 w-150">
        <h2 className="text-3xl text-zinc-800 font-bold mb-5 text-center">
          Order Summary
        </h2>

        <div>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex between item-center border-b-2 border-zinc-300">
                <span className="text-zinc-800 py-2">
                  {item.name}(x{item.quantity})
                </span>
                <span className="text-zinc-800 py-2">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>



          <div className="flex justify-between pt-2">
            <span className="text-zinc-800">Subtotal</span>
            <span className="text-zinc-800">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 ">
            <span className="text-zinc-800">Shipping & Handlings</span>
            <span className="text-zinc-800">${shippingFee}</span>
          </div>
          <div className="flex justify-between pt-2 border-t-2 border-zinc-300">
            <span className="text-xl text-blue-800 font-bold">Order Total</span>
            <span className="text-xl text-blue-800 font-bold">
              ${orderTotal.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="flex mt-10 gap-x-3">
            <button className="bg-zinc-800 flex-1 py-3 active:bg-zinc-900 text-white rounded-lg">Close</button>
            <button className="bg-blue-800 flex-1 py-3 active:bg-blue-900 text-white rounded-lg">Place Order</button>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
