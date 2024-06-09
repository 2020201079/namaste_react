import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import resList from "../utils/mockData";

const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]); // creating a state variable
    const [searchText,setSearchText] = useState("");
    const [filteredListOfRestaurants,setFilteredListOfRestaurants] = useState([]);
    useEffect(() => {fetchData()},[])
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.964927&lng=77.7269086&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)
        setListOfRestaurants(resList)
        setFilteredListOfRestaurants(resList) 
    }
    if(listOfRestaurants.length === 0){
        return <h1>Loading...</h1>
    }

    return (
        <div className="body">
            <div className="filter">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                }}/>
                <button onClick={()=>{
                    // Filter the res cards based on the search text
                    const filteredList = listOfRestaurants.filter((res) => res.resName.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredListOfRestaurants(filteredList)
                }}>Search</button>
                <button 
                    className="filter-btn"
                    onClick={()=>{
                                console.log("Top Rated Restaurants Clicked")
                                //filter logic.
                                console.log(listOfRestaurants)
                                const filteredList = listOfRestaurants.filter((res) => res.rating > 4)
                                setListOfRestaurants(filteredList)
                                console.log(resList)
                            }
                            }>
                        Top Rated Restaurants
                </button>    
            </div>

            <div className="res-container">
                {
                    filteredListOfRestaurants.map((resData) => {
                        return <RestaurantCard resData={resData}/>
                    })
                }
            </div>
        </div>
    )
}

export default Body;