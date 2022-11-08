import { navigation_usuario} from '../layout/ax_menu_item'
import { useEffect, useReducer, useState } from "react"
import useSWRImmutable from "swr/immutable"
import { useRouter } from 'next/router'
import { Dialog, Disclosure, Transition } from '@headlessui/react'
import { useUser } from '@auth0/nextjs-auth0';

const fetcherGrupo = (url: string): Promise<any> =>
    fetch(url, { method: "GET" }).then(r => r.json());
const fetcherEmpleado = (url: string): Promise<any> =>
    fetch(url, { method: "GET" }).then(r => r.json());
function classNames(...classes: Array<string>) {
    return classes.filter(Boolean).join(' ')
}

export default function AxBodyNavegacion({ clase }: any) {
    const { user, error, isLoading } = useUser();
    const { data: listaEmpleado } = useSWRImmutable<any[]>('/api/entidad/empleado', fetcherEmpleado);
    const [id_rol, setId_rol] = useState(0);
    const router = useRouter();
    useEffect(() => {
        const empleado = listaEmpleado?.filter(x => x.email == user?.email);
        if (empleado && empleado[0]) {
            setId_rol(empleado[0].id_rol)
            console.log(empleado[0].id_rol);
            
        }
    }, [listaEmpleado])

    return <nav className="mt-5 flex-1 flex flex-col divide-y divide-indigo-500 overflow-y-auto" aria-label="Sidebar">
        <div className="px-2 space-y-1">
            {( navigation_usuario && navigation_usuario).map((item) => (
                (
                    <Disclosure as="div" key={item.name} className="space-y-1">
                        {({ open }) => (
                            <>
                                <Disclosure.Button
                                    className={classNames(
                                        item.current
                                            ? 'bg-indigo-800 text-white'
                                            : 'text-indigo-100 hover:bg-indigo-500 ',
                                        'group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-indigo-800'
                                    )}
                                >
                                    <item.icon
                                        className="mr-3 flex-shrink-0 h-6 w-6 text-indigo-200 "
                                        aria-hidden="true"
                                    />
                                    <span className="flex-1">{item.name}</span>                                    
                                </Disclosure.Button>                             
                            </>
                        )}
                    </Disclosure>
                )
            ))}
        </div>        
    </nav>;
}


