import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from 'pages/Dashboard';
import Settings from 'pages/Settings';
import Tables from 'pages/Tables';
import Maps from 'pages/Maps';
import Footer from 'components/Footer';
import AdminInformations from 'components/AdminInformations';
import AdminReclamations from 'components/AdminReclamations';
import ProfileService from 'pages/ProfileService';
import AdminAjout from 'components/AdminAjout';
import Login from 'pages/Login';
import ChefDepartement from 'pages/Chefdepartement';

// Tailwind CSS Style Sheet
import 'assets/styles/tailwind.css';
import { Navbar } from '@material-tailwind/react';

function App() {
    return (
        <>
            <div className="md:ml-64">
                <Switch>   
                    <Route path="/chefs/:id" component={ChefDepartement} />
                    <Route exact path="/profileService/:id" component={ProfileService} />
                    <Route path="/Admin/infos" component={AdminInformations} />
                    <Route path="/Admin/reclamations" component={AdminReclamations} />
                    <Route path="/Admin/Ajout" component={AdminAjout} />
                    <Route path="/login" component={Login} />
                    <Redirect from="/*" to="/" />
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
