import { Dispatch, SetStateAction } from "react";
import { TFormData, TError } from "./types";
import axios from "axios";

export const handleFormDataChange = (
  fieldName: keyof TFormData,
  value: string | number,
  setFormData: (data: Partial<TFormData>) => void,
  errors: TError,
  setErrors: Dispatch<SetStateAction<TError>>
) => {
  setFormData({ [fieldName]: value });
  setErrors({ ...errors, [fieldName]: "" });
};

export const handleApiError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.error("API error:", error.response?.data || error.message);
    throw new Error(error.response?.data.message || "An error occurred");
  } else {
    console.error("Unexpected error:", error);
    throw new Error("Unexpected error occurred");
  }
};
