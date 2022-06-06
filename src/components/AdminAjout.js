import React from "react";
import AdminSidebar from "./AdminSidebar";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Input from '@material-tailwind/react/Input';
import { Textarea } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import axios from "axios";

class AdminAjout extends React.Component {

	// Constructor
	constructor(props) {
		super(props);
		this.state = {};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        var val = event.target.value;
        let key = event.target.name;
        switch (key) {
            case "nom":
                this.setState({nom :val})
                break;
            case "prenom":
                this.setState({prenom:val})
                break;
            case "mobile":
                this.setState({mobile:val})
                break;    
            case "email":
                this.setState({email:val})
                break;
            case "description":
                this.setState({description:val})
                break;
            case "role":
                this.setState({role:val})
                break;
            case "departement":
                this.setState({departement:val})
                break;
            default:
                break;
        }
    }
    handleSubmit(event) {
        alert('Le nom a été soumis : ');
        event.preventDefault();
        //faire un appel api backend avec axios
        axios.post("http://localhost:3002/employer_liste",this.state).then((res) => console.log(res));
    }
    render() {
        return (
        <div className="m-64 mt-8">
        <AdminSidebar />
        <Card>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-center text-2xl">Ajouter un membre</h2>
                </div>
            </CardHeader>
            <CardBody>
                <form onSubmit={this.handleSubmit} value={this.state.value}>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Informations Générales  
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                onChange={this.handleChange}
                                name="nom"
                                type="text"
                                color="purple"
                                placeholder="Nom"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                onChange={this.handleChange}
                                name="prenom"
                                type="text"
                                color="purple"
                                placeholder="Prenom"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <Input
                                onChange={this.handleChange}
                                name="email"
                                type="email"
                                color="purple"
                                placeholder="Adresse email"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <Input
                                onChange={this.handleChange}
                                name="mobile"
                                type="text"
                                color="purple"
                                placeholder="Téléphone Mobile"
                            />
                        </div>
                    </div>
                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Informations Professionels
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-6/12 pr-4 mb-10 font-light">
                            <label for="name-with-label" class="mb-8 text-gray-700">
                                Role
                            </label>
                            <select name="role" onChange={this.handleChange} class="block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                                <option value="Admin" class="text-gray-400">
                                    Admin
                                </option>
                                <option value="AdminDAF">
                                    Admin DAF
                                </option>
                                <option value="DirecteurTechnique">
                                    Directeur Technique 
                                </option>
                                <option value="Employer">
                                    Employer
                                </option>
                                <option value="Client">
                                    Client
                                </option>
                                <option value="Ressource">
                                    CHef Departement Ressource Humaines
                                </option>
                                <option value="goldfish">
                                    Chef Service
                                </option>
                                <option value="goldfish">
                                    Chef Departement 
                                </option>
                            </select>
                        </div>
                        <div className="w-full lg:w-6/12 pl-4 mb-10 font-light">
                            <label for="name-with-label" class="mb-8 text-gray-700">
                                Choisir un département
                            </label>
                            <select onChange={this.handleChange} name="departement" class="block w-96 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500">
                                <option class="text-gray-400" value="R&D">
                                    R&D
                                </option>
                                <option  value="Déploiement">
                                    Déploiement
                                </option>
                                <option value="RH">
                                    RH
                                </option>
                                <option value="Achats">
                                    Achats
                                </option>
                                <option value="DAF">
                                    DAF
                                </option>
                            </select>
                        </div>
                    </div>
                    <h6 className="text-purple-500 text-sm my-6 font-light uppercase">
                        Description
                    </h6>
                    <div className="flex flex-wrap mt-10 font-light">
                        <Textarea 
                        name="description"
                        color="purple"
                        placeholder="Description"
                        onChange={this.handleChange}
                        />
                    </div>
                    <div className='mt-8 flex justify-center'>
                        <Button
                            variant="gradient"
                            buttonType="submit"
                        >
                            Ajouter
                        </Button>
                    </div>  
                </form>
            </CardBody>
        </Card>
        </div>
    );
}
}

export default AdminAjout;
