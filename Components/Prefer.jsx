import React from 'react'
import {  FiCheckCircle, FiClock,FiShield, FiUserCheck, FiWifi, FiUsers, FiLayers} from "react-icons/fi";

export default function Prefer() {
    const items = [
    {
      icon: <FiCheckCircle className="text-[#3A499C]" size={70} />,
      title: "Надёжная верификация",
      description: "гарантия, что пользователь\nдействительно тот, за кого\nсебя выдает (сравнение 1:1)"
    },
    {
      icon: <FiClock className="text-[#3A499C]" size={70} />,
      title: "Скорость обработки",
      description: "все операции\nосуществляются в режиме\nреального времени."
    },
    {
      icon: <FiShield className="text-[#3A499C]" size={70} />,
      title: "Минимум ложных срабатываний",
      description: "пользователь правильно\nопределяется с вероятностью\nблизкой к 100%"
    },
    {
      icon: <FiUserCheck className="text-[#3A499C]" size={70} />,
      title: "Идентификация\n(сравнение 1:N)",
      description: "поиск пользователя в базе\nклиентов и определение\nподходящего кандидата"
    },
    {
      icon: <FiWifi className="text-[#3A499C]" size={70} />,
      title: "Liveness по одной фотографии",
      description: "позволяет работать\nв местах со слабым\nинтернетом"
    },
    {
      icon: <FiUsers className="text-[#3A499C]" size={70} />,
      title: "Идентификация иностранцев",
      description: "система может\nидентифицировать\nиностранцев (ПИН/ID)"
    },
    {
      icon: <FiLayers className="text-[#3A499C]" size={70} />,
      title: "Микросервисная архитектура",
      description: "используются только\nнужные для вашего\nбизнеса компоненты"
    }
  ];

  return (
    <div className='max-w-7xl m-auto mb-[72px]'>
      <div className="text-center mt-10 mb-10 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold text-black">Преимущества</h2>
        <p className="text-lg text-gray-500 mt-2">Обоснование, почему наше решение хорошее</p>
      </div>

      <div className="p-10 flex justify-center">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-[263px] pr-6 h-[274px] border border-[#E2E8F0] rounded-tr-[16px] rounded-bl-[16px] pt-6 pl-6 hover:shadow-md transition bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white">
                {item.icon}
              </div>

              <div className="flex flex-col">
                <h3 className="text-[20px] mt-2 font-semibold text-black leading-tight whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-[16px] mt-4 text-gray-500 leading-snug whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
