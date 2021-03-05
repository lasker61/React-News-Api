import React from 'react';
import {Card,Button} from 'react-bootstrap';

const News = (props) => {
    console.log(props);
    const {author, title , description} =props.article;
    
  
    return (

        <Card>
            <Card.Header>Author: {author}</Card.Header>
            <Card.Body>
                <Card.Title> {title}</Card.Title>
                <Card.Text>
                      {description}
                    </Card.Text>
                <Button variant="primary">See More</Button>
            </Card.Body>
        </Card>

    );
};

export default News;