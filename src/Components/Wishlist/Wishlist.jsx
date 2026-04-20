import React from "react";
import Sweater from "../../assets/sweater.png";

const Wishlist = ({ activePanel, handleClose, wishlist = [], addToCart, clearWishlist }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 w-100 border-2 border-zinc-300 py-7 transform transition-transform duration-300 
      ${activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="px-10">
        <h3 className="text-3xl font-bold text-zinc-800 text-center">
          Your Wishlist
        </h3>
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {wishlist.length === 0 ? (
          <p className="text-center text-zinc-500 mt-10">
            Your wishlist is empty 🛒
          </p>
        ) : (
          wishlist.map((product, index) => (
            <div
              key={product.id || index}
              className={`flex items-center gap-3 px-5 py-1 border-y-2 border-zinc-300 
              ${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
            >
              <div className="w-20 h-20">
                <img
                  src={product.image}
                  className="w-full h-full object-contain"
                  alt={product.name}
                />
              </div>

              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className="font-semibold text-zinc-800 text-lg">
                    {product.name}
                  </h4>
                  <p className="text-sm text-zinc-500">
                    {product.addDate}
                  </p>
                </div>

                <div className="flex justify-between">
                  <div>
                    {product.onSale && (
                      <span className="text-zinc-500 font-semibold text-lg line-through mr-3">
                        ${product?.oldPrice ? product.oldPrice.toFixed(2) : "0.00"}
                      </span>
                    )}

                    <span className="text-red-600 font-semibold text-lg">
                      ${product?.price ? product.price.toFixed(2) : "0.00"}
                    </span>
                  </div>

                  <button
                    className="bg-blue-600 text-sm px-5 py-1 rounded-full active:bg-blue-700 cursor-pointer"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="flex gap-x-2 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] active:bg-blue-700"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] active:bg-blue-700"
          onClick={clearWishlist}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
export default Wishlist;
