import styled from "@emotion/styled";
import { useEffect, useRef } from "react";

// Components
import Rating from "@mui/material/Rating";
import FancyButton from "./fancy-button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

// Styles
// I used CSS In JS but-
// sometimes it's better to seperate the styles from the component; depends!
const Main = styled.section`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 0 50px 0;
  .poster {
    width: 33%;
    display: flex;
    align-items: flex-start;
    padding: 60px 30px;
  }
  .main {
    width: 67%;
    padding: 50px 30px 50px 10px;
    header {
      display: flex;
      flex-direction: row;
      .main-info {
        flex-grow: 1;
        padding-right: 20px;
      }
      h2 {
        font-size: 26px;
        color: #333;
      }
      h3 {
        font-size: 16px;
        color: #ccc;
      }
      .price {
        color: #e29d9f;
        font-weight: bold;
      }
      .rate {
        margin-bottom: 3px;
        .MuiRating-root {
          color: #eb656d;
        }
      }
      .votes-count {
        display: flex;
        align-items: center;
        .icon {
          margin-right: 5px;
        }
      }
    }
    .description {
      margin-top: 40px;
      .title {
        color: #333;
      }
      p {
        color: #999;
        margin-top: 8px;
        font-size: 14px;
      }
    }
    footer {
      margin-top: 40px;
    }
  }
`;

export default function Product({ productData }) {
  //

  if (!productData) return <div className="null" />;

  return (
    <Main>
      <div className="poster">
        <img src={productData.image} />
      </div>
      <div className="main">
        <header>
          <div className="main-info">
            <h2>{productData.title}</h2>
            <h3>{productData.category}</h3>
            <div className="price">${productData.price}</div>
          </div>
          <div className="details">
            <div className="rate">
              <Rating
                value={productData.rating?.rate}
                precision={0.1}
                size="small"
                readOnly
              />
            </div>
            <div className="votes-count" title="Voters Count">
              <PeopleAltIcon className="icon" />
              {productData.rating?.count}
            </div>
          </div>
        </header>
        <div className="description">
          <div className="title">description</div>
          <p>{productData.description}</p>
        </div>
        <footer>
          <FancyButton startIcon={<ShoppingCartIcon />}>
            add to cart
          </FancyButton>
        </footer>
      </div>
    </Main>
  );
}
