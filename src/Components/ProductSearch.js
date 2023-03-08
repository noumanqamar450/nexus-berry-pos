import { Search } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ProductSearch = () => {
  return (
    <>
      <InputGroup className="my-4">
        <Form.Control
          placeholder="Product Search using Name or Code"
          aria-label="Product Search"
          aria-describedby="basic-addon2"
        />
        <Button variant="primary" id="button-addon2">
          <Search/>
        </Button>
      </InputGroup>
    </>
  )   
}

export default ProductSearch;