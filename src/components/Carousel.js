import { Carousel } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';


const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#fff',
};

function Slider() {
    const products = useSelector((state) => state.product.products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);





    return (
        <Carousel autoplay>
            {products.map((product, index) => (
                <div key={index}>

                        <img
                            src={`http://localhost:4444/${product.image}`}
                            alt="Product"
                            style={{ ...contentStyle, width: '100%', height: '500px', objectFit: 'contain' }}
                        />



                </div>
            ))}
        </Carousel>
    );
}

export default Slider;
