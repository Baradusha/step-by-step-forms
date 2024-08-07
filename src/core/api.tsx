import axios from "axios";
import { handleApiError } from "../utils/handlers";

export const getProductCategories = async () => {
  try {
    const response = await axios.get(
      "https://dummyjson.com/products/category-list"
    );
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};

export const addNewProduct = async (title: string) => {
  try {
    const response = await axios.post("https://dummyjson.com/products/add", {
      title,
    });
    return response.data;
  } catch (error) {
    handleApiError(error);
  }
};
