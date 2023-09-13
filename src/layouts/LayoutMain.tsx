import { Outlet } from "react-router-dom";
import '../styles/LayoutMain.css';

export default function Layout(): JSX.Element {
    return <>
            <h1 className="title-h1"><span>Repo</span><span>Search</span></h1>
            <div className="layout">
                <Outlet></Outlet>
                <footer>{'Alexander Khodyrev - ' + new Date().getFullYear()}</footer>
            </div>
        </>
}