import { Carousel, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/reducers/productSlice';
import { API_URL } from '../constants/api';

const contentStyle = {
    height: '500px',
    color: '#fff',
    lineHeight: '500px',
    textAlign: 'center',
    background: '#364d79',
};

function Slider() {
    const products = useSelector((state) => state.product.products);
    const status = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    // if (status === 'loading') {
    //     return <Spin size="large" />;
    // }
    //
    // if (status === 'failed') {
    //     return <div>Error: {error}</div>;
    // }



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
