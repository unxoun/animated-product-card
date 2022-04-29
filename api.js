const api = {
    baseURL: () => "https://fakestoreapi.com/",
    get: {
      product: (productID) => api.baseURL() + "products/" + productID,    
    },
  };
  export default api;