const RestaurantCard = (props) => {
    const {resData} = props
    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo" 
                src = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hpncnz3sfv3gigsukkts"/>
            <h3>{resData.resName}</h3>
            <h4>{resData.cuisine} </h4>
            <h4>{resData.rating}</h4>
            <h4>38 mins</h4>
        </div>
    )
}

export default RestaurantCard;