import React, {useState, useEffect} from 'react';

const Context = React.createContext()


function ContextProvider({children}) {
    // console.log('children: ', children)
    const [allPhotos, setAllPhotos] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favItems, setFavItems] = useState([]);


    const url = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

    function obtenerImagenes() {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    }

    function toggleFavorite(id) {
        const updateArray = allPhotos.map(el => {
            if (el.id === id) {
                // console.log('Coincide : ', id)
                return {
                    ...el,
                    isFavorite: !el.isFavorite
                }
            }

            return el
        })

        setAllPhotos(updateArray)
    }

    function addToCart(newItem) {
        setCartItems(items => [...items, newItem])
    }
    
    // console.log('Carro: ', cartItems);

    function removeFromCart(id) {
        setCartItems( prev => prev.filter(item => item.id !== id))
    }


    function emptyCart() {
        setCartItems([])
    }

    

    useEffect(() => {
      
         obtenerImagenes()
        
      
    }, []);
    



    return (

        <Context.Provider 
        value={{allPhotos, toggleFavorite, addToCart, cartItems, removeFromCart, emptyCart}}>
            {children}
        </Context.Provider>

    )



}

export {ContextProvider, Context}
