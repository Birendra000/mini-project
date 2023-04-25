const Productreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_API_DATA": {
      const featureData = action.payload.filter((curElement) => {
        return curElement.featured === true;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    }

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    //FOR SINGLEPRODUCT

    case "SET_SINGLEPAGE_LOADING":
      return {
        ...state,
        isSinglePageloading: true,
      };
    case "SET_SINGLEAPI_DATA":
      return {
        ...state,
        isSinglePageloading: false,
        singleproducts: action.payload,
      };
    case "SINGLE_PAGE_API_ERROR":
      return {
        ...state,
        isSinglePageloading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default Productreducer;
