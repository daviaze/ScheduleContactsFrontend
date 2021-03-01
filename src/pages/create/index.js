import React, { Component } from "react";
import api from "../../services/api";
import './styles.css';
import { Link } from "react-router-dom";
import {Alert, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Select, MenuItem, InputLabel, TextField, NativeSelect, FormControl, Box} from '@material-ui/core'

class Create extends Component {
    
    state = {
        cod: '',
        name: '',
        tell01: '',
        tell02: '',
        city: '',
        type: '',
        time: '',
        description: '',
    };

    handleSubmit = async e => {
        e.preventDefault();

        console.log(this.state)

    
        await api.post("create", {
            cod: this.state.cod,
            name:this.state.name,
            tell01:this.state.tell01,
            tell02:this.state.tell02,
            city:this.state.city,
            type:this.state.type,
            time:this.state.time,
            description: this.state.description
        });
        
        alert("Contato agendado com sucesso!")
        this.props.history.push("/");
        
    
    }
    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

render(){

    return(
        
        <form id="new-contact" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <TextField type="text"
            id="text1"
             label="Código"
             variant="outlined"
             name="cod"
             onChange={this.handleChange}
             value={this.state.cod}
             style={{ marginBottom: 10 }}
             />
            <TextField type="text"
             id="filled-basic"
             label="Nome do Cliente"
             variant="outlined"
             name="name"
             onChange={this.handleChange}
             value={this.state.name}
             style={{ marginBottom: 10 }}

             /> 
              <TextField type="text"
               id="filled-basic"
               label="Telefone 01"
               variant="outlined"
             name="tell01"
             placeholder="Telefone 1"
             onChange={this.handleChange}
             value={this.state.tell01}
             style={{ marginBottom: 10 }}

             /> 
              <TextField type="text"
               id="filled-basic"
               label="Telefone 02"
               variant="outlined"
             name="tell02"
             placeholder="Telefone 2"
             onChange={this.handleChange}
             value={this.state.tell02}
             style={{ marginBottom: 10 }}

             /> 

        <FormControl id="form1" style={{ marginBottom: 10 }}>
        <InputLabel htmlFor="age-native-simple">Cidade</InputLabel>
        <Select
          native
          defaultValue=""
          onChange={this.handleChange}
          name="city"
        >
          <option aria-label="None" value="" />
          <option value={"Itaperuna"}>Itaperuna</option>
          <option value={"Itaboraí"}>Itaboraí</option>
          <option value={"Bom Jesus"}>Bom Jesus</option>
          <option value={"Rio de Janeiro"}>Rio de Janeiro</option>
        </Select>
        </FormControl>

              <FormControl id="form2" style={{ marginBottom: 10 }}>
        <InputLabel htmlFor="age-native-simple">Tipo de Contato</InputLabel>
        <Select
          native
          defaultValue=""
          onChange={this.handleChange}
          name="type"
        >
          <option aria-label="None" value="" />
          <option value={"Vendas"}>Vendas</option>
          <option value={"Reparo"}>Reparo</option>
          <option value={"Instalação"}>Instalação</option>
          <option value={"Outros"}>Outros</option>
        </Select>
        </FormControl>


      
        <FormControl style={{ marginBottom: 10 }}>
        <InputLabel htmlFor="age-native-simple">Marcar Horário</InputLabel>
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

            <TextField type="text2"
             id="description"
             label="Descrição"
             variant="outlined"
             name="description"
             placeholder="Descrição"
             style={{ marginBottom: 10 }}
             onChange={this.handleChange}
             value={this.state.description}
             />

            <Button type="submit" variant="primary" size="lg" block> Enviar </Button>
        </form>
        
    )

}
}

export default Create;

