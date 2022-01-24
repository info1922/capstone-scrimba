import React, {useState, useEffect} from 'react';

const Context = React.createContext()


function ContextProvider({children}) {
    
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favItems, setFavItems] = useState([]);


    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    useEffect(() => {
      
        fetch(url)
        .then(res => res.json())
        .then(data => console.log('DAta: ', data))
      
    }, []);
    



    return (

        <Context.Provider value={{

        }}>
            {children}
        </Context.Provider>

    )



}

export {ContextProvider, Context}
