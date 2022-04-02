import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import Badge from './badge';
import Container from './container';
import OutLink from './outLink';

export default function Footer() {
  return (
    <>
      <footer className='bg-violet-800 flex flex-col sm:flex-row items-center justify-center text-white gap-y-5 sm:gap-x-10 md:gap-x-32 lg:gap-x-48 gap-x-20 py-10 md:py-24'>
        <div className='bg-violet-900 w-fit h-fit text-3xl font-bold rounded-full px-8 py-7'>
          m
        </div>
        <div className='grid text-center sm:mr-0 sm:text-left whitespace-nowrap sm:flex justify-center text-sm sm:text-base gap-10 sm:gap-5 md:gap-x-10 lg:gap-x-20'>
          {/* Navigation */}
          {/* <ul className=' font-montserrat grid gap-2'>
            <li>Accueil</li>
            <li>A propos</li>
            <li>Nos solutions</li>
            <li>Nos réalisations</li>
            <li>Clients</li>
            <li>Contact</li>
          </ul> */}
          <ul className='font-montserrat grid gap-2'>
            <li>Abomey Calavi, Bénin</li>
            <li>Derriere ISM Adonaî</li>
            <li>contact@meubleo.net</li>
            <li>+229 61640292</li>
            <li className='opacity-0'>ezezez-</li>
            <li className='flex gap-x-3 justify-center md:justify-start'>
              <FaFacebook className='text-2xl' />
              <FaWhatsapp className='text-2xl' />
            </li>
          </ul>
          {/* Informations */}
        </div>
      </footer>
      <div className=' bg-violet-900 font-montserrat text-center text-sm md:text-base text-gray-200 p-7'>
        © Copyright <span className='font-semibold font-poppins'> MEUBLEO</span>
        . Tous droits réservés ! Conception et Réalisations par{' '}
        <OutLink link='https://github.com/monlasan'>BossKhaled</OutLink>
      </div>
    </>
  );
}
