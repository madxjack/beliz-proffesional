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
        <div className="pt-4 md:pt-20 transition-all">

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
            </div>
            <div className='md:flex md:flex-1 md:gap-8 md:justify-between'>
              {/* Images */}
              <div className='relative flex flex-col mb-4'>
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
                  <Image
                    src={FeaturesElement1}
                    alt="Features bg"
                    className="md:max-w-none mx-auto"
                    width={500}
                    height={500}
                  />
                </Transition>
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
                  <Image
                    src={FeaturesElement2}
                    alt="Features bg"
                    className="md:max-w-none mx-auto"
                    width={500}
                    height={500}
                  />
                </Transition>
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

                </a>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}