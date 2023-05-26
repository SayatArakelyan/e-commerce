import React, {useState, useEffect} from 'react';
import {Card, Image, List, Spin, Typography} from 'antd';

import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../redux/reducers/productSlice';
import {useTranslation} from "react-i18next";

function Gallery() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.products);
    const status = useSelector((state) => state.product.status);
    const error = useSelector((state) => state.product.error);
    const {t} = useTranslation()

    useEffect(() => {
        setLoading(true);
        dispatch(fetchProducts());
        setLoading(false);
    }, [ dispatch]);

    // if (status === 'loading') {
    //     return <Spin size="large"/>;
    // }
    //
    // if (status === 'failed') {
    //     return <div>Error: {error}</div>;
    // }



    return (
        <>
            <Typography.Title style={{textAlign: 'center', color: 'white'}}>
                {t("gallery.title")}
            </Typography.Title>

            <List
                loading={loading}
                grid={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6}}
                dataSource={product}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Card>
                            <span>{item.title}</span>
                            <Image src={`http://localhost:4444/${item.image}`}/>
                        </Card>
                    </List.Item>
                )}
            />
        </>
    );
}

export default Gallery;
