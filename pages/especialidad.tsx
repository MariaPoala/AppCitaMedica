import { MenuIcon, SearchIcon, UsersIcon, ShieldExclamationIcon, CheckIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import EspecialidadModel from '../models/especialidad_model'
import React, { Fragment } from 'react';
import { useEffect, useState } from 'react';
import Head from 'next/head'
import Horario from './horario'
import { Dialog, Transition } from '@headlessui/react';

export default function Example(idServicio: any) {
    const [textoFiltro, setTextoFiltro] = useState('')
    const [especialidad, setEspecialidad] = useState(true)
    const [Id, setId] = useState(0)
    const [nombre, setNombre] = useState('')



    const [lista, setLista] = useState<EspecialidadModel[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/administracion/especialidad`, { method: "GET" })
            const result: EspecialidadModel[] = await response.json()
            setLista(result);
        }
        fetchData().catch(console.error);
    }, [idServicio])
    const listaFiltro = (textoFiltro == "" ? lista : lista.filter(item =>
        item.nombre.toUpperCase().includes(textoFiltro.toUpperCase())
    ))
    const [open, setOpen] = useState(false)
    
    return (
        <>            
            <div>
                <Head>
                    <title>Servicio</title>
                </Head>
                <div className="mt-4 mb-2 px-3">
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
                            className="block w-full rounded-md border-blue-400 pl-9 focus:border-indigo-500 focus:ring-blue-500 sm:text-sm"
                            placeholder="Buscar"
                            onChange={(event) => setTextoFiltro(event.target.value)}
                        />
                    </div>
                </div>
                <ul role="list" className="ml-2 mr-2 divide-y divide-gray-200 border-t border-b border-gray-200 overflow-scroll grid grid-cols-3">
                    {listaFiltro && listaFiltro.map(item =>
                        item.id_servicio == idServicio.idServicio ?
                            <li onClick=
                                {() => {
                                    setId(item.id)
                                    setEspecialidad(!especialidad)
                                    setOpen(!open)                                   

                                }} key={item.id} className=" py-6 sm:py-10 ">
                                <div className=" flex-shrink-0 shadow-2xl rounded-lg ">
                                    <img
                                        src={item.url_img}
                                        alt={item.url_img}
                                        className="ml-2  h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                    />
                                    <p className='m-2 text-justify block'>{item.nombre}</p>
                                </div>
                            </li>
                            : ""
                    )}
                </ul>
                {textoFiltro !== '' && listaFiltro.length === 0 && (
                    <div className="py-14 px-4 text-center sm:px-14">
                        <ShieldExclamationIcon className="mx-auto h-6 w-6 text-blue-400" aria-hidden="true" />
                        <p className="mt-4 text-sm text-gray-900">No se encontraron servicios usando ese término de búsqueda.</p>
                    </div>
                )}
            </div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <div className="fixed inset-0" />

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="h-screen mt-3 flex flex-col md:flex-row lg:flex-wrap bg-white">
                                                <dt>
                                                    <ChevronLeftIcon onClick={() => setOpen(false)} className="absolute text-blue-700 w-6 h-6" aria-hidden="true" />
                                                    <p className="ml-9 text-2xl font-medium leading-6 text-gray-900">Reserva de cita medica:</p>
                                                </dt>
                                                <Horario idEspecialidad={Id}> </Horario>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}
