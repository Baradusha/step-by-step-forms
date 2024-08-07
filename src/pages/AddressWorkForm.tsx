import { useNavigate } from "react-router-dom";
import { Button } from "../components/UI/Button";
import useStore from "../store/store";
import { useEffect, useState } from "react";
import Input from "../components/UI/Input";
import { TError } from "../utils/types";
import { handleFormDataChange } from "../utils/handlers";
import Dropdown from "../components/UI/Dropdown";
import { getProductCategories } from "../core/api";
import { formatLabel } from "../utils/helpers";
import { validateAddressWorkForm } from "../utils/validation";
import { ButtonsWrapper, FieldsWrapper } from "../styles/Wrappers";

const AddressWorkForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData, categoryList, setCategoryList } = useStore();

  const [errors, setErrors] = useState<TError>({});

  useEffect(() => {
    if (!categoryList.length) {
      getProductCategories().then((response) => {
        const formattedCategories = response.map((category: string) => ({
          label: formatLabel(category),
          value: category,
        }));
        setCategoryList(formattedCategories);
      });
    }
  }, []);

  const handleSubmit = () => {
    const newErrors = validateAddressWorkForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate("/loan-parameters");
  };

  return (
    <>
      <h2>Детали проживания и работы</h2>
      <FieldsWrapper>
        <Dropdown
          label="Место работы"
          placeholder="Выберите место работы"
          onChange={(value) =>
            handleFormDataChange(
              "company",
              value,
              setFormData,
              errors,
              setErrors
            )
          }
          dropdownItems={categoryList}
          error={errors.company}
          defaultValue={formData.company}
        />
        <Input
          type="text"
          label="Адрес проживания"
          placeholder="Введите адрес проживания"
          required
          error={errors.address}
          value={formData.address}
          onChange={(e) =>
            handleFormDataChange(
              "address",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
      </FieldsWrapper>
      <ButtonsWrapper>
        <Button onClick={() => navigate(-1)}>Назад</Button>
        <Button onClick={handleSubmit} variant="outlinedBlue">
          Далее
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default AddressWorkForm;
