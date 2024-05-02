import React from 'react'
import './css/products.css'
import sb from './Images/strawberry.png';
import vd from './Images/vanilla.png';
import cd from './Images/choc.png';
import d from './Images/d.png';

const Products = () => {
    return (
        <div className="products">
            <h1>Hot Deals</h1>
            <table>
                <tr>
                    <td>
                        <div class="card">
                            <img src={sb} ></img>
                            <div class="container">
                                <h4><b>Fruity Fantasia</b></h4>
                                <button>Add to Cart</button>
                            </div>
                        </div> 
                    </td>
                    <td>
                        <div class="card">
                            <img src={vd} ></img>
                            <div class="container">
                                <h4><b>Caramel swirls</b></h4>
                                <button>Add to Cart</button>
                            </div>
                        </div> 
                    </td>
                    <td>
                        <div class="card">
                            <img src={cd} ></img>
                            <div class="container">
                                <h4><b>Choco-Chaos</b></h4>
                                <button>Add to Cart</button>
                            </div>
                        </div> 
                    </td>
                    <td>
                        <div class="card">
                            <img src={d} ></img>
                            <div class="container">
                                <h4><b>Coconut crunch</b></h4>
                                <button>Add to Cart</button>
                            </div>
                        </div> 
                    </td>
                </tr>
            </table>
             

        </div>
    )
}
export default Products