import Head from 'next/head';
import Image from 'next/image';
import CardSection from '../components/cardSection';
import Container from '../components/container';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { getFilteredProducts } from '../utils/getData';
import src from '../public/img/hero-banner.jpg';

export default function Home({ winterData, allData }) {
  return (
    <>
      <Head>
        <title>Meubleo - Des meubles à votre convenance !</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />

      <main className='h-2/5 relative mb-12'>
        <div className='w-full h-96 overflow-hidden'>
          <Image
            width='2500px'
            height='404px'
            layout='fill'
            src={src}
            alt=''
            className='object-cover overflow-hidden'
            placeholder='blur'
            priority={true}
          />
        </div>
        <div className='overflow-hidden absolute inset-0 h-full bg-black bg-opacity-20'>
          <div className='container max-w-[1300px] items-center mx-auto p-6 flex flex-col justify-center h-full'>
            <h1 className='text-white text-4xl text-center lg:text-5xl font-bold'>
              <span
                className='text-white underline decoration-violet-600 decoration-wavy underline-offset-[6px] md:underline-offset-[15px]'
                title='Des meubles à votre convenance !'
              >
                MEUBLEO
              </span>
              {', '}
              des meubles à votre convenance
            </h1>{' '}
            <p className='text-white text-center mt-4 text-xl lg:text-xl max-w-3xl'>
              Achetez tous et n'importe quoi... nous l'avons!
            </p>
          </div>
        </div>
      </main>
      <Container>
        <CardSection title='Pack Hiver' data={winterData} />
        <br />
        <br />

        <CardSection title='Tous les produits' data={allData} />
      </Container>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const data = await getFilteredProducts();

  // console.log(data)

  const winterData = data.filter(
    ({ category }) => category.toLowerCase() === 'winter'
  );
  const allData = data.filter(
    ({ category }) => category.toLowerCase() !== 'winter'
  );

  return {
    props: { winterData, allData },
  };
}
