import React from "react";
import Business from "../Business/Business";
import styled from "styled-components";

const BusinessListDiv = styled.div`
  display: flex;
  justify-content: space - around;
  flex-wrap: wrap;
  margin: 4.4rem 10 %;
`;

class BusinessList extends React.Component {
  render() {
    return (
      <BusinessListDiv className="BusinessList">
        {this.props.businesses.map(business => {
          return <Business business={business} key={business.id} />;
        })}
      </BusinessListDiv>
    );
  }
}

export default BusinessList;
