import Jeans from '../../assets/Jeans.png'
import Hoodie from '../../assets/hoodie.png'
import LeatherJacket from '../../assets/leather-jacket.png'
import Skirt from '../../assets/skirt.png'
import TShirt from '../../assets/tshirt.png'
import Sleepsuit from '../../assets/sleepsuit.png'
import Shirt from '../../assets/shirt.png'
import Dress from '../../assets/dress.png'
import Skater from '../../assets/skater.png'
import Sweater from '../../assets/sweater.png'
import BabyShirt from '../../assets/baby-shirt.png'
import ShirtDress from '../../assets/shirt-dress.png'

const products = [
    {
        id:1,
        name:'Sports TShirt',
        image:TShirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        newArrival: false,
        category:"Mens",
    },
    {
        id:2,
        name:'Slim Fit Jeans',
        image:Jeans,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        newArrival: false,
        category:"Mens",
    },
    {
        id:3,
        name:'Leather Jacket',
        image:LeatherJacket,
        price: 99.99,
        oldPrice: 129.99,
        onSale: false,
        newArrival: false,
        category:"Mens",
    },
    {
        id:4,
        name:'Skater',
        image:Skater,
        price: 48.00,
        oldPrice: 55.99,
        onSale: true,
        newArrival: false,
        category:"Womens",
    },
    {
        id:5,
        name:'Dress',
        image:Dress,
        price: 20.99,
        oldPrice: 30.99,
        onSale: false,
        newArrival: false,
        category:"Kids",
    },
    {
        id:6,
        name:'Long Sleeve shirt',
        image:Shirt,
        price: 45.99,
        oldPrice: 55.99,
        onSale: false,
        newArrival: false,
        category:"Mens",
    },
    {
        id:7,
        name:'Sleepsuit',
        image:Sleepsuit,
        price: 15.99,
        oldPrice: 25.99,
        onSale: true,
        newArrival: false,
        category:"Kids",
    },
    {
        id:8,
        name:'Skirt',
        image:Skirt,
        price: 25.99,
        oldPrice: 35.99,
        onSale: true,
        newArrival: false,
        category:"Womens",
    },
    {
        id:9,
        name:'Sweater',
        image:Sweater,
        price: 35.99,
        oldPrice: 44.99,
        onSale: true,
        newArrival: true,
        category:"Womens",
    },
    {
        id:10,
        name:'Baby Shirt',
        image:BabyShirt,
        price: 12.99,
        oldPrice: 15.99,
        onSale: false,
        newArrival: true,
        category:"Kids",
    },
    {
        id:11,
        name:'Hoodie',
        image:Hoodie,
        price: 25.00,
        oldPrice: 45.00,
        onSale: true,
        newArrival: false,
        category:"Mens",
    },
    {
        id:12,
        name:'Full sleeve Shirt',
        image:ShirtDress,
        price: 10.99,
        oldPrice: 38.99,
        onSale: true,
        newArrival: false,
        category:"Womens",
    },
    
]

export default products