import { useNavigate } from "react-router-dom";
import { Button } from "../components/UI/Button";
import useStore from "../store/store";
import { useMemo, useState } from "react";
import Input from "../components/UI/Input";
import { TError } from "../utils/types";
import { validatePersonalInfoForm } from "../utils/validation";
import { handleFormDataChange } from "../utils/handlers";
import Radio from "../components/UI/Radio";
import { ButtonsWrapper, FieldsWrapper } from "../styles/Wrappers";

const PersonalInfoForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useStore();

  const [errors, setErrors] = useState<TError>({});

  const genders = useMemo(
    () => [
      { label: "Мужской", value: "male" },
      { label: "Женский", value: "female" },
    ],
    []
  );

  const handleSubmit = () => {
    const newErrors = validatePersonalInfoForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) navigate("/address-work");
  };

  return (
    <>
      <h2>Личные данные</h2>
      <FieldsWrapper>
        <Input
          type="tel"
          label="Номер телефона"
          placeholder="0 123 456 789"
          required
          error={errors.phoneNumber}
          value={formData.phoneNumber}
          onChange={(e) =>
            handleFormDataChange(
              "phoneNumber",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
        <Input
          type="text"
          label="Имя"
          placeholder="Введите имя"
          required
          error={errors.name}
          value={formData.name}
          onChange={(e) =>
            handleFormDataChange(
              "name",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
        <Input
          type="text"
          label="Фамилия"
          placeholder="Введите фамилию"
          required
          error={errors.surname}
          value={formData.surname}
          onChange={(e) =>
            handleFormDataChange(
              "surname",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
        <Radio
          groupTitle="Пол"
          radioItems={genders}
          checkedValue={formData.gender}
          required
          error={errors.gender}
          onChange={(e) =>
            handleFormDataChange(
              "gender",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
      </FieldsWrapper>
      <ButtonsWrapper>
        <Button onClick={handleSubmit} variant="outlinedBlue">
          Далее
        </Button>
      </ButtonsWrapper>
    </>
  );
};

export default PersonalInfoForm;
