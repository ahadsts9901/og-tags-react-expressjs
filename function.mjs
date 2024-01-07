import axios from "axios";
export const getProductById = (productId) => {
    return new Promise(async(resolve, reject) => {
        try {
            const response = await axios.get(
                `https://fakestoreapi.com/products/${productId}`
            );

            resolve(response.data)
                // console.log(response.data);
        } catch (error) {
            console.log("get product by id error: ", error);
            reject(error);
        }
    });
};

export const baseUrl = "http://localhost:5173";