import { motion } from "framer-motion";
import bibiPolaroid from "../../assets/images/bibi-polaroid.jpg"
import bibiP1 from "../../assets/images/bibip1.jpg"
import bibiP2 from "../../assets/images/bibip2.jpg"
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {useState} from "react";
// import * as THREE from 'three'
// import WAVES from 'vanta/dist/vanta.waves.min.js'
// import { useEffect, useRef } from 'react'

export default function PolaroidsPage(){
    const [isOpen, setIsOpen] = useState(false);
    // const vantaRef = useRef(null)
    // const [vantaEffect, setVantaEffect] = useState(null)
    //
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(WAVES({
    //             el: vantaRef.current,
    //             THREE,
    //             mouseControls: true,
    //             touchControls: true,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00,
    //             color: 0xbbbbbb
    //         }))
    //     }
    //
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // }, [vantaEffect])

    const openNewPolaroid = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    const polaroids =[
        bibiP1,
        bibiP2
    ]

    return(
        <>
            <motion.div  initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: 50 }}
                         transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
            <div className={"bg-white z-0 flex justify-center "}>
                    <img onClick={openNewPolaroid}  src={bibiPolaroid} alt={""} width={500} height={400}/>
            </div>
                {isOpen && (
                    <div className="fixed inset-0 z-[9999]  flex justify-center items-center">
                        <div className="relative w-full max-w-xl p-4 bg-white rounded-lg">
                            {/* Close Button */}
                            <button
                                className="absolute top-2 right-2 text-black text-2xl"
                                onClick={closeModal}
                            >
                                ×
                            </button>

                            <Carousel
                                showArrows
                                showThumbs={false}
                                showStatus={false}
                                infiniteLoop
                                useKeyboardArrows
                                className="polaroid-carousel"
                            >
                                {polaroids.map((item, index) => (
                                    <div key={index}>
                                        <img src={item} alt={`Polaroid ${index + 1}`} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        {/*<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>*/}
                    </div>
                )}

            </motion.div>
        </>
    )
}