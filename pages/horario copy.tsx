import { ChevronLeftIcon, ChevronRightIcon, CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function Example() {
  const dateObj = new Date();
  const año = new Date().getFullYear();
  const mes = new Date().getMonth() + 1;
  const monthNameLong = dateObj.toLocaleString("es-ES", { month: "long" });
  const str = "Hello World";
  const numero = new Date(año, mes, 0).getDate();
  const cadena = [];
  const array: any = [];
  const numerodiavanzar = 2

  for (var i: number = 1; i <= numero; i++) {
    array.push(i)
  }
  console.log(array);
  const dias = [
    'D',
    'L',
    'M',
    'M',
    'J',
    'V',
    'S',
  ];
  const horario = [{
    inicio: "6:30",
    fin: "9:30",
    lapso: 20
  }];
  const hora = '';
  const horasiguiente = '';
  const fecha = new Date();
  const sumarsesion = 100;
  // console.log(fecha.getMinutes() + 20);
  const time = ['08:00', '09:00', '10:00', '14:00', '15:00']

  const [event, setEvent] = useState(null)
  const [info, setInfo] = useState(false)

  function displayInfo(e: any) {
    setInfo(true);
    setEvent(e.target.innerText);
  }
  return (
    <>
      <dt className="ml-8 mt-2">
        <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
        <p className="ml-8 text-lg font-medium leading-6 text-gray-900">Ecografia de Estomago</p>
      </dt>
      <div className=" text-gray-900 mt-4 bg-slate-100 ml-2 rounded-md">
        <div className="flex items-center">
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Previous month</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex-auto font-serif font-semibold text-lg text-center">{monthNameLong + ' ' + año}</div>
          <button
            type="button"
            className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">Next month</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div className="isolate gap-px rounded-lg bg-gray-200  shadow ring-1 ring-gray-200 mt-2 grid grid-cols-7 text-xs leading-6 text-gray-500">
          {dias && dias.map((item: any) => (
            <div>{item}</div>
          ))}
        </div>
        <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
          {array && array.map((item: any) => (
            <button
              key={item}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="ml-2 mt-3">Turno mañana</p>
      <div className=" text-gray-900  ml-2  isolate mt-2 grid grid-cols-4 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {time.map(times => {
          return (
            <button key={times}
              type="button" onClick={(e) => displayInfo(e)}
              className='rounded bg-blue-500 ml-1 mt-1 mr-1 mb-1'> {times}
            </button>
          )
        })}
        <div>
        </div>
      </div>
      <p className="ml-2 mt-3">Turno tarde</p>
      <div className=" text-gray-900  ml-2  isolate mt-2 grid grid-cols-4 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
        {time.map(times => {
          return (
            <button key={times}
              type="button" onClick={(e) => displayInfo(e)}
              className='rounded bg-blue-500 ml-1 mt-1 mr-1 mb-1'> {times}
            </button>
          )
        })}
        <div>
        </div>
      </div>
    </>
  )
}
