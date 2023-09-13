import { Component } from "react";
import { Outlet } from "react-router-dom";
import '../styles/LayoutMain.css';

export default class Layout extends Component
{
    render() {
        return <div className="layout">
            <Outlet></Outlet>
            <footer>{'Alexander Khodyrev - ' + new Date().getFullYear()}</footer>
        </div>
    }
}