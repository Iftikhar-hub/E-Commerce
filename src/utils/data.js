import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'; 

// products Images

import HAVIT from '../assets/products/HAVIT.svg';
import keyboard from '../assets/products/keyboard.svg';
import tv from '../assets/products/tv.svg';
import chair from '../assets/products/chair.svg';

// category icons
import CellPhone from '../assets/categpry/CellPhone.svg'
import computer from '../assets/categpry/computer.svg'
import watch from '../assets/categpry/watch.svg'
import camera from '../assets/categpry/camera.svg'
import headphone from '../assets/categpry/headphone.svg'
import gamepad from '../assets/categpry/gamepad.svg'

// Selling products Images

import redCoat from '../assets/sellingProducts/redCoat.svg'
import bag from '../assets/sellingProducts/bag.svg'
import cooler from '../assets/sellingProducts/cooler.svg'
import bookSelf from '../assets/sellingProducts/bookSelf.svg'

// Our Products Images

import dryFruit from '../assets/ourProduct/dryFruit.png'
import cameraa from '../assets/ourProduct/cameraa.png'
import laptop from '../assets/ourProduct/laptop.png'
import shampo from '../assets/ourProduct/shampo.png'


// Products Images Array
export const ProductIcons = [
    {
        image: HAVIT,
        name: 'HAVIT HV-G92 Gamepad',
        price: '$120',
        discounted: '$160'
    },
    {
        image: keyboard,
        name: 'AK-900 Wired Keyboard',
        price: '$960',
        discounted: '$1160'
    },
    {
        image: tv,
        name: 'IPS LCD Gaming Monitor',
        price: '$370',
        discounted: '$400'
    },
    {
        image: chair,
        name: 'S-Series Comfort Chair ',
        price: '$375',
        discounted: '$450'
    },
    {
        image: chair,
        name: 'S-Series Comfort Chair ',
        price: '$475',
        discounted: '$550'
    },
 
   

]

// Category Icons Array
export const categoryItems = [
    {
        categoryImage: CellPhone,
        categoryName: 'Phones'
     },
    {
        categoryImage: computer,
        categoryName: 'Computers'
     },
    {
        categoryImage: watch,
        categoryName: 'Smart Watch'
     },
    {
        categoryImage : camera,
        categoryName: 'Camera'
     },
    {
        categoryImage: headphone,
        categoryName: 'Headphones'
     },
    {
        categoryImage: gamepad,
        categoryName: 'Gaming'
     },
]

// Selling Products Array
export const sellingItems = [
    {
        id: "1",
        sellingImage: redCoat,
        sellingName: 'The north coat',
        sellingPrice: '$120',
        sellingDiscounted: '$160',
        sellingDescription:'Description Will show here'
    },

    {
        id: "2",
        sellingImage: bag,
        sellingName: 'Gucci duffle bag',
        sellingPrice: '$960',
        sellingDiscounted: '$1160',
        sellingDescription: 'Brera combines effortless elegance and versatility. Crafted from structured yet lightweight GG canvas'
    },
    {
        id: "3",
        sellingImage: cooler,
        sellingName: 'RGB liquid CPU Cooler ',
        sellingPrice: '$335',
        sellingDiscounted: '$430',
        sellingDescription: 'Description Will show here'

    },
    {
        id: "4",
        sellingImage: bookSelf,
        sellingName: 'Small BookSelf ',
        sellingPrice: '$375',
        sellingDiscounted: '$450',
        sellingDescription:'Description Will show here'
    },
]

// Our Products Array

export const upperitems = [
    {
        upperImage: dryFruit,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: cameraa,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: laptop,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: shampo,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: laptop,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: shampo,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: laptop,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
    {
        upperImage: shampo,
        upperName: 'The north coat',
        upperPrice: '$120',
       
    },
]

export const socialMediaIcons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin]



export const BASE_URL = import.meta.env.VITE_BASE_URL ;