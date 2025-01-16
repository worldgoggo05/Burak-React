import { Container } from "@mui/material";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import '../../../css/home.css'



 export default function HomePage() {
    return (
    <div className={"homepage"}>
      <Statistics/>
      <PopularDishes/>
      <NewDishes/>
      <Advertisement/>
    </div>)

    
  }
  