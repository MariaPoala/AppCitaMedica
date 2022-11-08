import { ChevronLeftIcon, ChevronRightIcon, CheckIcon, XIcon } from "@heroicons/react/outline";
import { useState, useEffect, useReducer } from "react";
import EspecialidadModel from '../models/especialidad_model'
import CitaModel from '../models/cita_model'
const formReducer = (state: EspecialidadModel, event: any): EspecialidadModel => {
  if (event.FORM_DATA) {
    return { ...event.FORM_DATA }
  }
  if (event.FORM_ADD) {
    return new EspecialidadModel()
  }
  return { ...state, [event.name]: event.value }
}
const formReduc = (state: CitaModel, event: any): CitaModel => {
  if (event.FORM_DATA) {
    return { ...event.FORM_DATA }
  }
  if (event.FORM_ADD) {
    return new CitaModel()
  }
  return { ...state, [event.name]: event.value }
}


export default function Example(idEspecialidad: any) {
  const [formData, setFormData] = useReducer(formReduc, new CitaModel());
  const [cita, setCita] = useState(false);
  const dateObj = new Date();
  const año = new Date().getFullYear();
  const mes = new Date().getMonth() + 1;
  const monthNameLong = dateObj.toLocaleString("es-ES", { month: "long" });
  const numero = new Date(año, mes, 0).getDate();
  const cadena = [];
  const array: any = [];
  const [listaEspecialidad, setListaEspecialidad] = useReducer(formReducer, new EspecialidadModel());
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/administracion/especialidad/${idEspecialidad.idEspecialidad}`);
      const data: EspecialidadModel = await response.json();
      setListaEspecialidad({ FORM_DATA: data });
    }
    fetchData().catch(console.error);

  }, [])
  const handleSubmit = async (event: any) => {
    console.log(listaEspecialidad.id_servicio + listaEspecialidad.id + "ddd");
    setFormData({ name: "id_servicio", value: listaEspecialidad.id_servicio })
    setFormData({ name: "id_especialidad", value: listaEspecialidad.id })
    setFormData({ name: "fecha", value: 'ddd' })
    setFormData({ name: "horario", value: 'ff' })
    setFormData({ name: "nombrepaciente", value: 'Maria' })
    const dataEnvio = JSON.stringify(formData);
    console.log(dataEnvio);
    const response = await fetch('/api/administracion/cita', {
      body: dataEnvio,
      headers: { 'Content-Type': 'application/json', },
      method: "POST"
    })
    const result: CitaModel = await response.json()


  }

  for (var i: number = 1; i <= numero; i++) {
    array.push(i)
  }
  // console.log(array);
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
        <div
          className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
        >
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>W</span>
            {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              19
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>T</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600">
              20
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>F</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              21
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>S</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
              22
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>S</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              23
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>M</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              24
            </span>
          </button>
          <button type="button" className="flex flex-col items-center pt-3 pb-1.5">
            <span>T</span>
            <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
              25
            </span>
          </button>
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
              type="button"
              onClick=
              {() => {
                setCita(!cita)
              }}
              className='rounded bg-blue-500 ml-1 mt-1 mr-1 mb-1'> {times}
            </button>
          )
        })}
        <div>
        </div>
      </div>

      {cita ?
        <div className="mt-6 ml-2 mr-2">
          <div className="flex flex-col ">
            <div className="flex flex-1 flex-col justify-between bg-blue-100 ">
              <XIcon onClick=
                {() => {
                  setCita(!cita)
                }}
                className="h-6 w-6 text-blue-700"></XIcon>
              <div className="m-4">
                <p className=" font-sans text-lg">Reservar cita de:</p>
                <p>{listaEspecialidad.nombre_servicio}</p>
                <dt className="ml-8 mt-2">
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-8 text-lg font-medium leading-6 text-gray-900" >{listaEspecialidad.nombre}</p>
                </dt>
                <dt className="ml-8 mt-2">
                  <p className="absolute">Fecha:</p>
                  <div className="ounded bg-blue-200 w-15 m-4 text-center"> 11-11-2022</div>
                </dt>
                <dt className="ml-8 mt-2">
                  <p className="absolute">hora:</p>
                  <div className="ounded bg-blue-200 w-15 m-4 text-center">08:00 am</div>
                </dt>
              </div>
              <div className="relative mb-2  flex self-center rounded-lg bg-blue-400 p-0.5 sm:mt-">
                <button
                  type="button"
                  className=" ml-2 mr-2 rounded-md  py-2 text-sm font-medium  "
                  onClick={handleSubmit}
                >
                  Reservar Cita
                </button>

              </div>

            </div>
          </div>
        </div> :
        <div></div>
      }
    </>
  )
}
