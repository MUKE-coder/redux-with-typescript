"use server";

import { IProduct, Product } from "@/types/types";
import axios from "axios";

export async function getAllProducts() {
  try {
    const res = await axios.get("https://dummyjson.com/products?limit=12");
    const products = res.data.products;
    return products as IProduct[];
  } catch (error) {
    console.log(error);
    return null;
  }
}
