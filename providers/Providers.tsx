"use client";

import store from "@/store/store";
import React, { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </Provider>
  );
}
