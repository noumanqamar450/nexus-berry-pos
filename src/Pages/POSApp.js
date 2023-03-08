import { Row, Col } from "react-bootstrap";
import Calculation from "../Components/Calculation";
import ProductList from "../Components/ProductList";

function POSApp() {
  
  return (
    <>
      <Row>
        <Col md={8} className="pb-5">
          <ProductList/>
        </Col>
        <Col md={4}>
          <div className="calculator">
            <Calculation/>
          </div>
        </Col>
      </Row>
    </>
  )

}

export default POSApp;
