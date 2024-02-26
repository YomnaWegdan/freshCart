
function addToCart(productId){
    return axios.post(`https://ecommerce.routemisr.com/api/v1/cart` , 
    {productId:productId},
    {
        headers:{
            token:localStorage.getItem('userToken')
        }
    }).then(response => response).catch(error=> error)
  }