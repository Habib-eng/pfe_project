import SidebarChef from "components/SidebarChef";
import { Switch, Route, Router } from "react-router-dom";
import { useParams } from "react-router-dom";
import Reclamations from "components/ChefDepartement/Reclamations";
import ProfileCard from "components/ProfileCard";
import Satisfactions from "components/ChefDepartement/Satisfactions";

export default function ChefDepartement() {

    const { id } = useParams();
    return (
            <div>
            <SidebarChef
            idChef={id} 
            />
                <Switch>
                    <Route exact path="/chefs/:id/reclamations" component={Reclamations}></Route>
                    <Route exact path="/chefs/:id/satisfaction" component={Satisfactions}></Route>
                </Switch>
            <div className="px-24 m-24">
            </div>
            </div>
        
    );
  }
  
  