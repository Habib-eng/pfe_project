import React from "react";
import AdminSidebar from "./AdminSidebar";
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import StatusCard from "./StatusCard";
import axios from "axios";

class AdminInformations extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
        this.handleClick = this.handleClick.bind(this);
	}

    handleClick(e) {
            console.log(e.target.id);
            (async () => {
                const response = await axios.delete("http://localhost:3002/employer_liste/"+e.target.id);
            })(); 
    }
	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
    "http://localhost:3002/employer_liste")
			.then((res) => res.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				});
			});
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return <div>
			<h1> Pleses wait some time.... </h1> </div> ;
		return (
		<div className = "md:m-10">
            <AdminSidebar />
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 mb-4">
            <StatusCard
                            color="pink"
                            icon="work"
                            title="Département R&D"
                            percentage="30"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="pink"
                            icon="work"
                            title="Département RH"
                            percentage="30"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="orange"
                            icon="poll"
                            title="Departement Déploiment"
                            percentage="10"
                            percentageIcon="arrow_upward"
                            percentageColor="red"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="purple"
                            icon="paid"
                            title="Département Achats"
                            percentage="30"
                            percentageIcon="arrow_upward"
                            percentageColor="orange"
                            date="Réclamations"
                        />
                        <StatusCard
                            color="blue"
                            icon="groups"
                            title="Departement DAF"
                            percentage="12"
                            percentageIcon="arrow_upward"
                            percentageColor="green"
                            date="Récalamtions"
                        />
            </div>
            <Card>
                <CardHeader color="blue" contentPosition="none">
                    <div className="w-full flex items-center justify-between">
                        <h2 className="text-white text-2xl">Liste des employers</h2>
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            style={{ padding: 0 }}
                        >
                            See More
                        </Button>
                    </div>
                </CardHeader>
                <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    ID
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Nom & prénom
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Email
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Mobile
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Département
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Role
                                </th>
                                <th className="px-2 text-teal-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                                    Description
                                </th>
                            </tr>
                        </thead>
                        <tbody>
			{
				items.map((item) => (
                <tr>
                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.id}
                    </th>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.nom } {item.prenom}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.email}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.mobile}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.departement}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.role}
                    </td>
                    <td className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                        {item.description}
                    </td>
                    <td>
                        <Button  
                        onClick = {this.handleClick}
                        id = {item.id}
                        >
                        Supprimer
                        </Button> 
                    </td>
                </tr>    
				))
			}
            </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
		</div>
	);
}
}
export default AdminInformations;
