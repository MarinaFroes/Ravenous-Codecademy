import React from "react";
import styled from "styled-components";

const BusinessDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 16.66rem;
  margin: 0 0.5rem 2.3rem 0.5rem;
`;

const ImageContainer = styled.img`
  height: 16.66rem;
  margin-bottom: 1rem;
`;

const BusinessName = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const BusinessInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.p`
  font-size: 0.88rem;
  font-weight: 300;
  line-height: 1rem;
`;

const BusinessAddress = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const BusinessReviews = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  .Business-reviews h3 {
    color: #cca353;
    font-weight: 600;
  }

  .Business-reviews .rating {
    font-size: 0.88rem;
    line-height: 1rem;
  }
`;

class Business extends React.Component {
  render() {
    return (
      <BusinessDiv className="Business">
        <ImageContainer className="image-container">
          <img src={this.props.business.imageSrc} alt="" />
        </ImageContainer>
        <BusinessName>{this.props.business.name}</BusinessName>
        <BusinessInfo className="Business-information">
          <BusinessAddress className="Business-address">
            <Info>{this.props.business.address}</Info>
            <Info>{this.props.business.city}</Info>
            <Info>
              {this.props.business.state} {this.props.business.zipCode}
            </Info>
          </BusinessAddress>
          <BusinessReviews className="Business-reviews">
            <h3>{this.props.business.category}</h3>
            <h3 className="rating">{this.props.business.rating} stars</h3>
            <p>{this.props.business.reviewCount} reviews</p>
          </BusinessReviews>
        </BusinessInfo>
      </BusinessDiv>
    );
  }
}

export default Business;
