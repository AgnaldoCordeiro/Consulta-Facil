import { Container, Button, CircularProgress } from '@mui/material'
import useIndex from 'data/hooks/pages/useIndex.page'
import type { NextPage } from 'next'
import router from 'next/router'
import React from 'react'
import PageTitle from 'ui/components/data-display/PageTitle/PageTitle'
import SafeEnvironment from 'ui/components/feedback/SafeEnvironment/SafeEnvironment'


const Home: NextPage = () => {

   const {   
    carregando,
  } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Sistema de Cadastro'}
      />
      <Container>
        <Button
        variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          type={'submit'}
          onClick={() => router.push("/login")}
        >
          {carregando ? <CircularProgress size={20} /> : 'Login'}
        </Button>
        <Button
        variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          type={'submit'}
          onClick={() => router.push("/cadastro")}
        >
          {carregando ? <CircularProgress size={20} /> : 'Cadastro'}
        </Button>
        
      </Container>

    </div >

  )
}

export default Home
