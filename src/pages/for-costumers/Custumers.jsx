import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Custumers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    passportNumber: "",
    jshir: "",
    cardNumber: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.fullName) {
      errors.fullName = "Ism familiya maydoni to'ldirilishi shart";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted:", formData);
    }
  };

  return (
    <div className="flex max-w-[500px] px-10 mx-auto flex-col gap-3 items-center justify-center">
      <h1 className="font-bold text-2xl mb-2">Mijoz uchun</h1>
      <Input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        error={errors.fullName}
        label="Ism familiya"
        className={"w-full"}
      />

      <Input
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        error={errors.phoneNumber}
        label="Telefon nomer"
        type="number"
        className={"w-full"}
      />
      <Input
        name="jshir"
        value={formData.jshir}
        onChange={handleChange}
        error={errors.jshir}
        label="JSHIR"
        type="text"
        className={"w-full"}
      />
      <Input
        name="cardNumber"
        value={formData.cardNumber}
        onChange={handleChange}
        error={errors.cardNumber}
        label="Karta nomer"
        type="number"
        className={"w-full"}
      />
      <Button
        onClick={() => handleSubmit}
        title={"Yuborish"}
        isActive={true}
        className={"rounded-md"}
      />
    </div>
  );
};

export default Custumers;
