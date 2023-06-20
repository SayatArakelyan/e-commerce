import React, {useState, useEffect} from 'react';
import {Card, Image, List, Typography} from 'antd';
import useQuery from '../utils/useQuery';
import {useSelector, useDispatch} from 'react-redux';
import {fetchProducts} from '../redux/reducers/productSlice';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';

import Pagination from '../components/Pagination';

function Gallery() {
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const product = useSelector((state) => state.product.products);
    const {t} = useTranslation();
    let query = useQuery();
    const [currentPage, setCurrentPage] = useState(query.get('page') || 1);
    const [projectPerPage] = useState(4);

    useEffect(() => {
        setLoading(true);
        dispatch(fetchProducts());
        setLoading(false);
    }, [dispatch]);

    const lastProjectIndex = currentPage * projectPerPage;
    const firstProjectIndex = lastProjectIndex - projectPerPage;
    const currentProject = product.slice(firstProjectIndex, lastProjectIndex);

    const paginate = (pageNumber) => {
        navigate({
            pathname: '/gallery',
            search: `?page=${pageNumber}`,
        });
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <Typography.Title style={{textAlign: 'center', color: 'white'}}>
                {t('gallery.title')}
            </Typography.Title>

            <List
                loading={loading}
                grid={{xs: 1, sm: 2, md: 3, lg: 4, xl: 5, xxl: 6}}
                dataSource={currentProject}
                renderItem={(item) => (
                    <List.Item key={item.id}>
                        <Card>
                            <span>{item.title}</span>
                            <Image src={`http://localhost:4444/${item.image}`} style={{height:"400px",objectFit:"cover"}}/>
                        </Card>
                    </List.Item>
                )}
            />

            <Pagination projectPerPage={projectPerPage} totalProjects={product.length} paginate={paginate}/>
        </>
    );
}

export default Gallery;
