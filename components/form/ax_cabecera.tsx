import { MenuIcon, SearchIcon } from '@heroicons/react/solid'
import Panel from './panel'
export default function AxCabecera( ) {
    return (
        <>
           <div className=" bg-blue-600 h-36 rounded-b-xl">
                    <Panel></Panel>
                    <h1 className=' text-white text-center text-3xl'>Clinica Ortega</h1>
                    <p className=' p-2 text-justify font-serif text-lg text-slate-300 '>"Mejorando la medicina de hoy, innovando la del mañana"</p>
                </div>
                
        </>
    )
}