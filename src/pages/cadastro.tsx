import { Container, Button, Typography, CircularProgress, TextField, Alert } from '@mui/material'
import { FormElementsContainer } from '@styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'
import type { NextPage } from 'next'
import React from 'react'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'


const Cadastro: NextPage = () => {
  const {
    cpf,
    login,
    password,
    setCpf,
    setLogin,
    setPassword,
    buscaLocatario,
    erro,
    carregando,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Preencha os dados para cadastro'}
      />
      <Container>
        <FormElementsContainer>
          

        </FormElementsContainer>
      </Container>

    </div >

  )
}

export default Cadastro
