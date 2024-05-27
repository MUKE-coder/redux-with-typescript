"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { IProduct, type Product } from "@/types/types";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import {
  addProductToCart,
  removeProductFromCart,
} from "@/store/slices/cartSlice";
import toast from "react-hot-toast";

export default function Product({ product }: { product: IProduct }) {
  const [existing, setExisting] = useState(false);
  const cartItems = useAppSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // Check if the product already exists in the cart
    const isExisting = cartItems.some((item) => item.id === product.id);
    setExisting(isExisting);
  }, [cartItems, product.id]);

  const dispatch = useAppDispatch();
  function handleAdd() {
    const newCartItem = {
      id: product.id,
      image: product.images[0],
      name: product.title,
      price: product.price,
    };
    dispatch(addProductToCart(newCartItem));
    localStorage.setItem("cart", JSON.stringify([...cartItems, newCartItem]));
    toast.success("Item added successfully");
  }
  const handleRemove = (productId: number) => {
    dispatch(removeProductFromCart(productId));
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems.filter((product) => product.id !== productId))
    );
  };
  return (
    <div className="">
      <Image
        className="h-36 w-36 object-cover rounded"
        src={product.images[0] ?? "/calcium.jpg"}
        width={225}
        height={225}
        alt="calcium"
      />
      <h3 className="font-semibold">{product.title}</h3>
      <p className="font-semibold text-sm py-2">${product.price}</p>

      {existing ? (
        <Button
          variant={"destructive"}
          onClick={() => handleRemove(product.id)}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          <span> Remove from</span>
        </Button>
      ) : (
        <Button onClick={handleAdd}>
          <ShoppingBag className="w-4 h-4 mr-2" />
          <span> Add to Cart</span>
        </Button>
      )}
    </div>
  );
}
