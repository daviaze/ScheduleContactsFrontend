import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css"
import {Select, MenuItem, InputLabel, TextField, NativeSelect, FormControl, Box, Button, Icon} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

export default class ContactHistoric extends Component {
    state = {
        contact: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/contacthistoric/${id}`)

        this.setState({ contact: response.data })
    }

    async handleDeleteContact(){
        const { id } = this.props.match.params;

        try {
            let resp = prompt("Deseja excluir esse contato do histórico? Sim [1] // Não [2]")
                if (resp=="1"){
            await api.delete(`/contacthistoric/${id}`)
                alert("Contato excluído com sucesso!")
            this.props.history.push("/historic");
                }else{
                }

        } catch (err) {
        alert("Erro ao deletar contato, tente novamente")
} 
    }



    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    
    }

    render() {

        const { contact } = this.state

        return (
            <div className="contact-info">
                        <h1><b>Cód:</b> {contact.cod}</h1>
                        <h2><b>Nome:</b> {contact.name}</h2>
                        <p><b>Tipo:</b> {contact.type}</p>
                        <p><b>Criado em:</b> {contact.createdAt}</p>
                        <p><b>Tell1:</b> {contact.tell01}</p>
                        <p><b>Tell2:</b> {contact.tell02}</p>
                        <p><b>Cidade:</b> {contact.city}</p>
                        <p><b>Observações:</b> {contact.description}</p>
                        <p><b>Hora:</b> {contact.time}</p>
                        <p><b>Status:</b> {contact.status}</p>

        

        <Button onClick={() => this.handleDeleteContact()} variant="contained" size="large" color="secondary" style={{ marginLeft: 10, marginTop: 30 }}>
          Excluir
        </Button>
            </div>
          
            
        )
        
    }
    
}