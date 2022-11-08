import { BanIcon, MenuIcon, SearchIcon, UsersIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import ServicioModel from '../models/servicio_model'
import React from 'react';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Especialidad from './especialidad';
import Head from 'next/head'
export default function Example() {
    const [textoFiltro, setTextoFiltro] = useState('')
    const [id, setID] = useState(0);
    const [lista, setLista] = useState<ServicioModel[]>([]);
    const [servicio, setServicio] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/administracion/area`, { method: "GET" })
            const result: ServicioModel[] = await response.json()
            setLista(result);
        }
        fetchData().catch(console.error);
    }, [])
    const listaFiltro = (textoFiltro == "" ? lista : lista.filter(item =>
        item.nombre.toUpperCase().includes(textoFiltro.toUpperCase())
    ))

    return (

        <>
            <Head>
                <title>Inicio</title>
            </Head>
            <div className="h-screen flex flex-col md:flex-row lg:flex-wrap bg-white ">

                <div className="lg:col-span-4 lg:row-end-1">
                    <div className="mt-4 ml-2 mr-2 aspect-w-4 aspect-h-3 overflow-hidden rounded-lg bg-gray-100">
                        <img src='https://clinicaortega.pe/webortega/wp-content/uploads/2019/02/Fachada-editada-1024x683.jpg'
                            alt='https://clinicaortega.pe/webortega/wp-content/uploads/2019/02/Fachada-editada-1024x683.jpg' className="object-cover object-center" />
                    </div>
                </div>
                <div className='mt-4 content-center'>

                    <h1 className=' text-center text-lg'>Aplicacion de reserva</h1>
                    <p className=' text-center'>nuevo aplicacion de reservas de citas medicas</p>


                </div>
                <div className="relative mt-10 flex self-center rounded-lg bg-blue-400 p-0.5 sm:mt-">
                    <button
                        type="button"
                        className=" ml-2 mr-2 rounded-md  py-2 text-sm font-medium  "
                    >
                        Reserva tu cita ahora
                    </button>

                </div>

            </div>
        </>
    )
}
