//==========================================================
//==========================================================
//==========================================================
//==========================================================
//==========================================================
// 1. Reads "productID" from the browser's router.
// 2. Fetches data based on the "productID".
// 3. Updates productData and seoData states basted on the-
//    fetched data.
//==========================================================

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import api from "../../api";
import axios from "axios";

// Components
import Head from "next/head";
import Pagination from "../../components/pagination";
import Product from "../../components/product";
import ProgressIndicator from "../../components/progress-indicator";

export default function ProductPage() {
  //

  // get the product id from the query string:
  const router = useRouter();
  const productID = Number(router.query?.productID);

  //
  const [productData, setProductData] = useState(null);

  // to show some "Loading..." while the data is being fetched:
  // (long name!)
  const [progressIndicatorVisibility, setProgressIndicatorVisibility] =
    useState(true);

  //
  const [seoData, setSEOData] = useState(null);

  const fetchData = async (productID, ignore) => {
    const result = await axios(api.get.product(productID));
    if (!ignore) {
      if (result.data) {
        setProductData(result.data);
        setSEOData({
          pageTitle: result.data.title,
          pageDescription: result.data.description,
        });
      } else {
        // Handle null responses:
        router.push("/not-found");
      }
      setProgressIndicatorVisibility(false);
    }
  };

  useEffect(() => {
    let ignore = false;
    if (productID) {
      setProgressIndicatorVisibility(true);
      fetchData(productID, ignore);
    }
    return () => {
      ignore = true;
    };
  }, [productID]);

  // productID not present yet.
  // Trying to read productID from the router...
  if (!productID) return null;

  return (
    <>
      <Head>
        <title>{seoData?.pageTitle}</title>
        <meta name="description" content={seoData?.pageDescription} />
      </Head>
      <ProgressIndicator
        visibility={progressIndicatorVisibility}
        message="It is being loaded... .. ."
      />
      <Product productData={productData} />
      <Pagination page={productID} route="products" />
    </>
  );
}
