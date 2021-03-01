import React, {useState, useEffect} from 'react'
import api from "../../services/api";
import './styles.css';
import { Link } from "react-router-dom";
import {Dropdown, DropdownButton, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function main2() {
  const [ contact, setContact] = useState([])
  const [status, setStatus] = useState('')

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get("/contacts")

      setContact([...contact, response.data.docs])
    }

    loadContacts();
  }, [])

  useEffect(()=> {
    async function updateContact(){
      await api.put(`/contacts/${contact.id}`, {
        status
      })
    }

    updateContact()
  },[status])


  return (
   <div className="contact-list" >
                {contacts.map(contact => (
                    <article key={contact._id} status>

                    <strong>{contact.cod}</strong> 

                    
                    <div className="linha-1" >
                        <DropdownButton id="dropdown-basic-button" title="Status">
                            <Dropdown.Item onSelect="action-1">Pendente</Dropdown.Item>
                            <Dropdown.Item eventKey="action-2">Sem sucesso</Dropdown.Item>
                            <Dropdown.Item eventKey="action-3">Com sucesso</Dropdown.Item>
                        </DropdownButton>
                        </div>

                        <h1>{contact.name}</h1>
                       
                        
                        <p>{contact.type}</p>
                        <p>{contact.time}</p>
                        <p>{contact.status}</p>
                        <p>{contact.createdAt}</p>

                        <Button href={`/contacts/${contact._id}`} variant="primary" size="lg" block>
                            Abrir
                         </Button>


                    </article>
                ))}
            </div>
  )
}
