import axiosClient from './axiosClient';

const checkoutApi = {
  async addToCart(body) {
    return await axiosClient.post('/add-to-cart', body);
  },

  async getCartIdUser(idUser) {
    return await axiosClient.get(`/get-carts/${idUser}`);
  },
  payMethod(params) {
    const url = '/checkout';
    return axiosClient.post(url, {params: params});
  },

  orderDetails(params) {
    const url = '/orders/details';
    return axiosClient.post(url, {params: params});
  },

  getIdOrder() {
    const url = '/orders/getIdOrder';
    return axiosClient.get(url);
  },
};

export default checkoutApi;
