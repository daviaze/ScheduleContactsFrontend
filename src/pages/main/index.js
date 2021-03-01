import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';
import { Link } from "react-router-dom";
import {Dropdown, DropdownButton, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Main extends Component {

    state = {
        contacts: [],
    };

    
    componentDidMount(){
        this.loadContacts()
    }

    loadContacts = async () => {
        const response = await api.get("/contacts")
        this.setState({ contacts: response.data.docs})

    }

    color = {
        "Pendente": 'yellow',
        "Sem Contato": 'red',
        "Com Sucesso": 'green',
        "Encerrado": 'gray'
    }
    
    render(){
        const { contacts } = this.state;
        return (
            <div className="contact-list" >
            {console.log(this.state.contacts)}
                {contacts.map(contact => (
                    
                    
                    <article key={contact._id} style={{border: `3px solid ${this.color[contact.status]}`}}>

                   <h1> <b>Cód:</b> {contact.cod}</h1> 
                        <h1> <b>Nome:</b> {contact.name}</h1>
                       
                        
                       <p> <b>Tipo:</b> {contact.type}</p>
                        <p> <b>Hora:</b> {contact.time}</p>
                        <p> <b>Status:</b> {contact.status}</p>
                    <p><b>Data:</b> {contact.createdAt}</p>

                        <Button href={`/contacts/${contact._id}`} variant="primary" size="lg" block>
                            Abrir
                         </Button>


                    </article>
                ))}
            </div>
        )
    }
}