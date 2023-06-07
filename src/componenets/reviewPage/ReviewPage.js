import { Form,Button } from "react-bootstrap";



const ReviewPage = ({handleSubmitReview, reviewText, labelText, defaultValue}) => {
  return (
    <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>{labelText}</Form.Label>
            <Form.Control ref={reviewText} as="textarea" rows={3} defaultValue={defaultValue} />
        </Form.Group>
        <Button variant="outline-info" onClick={handleSubmitReview}>Submit</Button> 
    </Form>
  )
}

export default ReviewPage