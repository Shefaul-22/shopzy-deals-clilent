import React, { use } from 'react';
import Product from '../Product/Product';

const LatestProducts = ({ LatestProductsPromise }) => {

    const products = use(LatestProductsPromise)
    console.log(products);

    return (
        <div className='my-4 '>
            <h2 className='text-5xl text-center'>Recent 
                <span className='text-primary'> Products</span>
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-6'>
                {
                    products.map(product => <Product key={product._id} product={product}>

                    </Product>)
                }
            </div>
        </div>
    );
};

export default LatestProducts;