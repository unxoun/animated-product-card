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
import Product from "../../components/product";

export default function ProductPage() {
  //

  // get the product id from the query string:
  const router = useRouter();
  const productID = Number(router.query?.productID);

  //
  const [productData, setProductData] = useState(null);

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
    }
  };

  useEffect(() => {
    let ignore = false;
    if (productID) {
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
      <Product productData={productData} />
    </>
  );
}
