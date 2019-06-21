import React from 'react';
import { Card, Button, Popover, OverlayTrigger } from 'react-bootstrap';
const popover = (
    <Popover id="popover-basic">
        <ul className="popover-list">
            <li className="popover-item">I don't like this character</li>
            <li className="popover-item">Add to favourites</li>
            <li className="popover-item">Download image</li>
        </ul>
    </Popover>
);

class ImageCard extends React.PureComponent {
    render() {
        const { image, character, gameSeries } = this.props;
        return (
            <>
                <Card className="image-card" >
                    <div className="image-container">
                        <Card.Img src={image} className="image" />
                    </div>
                    <Card.Body className="image-card-body">
                        <Card.Title className="image-card-title">{character}</Card.Title>
                        <OverlayTrigger trigger="click" placement="top" overlay={popover}>
                            <i className="fas fa-ellipsis-v dots-icon"></i>
                        </OverlayTrigger>

                    </Card.Body>
                    <Card.ImgOverlay className="overlay">
                        <Card.Body className="overlay-body">
                            <Card.Text className="overlay-text">
                                This character belongs to game series <span className="overlay-text-series"> {gameSeries.toLowerCase()}</span>
                            </Card.Text>
                            <Button className="overlay-button" size="sm">See more</Button>
                        </Card.Body>
                    </Card.ImgOverlay>
                </Card>
            </>
        );
    }
}



export default ImageCard;