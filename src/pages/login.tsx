import { Container, Button, Typography, CircularProgress, TextField, Alert } from '@mui/material'
import { FormElementsContainer } from '@styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'
import type { NextPage } from 'next'
import router from 'next/router'
import React from 'react'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'
import TextFieldMask from 'ui/components/inputs/TextFieldMask/TextFieldMask'


const Login: NextPage = () => {
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
        title={'Informe os dados para acesso'}
      />
      <Container>
        <FormElementsContainer>         
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
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px', margin: '0.25rem' }}
            type={'submit'}
            onClick={() => buscaLocatario(cpf, login, password)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Continuar'}
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

export default Login
