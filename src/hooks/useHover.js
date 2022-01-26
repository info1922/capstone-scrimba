import React, {useState, useRef, useEffect} from 'react';

function useHover() {
    const [hovered, setHovered] = useState(false);
    
    const ref = useRef(null)

    // console.log('Ref: ', ref);

    function enter() { 
        setHovered(true)
    }


    function leave() {
        setHovered(false)
    }


    useEffect(() => {
      
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)
        const referencia = ref.current;

        return() => {
            referencia.removeEventListener("mouseenter", enter)
            referencia.removeEventListener("mouseleave", leave)
        }
    }, [])

    return [hovered, ref]
    

}

export default useHover
