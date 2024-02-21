const calculateAvgRating = reviews =>{
     const totalRating = reviews?.reduce((acc,itm)=> acc + itm.rating,0)

     const avgRatings = 
     totalRating === 0 ? ''
     : totalRating === 1 
     ? totalRating 
     : (totalRating /  reviews?.length).toFixed(1);

     return {

     totalRating,
     avgRatings
     }
}
export default calculateAvgRating;