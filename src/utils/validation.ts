import { TError, TFormData } from "./types";

export const validatePersonalInfoForm = (formData: TFormData): TError => {
  const newErrors: TError = {};

  if (!formData.phoneNumber)
    newErrors.phoneNumber = "Номер телефона обязателен к заполнению";
  if (!formData.name) newErrors.name = "Имя обязательно к заполнению";
  if (!formData.surname) newErrors.surname = "Фамилия обязательна к заполнению";
  if (!formData.gender) newErrors.gender = "Выберите один из вариантов";
  return newErrors;
};

export const validateAddressWorkForm = (formData: TFormData): TError => {
  const newErrors: TError = {};

  if (!formData.address) newErrors.address = "Адрес обязателен к заполнению";
  if (!formData.company) newErrors.company = "Выберите один из вариантов";

  return newErrors;
};

export const validateLoanParametersForm = (formData: TFormData): TError => {
  const newErrors: TError = {};

  if (!formData.amount)
    newErrors.amount = "Сумма займа обязательна к заполнению";
  if (!formData.term) newErrors.term = "Срок займа обязателен к заполнению";
  return newErrors;
};
