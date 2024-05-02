import React from 'react'
import './css/products.css'
import sb from './Images/strawberry.png';

const Products = () => {
    return (
        <div>
             <div class="card">
                <img src={sb} ></img>
                <div class="container">
                    <h4><b>Strawberry Sufganiot</b></h4>
                </div>
            </div> 

        </div>
    )
}
export default Products