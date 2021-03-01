import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css"
import {Select, MenuItem, InputLabel, TextField, NativeSelect, FormControl, Box, Button, Icon} from '@material-ui/core'
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

export default class Contact extends Component {
    state = {
        contact: {},
    };

    async componentDidMount(){
        const { id } = this.props.match.params;

        const response = await api.get(`/contacts/${id}`)

        this.setState({ contact: response.data })
    }

    async handleDeleteContact(){
        const { id } = this.props.match.params;

        try {
            let resp = prompt("Deseja encerrar esse contato? Sim [1] // Não [2]")
                if (resp=="1"){
            //await api.delete(`/contacts/${id}`)
            await api.put(`/contacts/${id}`, {
                fil: false,
                status: "Encerrado",
            });
            alert("Contato encerrado com sucesso!")
            this.props.history.push("/");
                }else{
                }

        } catch (err) {
        alert("Erro ao deletar contato, tente novamente")
} 
    }

     async handleUpdateContact() {
        const { id } = this.props.match.params;

        
            await api.put(`/contacts/${id}`)
            alert("Contato atualizado com sucesso!")
     
     }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    
    }

    handleSubmit = async e => {
        const { id } = this.props.match.params;
        e.preventDefault();
    
        await api.put(`/contacts/${id}`, {
            cod: this.state.cod,
            name:this.state.name,
            tell01:this.state.tell01,
            tell02:this.state.tell02,
            city:this.state.city,
            type:this.state.type,
            time:this.state.time,
            status:this.state.status,
            description:this.state.description
        });
        
        alert("Contato editado com sucesso!")
        this.props.history.push("/");
        
    
    }

    render() {

        const { contact } = this.state

        return (
            <div className="contact-info">
                        <h1><b>Cód:</b> {contact.cod}</h1>
                        <h2><b>Nome:</b> {contact.name}</h2>
                        <p><b>Tipo:</b> {contact.type}</p>
                        <p><b>Data:</b> {contact.createdAt}</p>
                        <p><b>Tell1:</b> {contact.tell01}</p>
                        <p><b>Tell2:</b> {contact.tell02}</p>
                        <p><b>Cidade:</b> {contact.city}</p>

            
             
                        <form  noValidate autoComplete="off" onSubmit={this.handleSubmit}>

                       
             <TextField
          id="filled-multiline-static"
          label="Observações"
          multiline
          rows={3}
          defaultValue={contact.description}
          variant="filled"
          name="description"
          onChange={this.handleChange}
          style={{ marginBottom: 10 }}
        />
        <br></br>
                        <FormControl style={{ marginBottom: 10 }}>
        <InputLabel htmlFor="age-native-simple">{contact.time}</InputLabel>
        <Select
          native
          defaultValue=""
          onChange={this.handleChange}
          name="time"
          mb={10}
        >
          <option aria-label="None" value="" />
          <option value={"09:00"}>09:00</option>
          <option value={"09:30"}>09:30</option>
          <option value={"10:00"}>10:00</option>
          <option value={"10:30"}>10:30</option>
          <option value={"11:00"}>11:00</option>
          <option value={"11:30"}>11:30</option>
          <option value={"12:00"}>12:00</option>
          <option value={"12:30"}>12:30</option>
          <option value={"13:00"}>13:00</option>
          <option value={"13:30"}>13:30</option>
          <option value={"14:00"}>14:00</option>
          <option value={"14:30"}>14:30</option>
          <option value={"15:00"}>15:00</option>
          <option value={"15:30"}>15:30</option>
          <option value={"16:00"}>16:00</option>
          <option value={"16:30"}>16:30</option>
          <option value={"17:00"}>17:00</option>
          <option value={"17:30"}>17:30</option>
          <option value={"18:00"}>18:00</option>
        </Select>        
        </FormControl>

    <br></br>

                        <FormControl  id="form1" style={{ marginBottom: 10 }}>
                            <InputLabel  htmlFor="age-native-simple">{contact.status}</InputLabel>
                                 <Select
                                     native
                                     defaultValue=""
                                     onChange={this.handleChange}
                                     name="status"
                                 >
                                <option aria-label="None" value="" />
                                <option value={"Pendente"}>Pendente</option>
                                <option value={"Sem Contato"}>Sem sucesso</option>
                                <option value={"Com Sucesso"}>Com sucesso</option>
                                </Select>
                        </FormControl>

<br></br>
                        <Button type="submit" variant="contained" size="large" color="primary" style={{ marginTop: 30 }}>
          Salvar
        </Button>

        <Button onClick={() => this.handleDeleteContact()} variant="contained" size="large" color="secondary" style={{ marginLeft: 10, marginTop: 30 }}>
          Encerrar
        </Button>
</form>
            </div>
          
            
        )
        
    }
    
}



