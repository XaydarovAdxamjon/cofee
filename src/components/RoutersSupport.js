import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Main from '../components/Main/Main.jsx'
import Layout from './Layout/Layout.jsx'
import About from './containers/About/About.jsx'
import CreatPlan from './containers/CreatPlan/CreatPlan.jsx'

const RoutersSupport = () => {
  return (
    <Routes>
        <Route path='/' element={
            <Layout><Main/></Layout>
        } />

        <Route path='/home' element={
            <Layout><Main/></Layout>
        } />
        <Route path='/about' element={
            <Layout><About/></Layout>
        } />
        <Route path='/plan' element={
            <Layout><CreatPlan/></Layout>
        } />
    </Routes>
  )
}

export default RoutersSupport