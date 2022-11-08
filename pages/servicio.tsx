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
                <title>Servicio</title>
            </Head>
            {servicio ?
                <div className="h-screen flex flex-col md:flex-row lg:flex-wrap bg-white">
                    <div>
                        <label className='text-xl font-sans pl-3 pt-4 font-semibold'>Servicios:</label>
                        <div className="mt-2 px-3">
                            <div className=" relative mt-1 rounded-md shadow-sm">
                                <div
                                    className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
                                    aria-hidden="true"
                                >
                                    <SearchIcon className="mr-3 h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="search"
                                    id="search"
                                    className="block w-full rounded-md border-gray-300 pl-9 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Buscar"
                                    onChange={(event) => setTextoFiltro(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200 overflow-scroll mt-4">
                        {listaFiltro && listaFiltro.map(item => {
                            return <li key={item.id} className="flex py-6 sm:py-10">
                                <div className="flex-shrink-0 ml-2 shadow-2xl">
                                    <img
                                        src={item.url_imagen}
                                        alt={item.url_imagen}
                                        className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                    />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col  sm:ml-6 border-b  border-gray-400 mr-2">
                                    <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                        <div className=' flex-grow'>
                                            <div className="flex justify-between">
                                                <h3 className="text-sm">
                                                    <a href="" className=" font-semibold text-2xl text-gray-700 hover:text-gray-800">
                                                        {item.nombre}
                                                    </a>
                                                </h3>
                                            </div>
                                            <div className="mt-1 flex text-sm">
                                                <p className="text-gray-500">{item.descripcion}</p>
                                            </div>
                                            <div className="mx-auto mt-2 max-w-md sm:flex sm:justify-center md:mt-8">
                                                <div className="rounded-md shadow">
                                                    {/* <NavLink ></NavLink> */}
                                                    <a
                                                        onClick=
                                                        {() => {
                                                            setID(item.id);
                                                            setServicio(!servicio)
                                                        }}

                                                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                                                    >
                                                        Acceder
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>
                    {textoFiltro !== '' && listaFiltro.length === 0 && (
                        <div className="py-14 px-4 text-center sm:px-14">
                            <UsersIcon className="mx-auto h-6 w-6 text-gray-400" aria-hidden="true" />
                            <p className="mt-4 text-sm text-gray-900">No se encontraron servicios usando ese término de búsqueda.</p>
                        </div>
                    )}
                </div> :

                <div className="h-screen mt-3 flex flex-col md:flex-row lg:flex-wrap bg-white">
                    <dt>
                        <ChevronLeftIcon onClick={(event) => setServicio(!servicio)} className="absolute text-blue-700 w-6 h-6" aria-hidden="true" />
                        <p className="ml-9 text-2xl font-medium leading-6 text-gray-900">Especialidad:</p>
                    </dt>
                    <Especialidad idServicio={id}></Especialidad>
                </div>
            }

        </>
    )
}
