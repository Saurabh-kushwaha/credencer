'use client';
import { Navbar } from 'flowbite-react';

export default function NavbarWithCTAButton() {
    return (
        <Navbar
            fluid
            rounded
            className='bg-gray-900 rounded-none p-0'
        >
            <Navbar.Brand href="https://flowbite-react.com">
                <span class="logo-text" title="Credence Rewards™">Credence Rewards™</span>
            </Navbar.Brand>
            <Navbar.Collapse>
                <Navbar.Link
                    active
                    href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5 hover:bg-white'>
                        All Brands
                    </p>
                </Navbar.Link>
                <Navbar.Link
                    href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5 hover:bg-white'>
                        Categories
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5  hover:bg-white'>
                        For Business
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5  hover:bg-white'>
                        Check Balance
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5  hover:bg-white'>
                        Login
                    </p>
                </Navbar.Link>
                <Navbar.Link href="#"
                    className='p-2.5 text-lg font-bold text-white'
                >
                    <p className='p-2.5  hover:bg-white'>
                        Sign up
                    </p>
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}


