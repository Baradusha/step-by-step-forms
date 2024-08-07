import { ChangeEvent } from "react";

export type TFormData = {
  phoneNumber: string;
  name: string;
  surname: string;
  gender: string;
  address: string;
  company: string;
  amount: number;
  term: number;
};

export type TAppState = {
  formData: TFormData;
  categoryList: TOption[];
  setFormData: (data: Partial<TFormData>) => void;
  setCategoryList: (categories: TOption[]) => void;
};

export type TError = {
  [key: string]: string;
};

export type TInput = {
  label: string;
  placeholder: string;
  type: "text" | "number" | "tel" | "email";
  value: string | number;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export type TOption = {
  label: string;
  value: string;
};

export type TRadio = {
  groupTitle: string;
  radioItems: TOption[];
  checkedValue: string;
  required: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
};

export type TDropdown = {
  label: string;
  placeholder: string;
  defaultValue: string;
  dropdownItems: TOption[];
  onChange: (event: string | number) => void;
  error?: string;
};

export type TSlider = {
  title: string;
  step: number;
  min: number;
  max: number;
  value: number;
  required: boolean;
  type: "datesRange" | "moneyAmount";
  onChange: (value: any) => void;
  error?: string;
};
