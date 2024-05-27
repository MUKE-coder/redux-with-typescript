"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { decrement, increment } from "@/store/slices/counterSlice";
import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

export default function Counter() {
  // const [counter, setCounter] = useState(0);
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  // console.log(counter);
  return (
    <div className="max-w-3xl mx-auto flex flex-col justify-center items-center text-white">
      <h2 className="scroll-m-20 pb-6 text-4xl font-semibold tracking-tight first:mt-0">
        Redux Counter
      </h2>
      <div className="py-4 ">
        <div className="flex items-center space-x-6 ">
          <button onClick={handleDecrement}>
            <Minus className="w-8 h-8" />
          </button>
          <p className="scroll-m-20 text-6xl font-semibold tracking-tight first:mt-0">
            {count}
          </p>
          <button onClick={handleIncrement}>
            <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>
    </div>
  );
}
