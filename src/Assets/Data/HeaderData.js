import img1_1  from '../Img/Sample_Product_Image4-28@2x.webp'
import img1_2  from '../Img/Sample_Product_Image8-21_360x.webp'
import img2_1  from '../Img/Samsung-Gear-S2_360x.webp'
import img2_2  from '../Img/Samsung-Gear-S2-2_360x.webp'
import img3_1  from '../Img/Crescione-Aclla-Cress_360x.webp'
import img3_2  from '../Img/Crescione-Aclla-Cress-2_360x.webp'

export const headerData = [
    {
        id: 1,
        stock: 5,
        name: "# SayHisName T-Shirt",
        coverPhoto: img1_1,
        images: [
            {
                id:1,
                image: img1_2
            }
        
        ],
        price: 35.00
    },
    {
        id: 2,
        stock: null,
        name: "Accurist Mens Accurist London",
        coverPhoto: img2_1,
        images: [
            {
                id:1,
                image: img2_2
            }
        
        ],
        price: 245.00
    },
    {
        id: 3,
        stock: 10,
        name: "Aclla Cress",
        coverPhoto: img3_1,
        images: [
            {
                id:1,
                image: img3_2
            }
        
        ],
        price: 12.00
    },
]