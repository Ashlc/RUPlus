import React from 'react';
import Form from './Form';
import logo from '../../assets/RUPLUS.svg'
import Button from '../../components/Button/Button';

function Recover() {
    return (
        <div className="flex flex-col items-center w-full min-h-screen pt-10 bg-stdblue">
            <div className=" flex flex-col w-10/12 gap-8">
                <div className="flex justify-between items-center w-full">
                    <p className="text-white w-1/2 text-xl font-extrabold">REDEFINA SUA SENHA</p>
                    <img src={logo} alt="" className="h-8" />
                </div>
                <hr className="border-white w-full" />
                <div className='flex flex-col gap-4'>
                    <Form />
                </div>
                <Button text={'AVANÇAR'} />
            </div>
        </div>
    )
}

export default Recover;