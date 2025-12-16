import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { AboutPage } from "../pages/AboutPage";
import { ContactPage } from "../pages/ContactPage";
import { ShopPage } from "../pages/ShopPage";
import { SignInPage } from "../pages/SignInPage";
import { ConsultationPage } from "../pages/ConsultationPage";

export const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/shop' element={<ShopPage/>}/>
            <Route path='/sign-in' element={<SignInPage/>}/>
            <Route path='/consultation' element={<ConsultationPage/>}/>
        </Routes>
    )
}