import React, { useState } from 'react'
import { Button, Col, Form, FormGroup } from 'react-bootstrap'
import Rater from './Rater';

const Feedback = (props) => {

    const [body, setBody] = useState("");
    const [rating, setRating] = useState("5");
    const [feedbackAck, setFeedbackAck] = useState("Thanks for your valuable feedback..")

    const handleFeedbackChange = (e) => {
        setBody(e.target.value);
    }

    const handleClick = (rating) => {
        if (rating === 4) {
            setFeedbackAck("Thanks for your valuable feedback..");
        }
        if (rating < 4) {
            setFeedbackAck("Thanks for your valuable feedback, we will look into the issue.");
        }
        setRating(rating)
    }

    const feedbackSubmitHandler = () => {
        props.onFeedback(rating, body, feedbackAck);
        setBody("");
        setRating("5");
        setFeedbackAck("");
    }

    let items = [];

    props.feedbacks.forEach((fb, index) => {
        items.push(
            <div key={index}>
                <h4>{fb.user}</h4>
                <Rater value={fb.rating} maxLength="6" />
                &nbsp; &nbsp;
                <span style={{ fontSize: "9px" }}>{fb.rating}</span>
                <br />
                <div style={{ paddingBottom: "10px" }}>{fb.body}</div>
                <div style={{ marginLeft: "20px" }}>{fb.feedbackAck}</div>
            </div>
        )
    })

    return (
        <>
            {items}
            <Form>
                <div className='form-group'>
                    <textarea className='form-control' rows={5} cols={12} value={body} onChange={handleFeedbackChange}></textarea>
                </div>

                <div>
                    <Rater value={rating} maxLength="6" onSelected={handleClick} /> &nbsp; &nbsp; &nbsp;
                    <span style={{ fontSize: "9px" }}>{rating}</span>
                </div>
                <br/>
                <FormGroup>
                    <Col sm={8}>
                        <Button variant="primary" onClick={feedbackSubmitHandler}>
                            Submit Feedback
                        </Button>
                    </Col>
                </FormGroup>
                
            </Form>
        </>
    )
}

export default Feedback
