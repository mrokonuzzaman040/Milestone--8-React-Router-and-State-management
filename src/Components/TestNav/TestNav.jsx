import { useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const TestNav = () => {

    const [open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/contact', name: 'Contact' },
        { id: 4, path: '/login', name: 'Login' },
        { id: 5, path: '/register', name: 'Register' },
        { id: 6, path: '*', name: '404' }
    ];

    return (
        <nav className='bg-slate-400 p-6 m-10 text-white flex'>
            <div onClick={() => setOpen(!open)} className="text-2xl md:hidden">
                {
                    open === true ? <AiOutlineClose></AiOutlineClose> :
                        <HiMenuAlt1></HiMenuAlt1>
                }
            </div>
            <ul className={`md:flex absolute md:static bg-gray-500 p-2 duration-1000 
            ${open ? 'top-24' : '-top-60'}
            rounded-xl text-white items-center`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default TestNav;

// ${open ? '' : 'hidden'}