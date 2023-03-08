import { Col, Row } from "react-bootstrap";
import Products from "./Products";
import ProductSearch from './ProductSearch'
import { products } from "../Data/Data";

const ProductList = () => {

    
    return(
        <>
        <ProductSearch/>
        <Row>
            {
                products.map((p,i) => (
                    <Col key={ i } md={4}>
                        <Products thumbnail={p.thumbnail} title={p.title} price={p.price} id={p.id} stock={p.stock}/>
                    </Col>
                ))
            }
        </Row>
        </>
    )
}

export default ProductList;