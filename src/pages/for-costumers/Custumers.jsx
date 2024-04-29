import { useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const Customers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    passportNumber: "",
    jshir: "",
    cardNumber: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

    if (formData.fullName.length < 3) {
      errors.fullName = "Ism familiya maydoni to'ldirilishi shart";
      isValid = false;
    }

    if (
      !(formData.phoneNumber.length > 9) &&
      !(formData.phoneNumber.length < 16)
    ) {
      errors.phoneNumber = "Telefon nomerni to'g'ri kiriting!";
      isValid = false;
    }

    if (!formData.jshir) {
      errors.jshir = "JSHIR maydoni to'ldirilishi shart";
      isValid = false;
    }

    if (formData.cardNumber.length < 3) {
      errors.cardNumber = "Karta nomer maydoni to'ldirilishi shart";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setTimeout(() => {
        if (Object.keys(errors).length === 0) {
          setSuccessMessage("Qabul qilindi!");
          setErrorMessage("");
          setFormData({
            fullName: "",
            phoneNumber: "",
            passportNumber: "",
            jshir: "",
            cardNumber: "",
          });
        } else {
          setErrorMessage("Kod notog’ri qaytadan urunib ko’ring...");
          setSuccessMessage("");
        }
      }, 2000);
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
      {successMessage && <p className="text-green-600">{successMessage}</p>}
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
      <Button
        onClick={handleSubmit}
        title={"Yuborish"}
        isActive={true}
        className={"rounded-md"}
      />
    </div>
  );
};

export default Customers;
