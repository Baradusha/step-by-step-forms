import { useNavigate } from "react-router-dom";
import { Button } from "../components/UI/Button";
import useStore from "../store/store";
import { useState } from "react";
import Slider from "../components/UI/Slider";
import { handleFormDataChange } from "../utils/handlers";
import { TError } from "../utils/types";
import { validatePersonalInfoForm } from "../utils/validation";
import { addNewProduct } from "../core/api";
import { ButtonsWrapper, FieldsWrapper } from "../styles/Wrappers";
import Modal from "../components/Modals/Modal";
import { pluralizeDays } from "../utils/helpers";

const LoanParametersForm = () => {
  const navigate = useNavigate();
  const { formData, setFormData } = useStore();

  const [errors, setErrors] = useState<TError>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = () => {
    const newErrors = validatePersonalInfoForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      addNewProduct(`${formData.name} ${formData.surname}`).then(() => {
        setLoading(false);
        setIsModalOpen(true);
      });
    }
  };

  return (
    <>
      <h2>Детали займа</h2>
      <FieldsWrapper>
        <Slider
          title="Сумма займа"
          step={100}
          min={200}
          max={1000}
          required
          type="moneyAmount"
          value={formData.amount}
          onChange={(e) =>
            handleFormDataChange(
              "amount",
              e.target.value,
              setFormData,
              errors,
              setErrors
            )
          }
        />
        <Slider
          title="Срок займа"
          required
          type="datesRange"
          step={1}
          min={10}
          max={30}
          value={formData.term}
          onChange={(e) =>
            handleFormDataChange(
              "term",
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
        <Button onClick={handleSubmit} variant="outlinedBlue" loading={loading}>
          Принять
        </Button>
      </ButtonsWrapper>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Результат одобрен!"
      >
        <p>{`Поздравляем, ${formData.surname} ${formData.name}.`}</p>
        <p>{`Вам одобрена сумма ${formData.amount}$ на ${pluralizeDays(
          formData.term
        )}.`}</p>
      </Modal>
    </>
  );
};

export default LoanParametersForm;
