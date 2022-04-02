import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import Container from './container';
import SearchOverlay from './searchOverlay';
import { signIn, signOut, useSession } from 'next-auth/react';
import { FaUser } from 'react-icons/fa';

export default function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const { data: session } = useSession();

  const [ShowNav, setShowNav] = useState(false);
  useEffect(
    (element = window) => {
      if (ShowNav) {
        element.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            setShowNav(false);
          }
        });
      }
    },
    [ShowNav]
  );
  const showNavigationHandler = () => {
    setShowNav(!ShowNav);
  };
  const navigationBar = useRef();

  useEffect(() => {
    if (typeof document !== undefined) {
      if (showSearch == true) {
        document?.body.classList.add('overflow-y-hidden');
      } else {
        document?.body.classList.remove('overflow-y-hidden');
      }
    }
  }, [showSearch]);

  return (
    <div className={`shadow`}>
      <style global jsx>{`
        .dropdown {
          transition: 400ms;
          transform: translateY(-100%);
        }
        .appear {
          transform: translateY(0);
        }
      `}</style>
      <Container>
        <div className='relative'>
          <nav className='fixed bg-violet-700 flex w-full h-[64px] top-0 left-0 z-[60] flex-wrap items-center gap-4  px- px-11 sm:px-24 md:px-32 lg:px-44 xl:px-64 justify-between'>
            <div className='flex gap-8 items-center'>
              <Link href='/' passHref={true}>
                <a className='font-medium text-3xl bg-white p-3.5 py-1 rounded-full'>
                  <span
                    className='font-mono text-purple-900'
                    title='Des meubles à votre convenance !'
                  >
                    m
                  </span>{' '}
                </a>
              </Link>
              <input
                type='text'
                placeholder='Search'
                className='hidden px-4 py-2 w-auto lg:w-72 border border-gray-300 rounded-sm'
                onFocus={() => setShowSearch(true)}
                onChange={(e) => setShowSearch(e.target.value)}
              />
            </div>
            <div
              onClick={showNavigationHandler}
              className='px-2 text-4xl text-white cursor-pointer'
            >
              &#9776;
            </div>
            {/* <ul className='hidden flex-wrap gap-8 lg:gap-4'>
              <li>
                <a
                  href='/#winter-packs'
                  className='transition-colors hover:bg-violet-700  hover:text-white px-3 py-2 rounded-sm'
                >
                  Pack Hiver
                </a>
              </li>
              <li>
                <a
                  href='/#all-products'
                  className='transition-colors hover:bg-violet-700 hover:text-white px-3 py-2 rounded-sm'
                >
                  Tous les produits
                </a>
              </li>
              <li>
                <Link href='/orders'>
                  <a>View Orders</a>
                </Link>
              </li>
              <li>
                {session ? (
                  <span className='flex gap-2 items-center px-3 relative'>
                    <FaUser />
                    {session.user.name}
                    <Link href={`/api/auth/signout`}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                        className='absolute -top-4 right-0 text-xs hover:underline'
                      >
                        Sign out
                      </a>
                    </Link>
                  </span>
                ) : (
                  <Link href={`/api/auth/signin`}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      className='px-3 py-2 rounded-sm bg-violet-700 text-white'
                    >
                      Sign in
                    </a>
                  </Link>
                )}
              </li>
            </ul> */}
          </nav>
          <div
            ref={navigationBar}
            className={`fixed ${
              ShowNav ? 'appear' : null
            } dropdown mt-[64px] z-50 bg-white top-0 left-0 right-0`}
          >
            <ul className='grid'>
              <li>
                <a
                  href='/#winter-packs'
                  className='transition-colors w-full block text-center py-4 text-xl hover:bg-violet-700 hover:text-white'
                >
                  Pack hiver
                </a>
              </li>
              <li>
                <a
                  href='/#all-products'
                  className='transition-colors w-full block text-center py-4 text-xl hover:bg-violet-700 hover:text-white'
                >
                  Tous les produits
                </a>
              </li>
              <li>
                <Link href='/orders'>
                  <a className='transition-colors w-full block text-center py-4 text-xl hover:bg-violet-700 hover:text-white'>
                    Voir commandes
                  </a>
                </Link>
              </li>
              <li>
                {session ? (
                  <span className='flex gap-6 justify-center items-center px-3 relative'>
                    <div className='flex items-center gap-2'>
                      <FaUser className='bg-violet-800 text-white text-4xl p-2 rounded-full' />
                      {session.user.name}
                      azdaz
                    </div>

                    <Link href={`/api/auth/signout`}>
                      <a
                        onClick={(e) => {
                          e.preventDefault();
                          signOut();
                        }}
                        className='text-xl hover:bg-violet-600 bg-violet-700 text-white px-4 py-2 m-2 rounded-xl'
                      >
                        Deconnexion
                      </a>
                    </Link>
                  </span>
                ) : (
                  <Link href={`/api/auth/signin`}>
                    <a
                      onClick={(e) => {
                        e.preventDefault();
                        signIn();
                      }}
                      className='transition-colors w-full block text-white text-center py-4 bg-violet-700 text-2xl hover:bg-violet-600 hover:text-white'
                    >
                      Se connecter
                    </a>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </Container>
      {showSearch && (
        <SearchOverlay handleClick={(val) => setShowSearch(val)} />
      )}
    </div>
  );
}
