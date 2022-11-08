import { MenuIcon, SearchIcon, XIcon, DesktopComputerIcon } from '@heroicons/react/solid'
import { Dialog, Menu, Transition } from '@headlessui/react'
import { ClockIcon, HomeIcon } from '@heroicons/react/outline'
import { Fragment, useRef, useState } from 'react'
import { Head } from 'next/document'
const navigation = [
    { name: 'Inicio', href: '/', icon: HomeIcon, current: true },
    { name: 'Servicios', href: '/servicio', icon: DesktopComputerIcon, current: false }
]

function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}

export default function Panel() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>           
            <div className=" bg-blue-600 h-40 rounded-b-xl">
                <div className="grid grid-cols-2 gap-2">

                    <button
                        type="button"
                        className=" border-gray-200 px-4 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <span className="sr-only">Open sidebar</span>
                        <MenuIcon className="h-8 w-8 mt-2" aria-hidden="true" />
                    </button>
                    <img
                        className=" h-11 mt-2 place-self-end mr-2"
                        src="https://clinicaortega.pe/webortega/wp-content/uploads/2019/01/Logo-.png"
                        alt="Your Company"
                    />
                </div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-40 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-blue-700 pt-5 pb-4">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute top-0 right-0 -mr-12 pt-2">
                                            <button
                                                type="button"
                                                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                                onClick={() => setSidebarOpen(false)}
                                            >
                                                <span className="sr-only">Close sidebar</span>
                                                <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    <div className="flex flex-shrink-0 items-center px-4">
                                        <img
                                            className=" h-11 w-auto"
                                            src="https://clinicaortega.pe/webortega/wp-content/uploads/2019/01/Logo-.png"
                                            alt="Your Company"
                                        />
                                        <h2 className='ml-4 text-white text-2xl'>  Clinica Ortega</h2>

                                    </div>
                                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                                        <nav className="px-2">
                                            <div className="space-y-1">
                                                {navigation.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-blue-800 text-white'
                                                                : 'text-white hover:bg-blue-800',
                                                            'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        <item.icon
                                                            className={classNames(
                                                                item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                                                                'mr-3 flex-shrink-0 h-6 w-6'
                                                            )}
                                                            aria-hidden="true"
                                                        />
                                                        {item.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                            <div className="w-14 flex-shrink-0" aria-hidden="true">
                                {/* Dummy element to force sidebar to shrink to fit close icon */}
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
                <h1 className=' text-white text-center text-3xl'>Clinica Ortega</h1>
                <p className=' p-2 font-serif text-lg text-slate-300 text-center'>"Mejorando la medicina de hoy, innovando la del mañana"</p>
            </div>
        </>
    )
}