import { create } from "zustand";
import { TAppState } from "../utils/types";

//Был выбор между zustand/redux, context, либо с использованием хука useState (сделать родительский компонент, создать там useState formData/setFormData и step/setStep, рендерить компоненты взависимости от шага и передавать туда пропсом formData).
//Не использовал context по ряду причин (ререндер компонентов, разделение логики управления состоянием от компонентов, менее удобны в использовании чем стейт менеджеры, тяжелее переносят масштабирование).
//Остановил свой выбор на zustand т.к он более подходит для мелких проектов чем redux (простота использования, легковесность, прямая работа с состояниями).

const useStore = create<TAppState>((set) => ({
  formData: {
    phoneNumber: "",
    name: "",
    surname: "",
    gender: "",
    address: "",
    company: "",
    amount: 200,
    term: 10,
  },
  categoryList: [],
  setFormData: (data) => {
    set((state) => ({
      formData: { ...state.formData, ...data },
    }));
  },
  setCategoryList: (categories) => {
    set(() => ({
      categoryList: categories,
    }));
  },
}));

export default useStore;
