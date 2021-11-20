import { Container, Button, Typography, CircularProgress, TextField, Alert } from '@mui/material'
import { FormElementsContainer } from '@styles/pages/index.style'
import useIndex from 'data/hooks/pages/useIndex.page'
import type { NextPage } from 'next'
import React from 'react'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'


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
          <TextField
            label={'CPF/CNPJ'}
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
            sx={{ width: '220px' }}
            type={'submit'}
            onClick={() => buscaLocatario(cpf, login, password)}
          >
            {carregando ? <CircularProgress size={20} /> : 'Continuar'}
          </Button>

        </FormElementsContainer>
      </Container>

    </div >

  )
}

export default Login
