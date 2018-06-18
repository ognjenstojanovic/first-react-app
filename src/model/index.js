import { 
    // getProducts, 
    getProductById,
  } from '../services/products'


export const initialState = {
    currentPage: 'product-list',
    products: null,
    product: null,
    cart: [],
}


export const types = {
    CLICKED_ON_PRODUCT: 'shop/CLICKED_ON_PRODUCT',
    LOAD_PRODUCT_SUCCESS: 'shop/LOAD_PRODUCT_SUCCESS',
}


export const actions = {
    clickedOnProduct: (productId) => {
        return dispatch => {
            dispatch({
                type: types.CLICKED_ON_PRODUCT,
                payload: productId
            })
            getProductById(productId)
                .then(product => {
                    dispatch(actions.loadProductSuccess(product))
                })
        }
    },
    loadProductSuccess: product => {
        return {
            type: types.LOAD_PRODUCT_SUCCESS,
            payload: product
        }
    }
}




export const reducer = function (state = initialState, action) {
    switch(action.type) {
        case types.CLICKED_ON_PRODUCT:
            return {
                ...state,
                currentPage: 'product-details'
            }
        case types.LOAD_PRODUCT_SUCCESS:
            return {
                ...state,
                currentPage: 'product-details',
                product: action.payload
            }
        default:
            return state
    }
}


export default reducer