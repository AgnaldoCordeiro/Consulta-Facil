import { Container, Button, Typography, CircularProgress, TextField, Alert } from '@mui/material'
import { FormElementsContainer } from '@styles/pages/index.style'
import useCadastro from 'data/hooks/pages/useCadastrto.page'
import type { NextPage } from 'next'
import router from 'next/router'
import React from 'react'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'


const Cadastro: NextPage = () => {
  const {
    name,
    cpf,
    email,
    login,
    password,
    setName,
    setCpf,
    setEmail,
    setLogin,
    setPassword,
    cadastroLocatario,
    erro,
    success,
    carregando,
  } = useCadastro();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Preencha os dados para cadastro'}
      />
      <Container>
        <FormElementsContainer>
           <TextField
            label={'Nome Completo'}
            name={'name'}
            fullWidth
            variant={'outlined'}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextFieldMask
            mask={'999.999.999-99'}
            label={'Cpf'}
            name={'cpf'}
            fullWidth
            variant={'outlined'}
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
          <TextField
            label={'Email'}
            name={'email'}
            fullWidth
            variant={'outlined'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            label={'Login'}
            name={'login'}
            fullWidth
            variant={'outlined'}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required

          />
          <TextField
            label={'senha'}
            name={'password'}
            type={'password'}
            fullWidth
            variant={'outlined'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />          
          {erro && <Typography color={'error'}>{erro}</Typography>}
          {erro || <Typography color={'success'}>{success}</Typography>}
           <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px', margin: '0.25rem' }}
            type={'submit'}
            onClick={() => cadastroLocatario(name, cpf, email, login, password)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Cadastrar'}            
          </Button>

          <Button
            variant={'contained'}
            color={'warning'}
            sx={{ width: '200px', margin: '0.25rem' }}
            type={'submit'}
            onClick={() => router.push("/")}
          >
            {carregando? <CircularProgress size={20} /> : 'Voltar'}

          </Button>

        </FormElementsContainer>
      </Container>

    </div >

  )
}

export default Cadastro
