import React, {useEffect, useState} from 'react';
import {IProduct} from "../interfake/interface";
import axios from "axios";
import ProductCard from "../Example/ProductCard";

const Product = () => {
    const [user, setUser] = useState<IProduct[]>([])

    const getProduct = async () => {
        try {
            const response = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=12')
            const {data} = await response
            setUser(data)
        }catch (e){
            console.log(e)
        }
    }
    useEffect(() => {
        getProduct()
    },[])
    console.log(user[0])
    return (
        <div className="flex items-center justify-around flex-wrap">
            {
                user.map(el => (
                   <div>
                       <ProductCard product={el}/>
                   </div>
                ))
            }
        </div>
    );
};

export default Product;