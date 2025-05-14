import { motion } from "framer-motion"
import lagosShoot from "../../assets/images/lagos-brand-shoot.png"
import prettyPrints from "../../assets/images/pretty-prints-2.png"


export default function BrandsPage(){
    return(
        <>
            <motion.div  initial={{ opacity: 0, x: -50 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0, x: 50 }}
                         transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
            <div className={"bg-black items-center justify-center sm:justify-evenly flex gap-2 p-4  h-screen"}>
                <div className="h-screen group cursor-pointer relative rounded-md border-2  w-[200px] sm:w-[300px] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-80">
                        <img
                            src={lagosShoot}
                            alt=""
                            className="h-full w-full object-cover object-[70%_center] sm:object-[90%_center] rounded-lg"
                        />
                    </div>
                    <div className="absolute inset-0 flex  justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-md font-mono font-semibold">+234 Brand Shoot</p>
                    </div>
                </div>
                <div className="h-screen group cursor-pointer relative rounded-md border-2 w-[200px] sm:w-[300px] overflow-hidden">
                    <div className="h-full w-full transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-80">
                        <img
                            src={prettyPrints}
                            alt=""
                            className="h-full w-full object-cover  object-[80%_center] sm:object-[90%_center] rounded-lg"
                        />
                    </div>
                    <div className="absolute inset-0 flex  justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-white text-sm font-mono font-semibold">PrettyPrints Brand Shoot</p>
                    </div>
                </div>
            </div>

            </motion.div>
        </>
    )
}