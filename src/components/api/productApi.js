import client from '../../apollo-client/apollo-client';
import { getAllProducts } from '../../config/typeDef';

export const fetchTotalProducts = async () => {
  try {
    const { data } = await client.query({
      query: getAllProducts,  
    });
    return data.products.length; // Ambil panjang array produk
  } catch (error) {
    console.error('Error fetching total products:', error);
    return 0;
  }
};
