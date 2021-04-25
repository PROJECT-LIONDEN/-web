
import React, { useEffect, useState } from "react";
import axios from "axios";
interface IProduct {
    id: number;
	imageUrl: string;
	Name: string;
	Brand: string;
	Price: number;
	Rating: number;
}
const emptyProducts: IProduct[] = [];
function Products(){
    return(
        <div>
            <h2>Products</h2>
        </div>
        products.map((Product) => (li key ={proudct.id}> <div className="product"><img></img>
        </div></li>))}
    );
    const [products, setProducts]: [IProduct[], (products: IProduct[] => void ] = useState(emptyProducts);
    useEffect(() => {
        axios
        .get<IProduct[]>("http://localhost:5001/catalog", {
        headers: {
            "Content-Type": "application/json",
        },
        })
        .then((response) => setProducts(response.data));
    }, []);
}



export default Products;