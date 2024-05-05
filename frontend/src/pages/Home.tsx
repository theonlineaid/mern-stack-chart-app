import { Navigate } from 'react-router-dom';
import Chat from '../components/message';
import SideBar from '../components/sidebar';
import { useAuthContext } from '../contexts/AuthContext';

export default function Home() {
    const { authUser } = useAuthContext();

    if (!authUser) {
        return <Navigate to="/login" />;
    }

    return (
        <div className='p-4 h-screen flex items-center justify-center'>
            <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <SideBar />
                <Chat />
            </div>
        </div>
    );
}
