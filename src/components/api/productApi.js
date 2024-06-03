import client from '../../apollo-client/apollo-client';
import { getAllProducts, getAllBlogs } from '../../config/typeDef';

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

export const fetchTotalBlogs = async () => {
  try {
    const { data } = await client.query({
      query: getAllBlogs,  
    });
    return data.blogs.length; // Ambil panjang array blog
  } catch (error) {
    console.error('Error fetching total blogs:', error);
    return 0;
  }
};
