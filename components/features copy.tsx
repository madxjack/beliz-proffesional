'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement1 from '@/public/images/babyhairs.webp'
import FeaturesElement2 from '@/public/images/babyhairs_after.webp'

export default function Features() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute hidden sm:block left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-4 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto pb-12 md:pb-16 text-left">
            <h1 className="h2 mb-4 ">Ingredientes Naturales</h1>
            <p className="text-xl text-gray-600">Cada barra de <strong>Beliz StickWax</strong> está formulada con ingredientes naturales de alta calidad que amarás.</p>
            <p className="text-xl text-gray-600">Desde <strong>aceites naturales</strong> hasta <strong>extractos vegetales</strong>, cada elemento se combina para ofrecer un producto que no solo fija, sino que también te cuida.</p>
            <p className="text-xl text-gray-600">Nuestra prioridad es mantener tu cabello saludable mientras logras estilos sorprendentes.</p>
          </div>

          {/* Section content */}
          <div className="md:flex md:flex-col">
            <div className="mb-8">
              <h3 className="h3 mb-3 md:text-center ">¡Domina los Cabellos Rebeldes y Controla los Babyhairs! </h3>
              {/* <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p> */}
            </div>
            <div className='md:flex md:flex-1 md:gap-8 md:justify-between'>
              {/* Images */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:mt-6" data-aos="fade-right">

                {/* Tabs items */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
                  <div className="transition-all">
                    <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                      {/* Item 1 */}
                      <Transition
                        show={tab === 1}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 translate-y-16"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-16"
                        beforeEnter={() => heightFix()}
                        unmount={false}
                      >
                        <div className="relative inline-flex flex-col">
                          <Image className="md:max-w-none mx-auto rounded md:h[450]" src={FeaturesBg} width={500} height="358" alt="Features bg" />
                          <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement1} width={500} height="44" alt="Element" />
                        </div>
                      </Transition>
                      {/* Item 2 */}
                      <Transition
                        show={tab === 2}
                        appear={true}
                        className="w-full"
                        enter="transition ease-in-out duration-700 transform order-first"
                        enterFrom="opacity-0 translate-y-16"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in-out duration-300 transform absolute"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-16"
                        beforeEnter={() => heightFix()}
                        unmount={false}
                      >
                        <div className="relative inline-flex flex-col">
                          <Image className="md:max-w-none mx-auto rounded md:h[450]" src={FeaturesBg} width={500} height="358" alt="Features bg" />
                          <Image className="md:max-w-none absolute w-full left-0 transform animate-float" src={FeaturesElement2} width={500} height="44" alt="Element" />
                        </div>
                      </Transition>

                    </div>
                  </div>
                </div>

              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Antes</div>
                    <div className="text-gray-600">¿Los Cabellos Sueltos Arruinan tus Peinados Recogidos?</div>
                  </div>
                  {/* <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.953 4.29a.5.5 0 00-.454-.292H6.14L6.984.62A.5.5 0 006.12.173l-6 7a.5.5 0 00.379.825h5.359l-.844 3.38a.5.5 0 00.864.445l6-7a.5.5 0 00.075-.534z" />
                  </svg>
                </div> */}
                </a>
                <a
                  className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Después</div>
                    <div className="text-gray-600">Exprésate a través de tu cabello y lleva tu estilo al siguiente nivel con Beliz StickWax</div>
                  </div>
                  {/* <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.854.146a.5.5 0 00-.525-.116l-11 4a.5.5 0 00-.015.934l4.8 1.921 1.921 4.8A.5.5 0 007.5 12h.008a.5.5 0 00.462-.329l4-11a.5.5 0 00-.116-.525z" fillRule="nonzero" />
                  </svg>
                </div> */}
                </a>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}