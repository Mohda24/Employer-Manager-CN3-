import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListeAbsence from '../pages/ListeAbsence'
import GererConjit from '../pages/GererConjit'
import LoginForm from '../pages/login'
import AddAbsence from '../pages/AddAbsence'
import Layout from '../pages/layout/layout'

import Employers from '../pages/Employers'


function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<ListeAbsence />} />
                    <Route path='/liste-absences' element={<ListeAbsence />} />
                    <Route path='/ajouter-absence' element={<AddAbsence />} />
                    <Route element={<GererConjit />} path='/conges' />
                    <Route element={<Employers />} path='/employes' />
                </Route>

                <Route element={<LoginForm />} path='/login' />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter