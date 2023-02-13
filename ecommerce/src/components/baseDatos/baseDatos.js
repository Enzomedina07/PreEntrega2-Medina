import book1 from '../../assets/productos/book1.jpg';
import book2 from '../../assets/productos/book2.jpg';
import metal from '../../assets/productos/dices.png';
import orange from '../../assets/productos/goldendice.png';
import mage from '../../assets/productos/magemini.webp';
import beholder from '../../assets/productos/beholder.png';
import bluedice from '../../assets/productos/bluedice.png';
import minis from '../../assets/productos/minis.jpg';

export const arregloProductos = [
    {id:1, title: "Treasury of Dragons", price: 200, pictureUrl: book1, categoria:"libros"},
    {id:2, title: "Monster of the multiverse", price: 230, pictureUrl: book2, categoria:"libros"},
    {id:3, title: "Metal dice", price: 60, pictureUrl: metal, categoria:"dados"},
    {id:4, title: "Orange dice", price: 40, pictureUrl: orange,categoria:"dados"},
    {id:5, title: "Mage mini", price: 50, pictureUrl: mage,categoria:"minis"},
    {id:6, title: "Beholder mini", price: 70, pictureUrl: beholder, categoria:"minis"},
    {id:7, title: "Blue dice", price: 40, pictureUrl: bluedice,categoria:"dados"},
    {id:8, title: "Random mini", price: 20, pictureUrl: minis,categoria:"minis"},
]