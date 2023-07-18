import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'
import useRequestData from "../hooks/useRequestData";


const  CommentsPage = () => {
  
  const [postagens, isLoading, isError] = useRequestData('comments')

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
      { isError ? <p>ERRO! TENTE NOVAMENTE.</p> :
      isLoading ? <p>CARREGANDO...</p> :
      postagens.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



