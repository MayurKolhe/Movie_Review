import { useEffect, useRef } from "react";
import api from "../../client_api/axiosConfig";
import { Container, Row, Col } from "react-bootstrap";
import ReviewPage from "../reviewPage/ReviewPage";
import {useParams} from "react-router-dom";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const reviewText = useRef();
  let params = useParams();
  const movieId = params.movieId;
  useEffect(() => {
    getMovieData(movieId);
  }, []);

  const addReview = async (e) => {
    e.preventDefault();
    const review = reviewText.current;

    try
    {
        const response = await api.post(`/api/v1/reviews`,{reviewBody:review.value, imdbId:movieId});
        console.log(response);
        const updatedReview = [...reviews, {body:review.value}];
        review.value = '';
        setReviews(updatedReview);
    }
    catch (err){
        console.error(err);
    }
  }
  return (
    <container >
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <img src={movie?.poster} alt="" />
        </Col>
        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewPage
                    handleSubmitReview={addReview}
                    reviewText={reviewText}
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
          {reviews?.map((review) => {
            return (
              <>
                <Row>
                  <Col>{review.body}</Col>
                </Row>
                <Row>
                  <Col>
                    <hr />
                  </Col>
                </Row>
              </>
            );
          })}
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </container>
  );
};

export default Reviews;
