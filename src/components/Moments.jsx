import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export default function Moments(props) {
    const styles = {
        momentsContainer: {
            width: '100%'
        },
        slider: {
            width: '100%',
            maxWidth: '800px',
            aspectRatio: '2 / 1',
            overflow: 'hidden',
            position: 'relative',
            cursor: 'pointer',
        },
        image: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center',
        },
    };

    const images = Object.values(props);
    const [index, setIndex] = useState(0);
    const nextStep = () => {
        setIndex((prev) => (prev + 1) % images.length)
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextStep();
        }, 2500);

        return () => clearInterval(timer);
    }, [index])

    return (
        <div className="moments-container" onClick={nextStep} style={styles.momentsContainer}>
            <div style={styles.slider}>
                <AnimatePresence>
                    <motion.img
                        style={styles.image}
                        key={images[index]}
                        src={images[index]}
                        initial={{ x: '100%', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-100%', opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    />
                </AnimatePresence>
            </div>
        </div>
    )
}