const fetchProducts = async (params) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${params}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    throw new Error('404 - Algo deu errado na api...');
  }
};

export default fetchProducts;