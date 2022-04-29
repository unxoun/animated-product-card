import styled from "@emotion/styled";
import { useEffect, useRef, useContext } from "react";
import { isMobileContext } from "../contexts/is-mobile";
import { animate } from "../tools/animate";

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
  // ====================================
  // Mobile Version:
  // ------------------------------------
  &.is-mobile {
    margin: 0 10px 50px 10px;
    .poster {
      width: 100%;
      padding-bottom: 30px;
    }
    .main {
      width: 100%;
      padding: 0 15px 40px;
      header {
        flex-wrap: wrap;
        .main-info {
          width: 100%;
          padding-right: 0;
          order: 2;
        }
        .details {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          margin-bottom: 18px;
          .rate {
            margin-bottom: 0;
            margin-right: 10px;
          }
        }
      }
    }
    footer {
      .MuiButton-root {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
      }
    }
  }
`;

export default function Product({ productData }) {
  //

  // Rather than writing CSS media queries or using grid-
  // components, I tried the following pattern to handle the-
  // layout responsiveness:
  // Subscribe to "isMobileContext".
  // "isMobileContext" gets updated in the "pages/_app.js", on-
  // screen size change.
  // Here, I use "isMobile" boolean to add/remove the-
  // "is-mobile" CSS class to handle the component's-
  // responsiveness.
  const [isMobile] = useContext(isMobileContext);

  // =================================================================
  // Animations - start
  // I just added this to be more fun. You can ignore this part!
  const $header = useRef(null);
  const $description = useRef(null);
  const $footer = useRef(null);
  useEffect(() => {
    animate([$header, $description, $footer], "fx-1", 250);
  }, [productData]);
  // Animations - end
  // -----------------------------------------------------------------

  if (!productData) return <div className="null" />;

  return (
    <Main className={`${isMobile ? "is-mobile" : ""} box`}>
      <div className="poster">
        <img src={productData.image} />
      </div>
      <div className="main">
        <header ref={$header}>
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
        <div className="description" ref={$description}>
          <div className="title">description</div>
          <p>{productData.description}</p>
        </div>
        <footer ref={$footer}>
          <FancyButton startIcon={<ShoppingCartIcon />}>
            add to cart
          </FancyButton>
        </footer>
      </div>
    </Main>
  );
}
