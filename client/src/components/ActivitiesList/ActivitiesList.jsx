import React from "react";
import { useSelector } from "react-redux";
import Activity from "../Activity/Activity.jsx";
import NavBar from "../NavBar/NavBar.jsx";
import "./ActivitiesList.css";

export default function ActivitiesList() {
  const activities = useSelector((state) => state.activities);
  return (
    <div className="activityListContainer">

      <div>
        <NavBar />
      </div>
      <div className="activityCardListContainer">{
        activities.length !== 0 ?
        activities?.map((acc) => {
          
          return (
         
            <div className="activityCardList" key={acc.name}>
              <Activity
                name={acc.name}
                duration={acc.duration}
                season={acc.season}
                difficulty={acc.difficulty}
              />
            </div> 
            
          )
        })
      : <div>
        <p className="pp">Aun no hay actividades</p>
      </div>
      }: 
      </div>
      
      
      
    </div>
  );
}