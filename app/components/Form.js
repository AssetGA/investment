"use client";

import React, { useEffect, useState } from "react";
import TextField from "./TextField";
import { validator } from "../utils/validator";
import botService from "../service/bot.service";

const Form = ({ type, buttonName }) => {
  const [showModal, setShowModal] = React.useState(false);

  const [send, setSend] = useState(false);

  const [data, setData] = useState({
    name: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
  };

  const validatorConfig = {
    check: {
      isRequired: {
        message: "Введите ваше имя",
      },
    },
    name: {
      isRequired: {
        message: "Введите ваше имя",
      },
    },
    phone: {
      isRequired: {
        message: "Введите ваш номер телефона",
      },
      isContainDigit: {
        message: "Введите только цифры",
      },
      min: {
        message: "Минимум 10 символов",
        value: 10,
      },
      max: {
        message: "Максимум 15 символов",
        value: 15,
      },
    },
    address: {
      isRequired: {
        message: "Введите точный адрес доставки",
      },
    },
  };

  useEffect(() => {
    const load = async () => {
      await validate();
    };
    load();
  }, [data]);

  const handleChange = ({ target }) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const handleSend = async () => {
    try {
      const answer = await botService.get({ ...data, type: type });
      if (answer) {
        setSend(true);
        setData({
          name: "",
          phone: "",
          type: "",
        });
      }
    } catch (error) {
      console.log("error", error.message);
    }
  };

  const handleClouse = () => {
    setShowModal(false);
    setSend(false);
  };

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const isValid = Object.keys(errors).length === 0;
  return (
    <>
      <div className="flex justify-center py-5 md:py-20">
        <button
          className="bg-gradient-to-r from-indigo-500 hover:bg-blue-600 hover:text-white text-xl font-bold text-blue-200 rounded-md ring-4 hover:ring-lime-400 py-3 px-10 shadow-lg"
          type="button"
          onClick={() => setShowModal(true)}
        >
          {buttonName}
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {!send ? (
                  <>
                    <div className="flex items-start justify-between px-16 py-10 border-b border-solid border-blueGray-200 rounded-t">
                      <p className="text-2xl font-semibold font-serif">
                        Мы с Вами свяжемся
                      </p>
                    </div>
                    <div className="relative py-6 px-10 flex-auto">
                      <form onSubmit={handleSubmit}>
                        <TextField
                          label="Имя"
                          name="name"
                          type="name"
                          value={data.name.trim()}
                          onChange={handleChange}
                          error={errors.name}
                          placeholder="Edige"
                        />
                        <TextField
                          label="Номер whatsapp"
                          name="phone"
                          type="phone"
                          value={data.phone.trim()}
                          onChange={handleChange}
                          error={errors.phone}
                          placeholder="7091112233"
                        />
                      </form>
                    </div>
                    <div className="flex items-center justify-between flex-row px-11 py-8 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="bg-gradient-to-r from-indigo-500 hover:bg-blue-600 hover:text-white text-xl font-bold text-blue-200 rounded-md ring-4 hover:ring-lime-400 py-1 px-4 shadow-lg"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Закрыть
                      </button>
                      <button
                        className="bg-gradient-to-r from-indigo-500 hover:bg-blue-600 hover:text-white text-xl font-bold text-blue-200 rounded-md ring-4 hover:ring-lime-400 py-1 px-4 shadow-lg"
                        type="button"
                        onClick={handleSend}
                        disabled={!isValid}
                      >
                        Отправить
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex justify-center" onClick={handleClouse}>
                    <p className="text-wrap font-bold py-10 mx-10">
                      С Вами свяжется менеджер в ближаейшее время!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Form;
