import { useState } from 'react'
import AxHeader from 'components/layout/ax_header'
import AxSidebar from 'components/layout/ax_sidebar'
import { useUser } from '@auth0/nextjs-auth0';

interface Props {
    children: React.ReactNode
}

export default function AxLayout({ children }: Props) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { user, error, isLoading } = useUser();
    return (
        <>
            <div className="min-h-full">
           
                    {children}
                </div>
            
        </>
    )
}
