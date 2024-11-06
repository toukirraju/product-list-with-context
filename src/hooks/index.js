
import { useContext } from "react";
import useGetProducts from "./useGetProducts";
import { ActionContext, CategoryContext, ProductContext } from "../context";
import useGetCategory from "./useGetCategory";

const useProduct = () => useContext(ProductContext)

const useCategory = () => useContext(CategoryContext)

const useAction = () => useContext(ActionContext)




export { useGetProducts, useProduct, useGetCategory, useCategory, useAction };