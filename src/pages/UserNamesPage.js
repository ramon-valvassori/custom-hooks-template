import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequestData from "../hooks/useRequestData";


const UserNamesPage = () => {
  
  const [nomeUsuarios, isLoading, isError] = useRequestData('users')

  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        { isError ? <p>ERRO! TENTE NOVAMENTE.</p>:
        isLoading ? <p>CARREGANDO...</p> :
        nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



