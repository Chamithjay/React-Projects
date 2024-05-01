import React from 'react'
import './css/products.css'
import sb from './Images/strawberry.jpg';

const Products = () => {
    return (
        <div>
             <div class="card">
                <img src={sb} ></img>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div> 

        </div>
    )
}
export default Products