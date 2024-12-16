import { NavLink, Outlet } from "react-router-dom";

export function HomeLayout() {
    return (
        <>
            <nav className="nav">
                <ul className="nav_list">
                    <li className="nav_item"><NavLink to={'/'}>Главная</NavLink></li>
                    <li className="nav_item"><NavLink to={'/heroes'}>Герои</NavLink></li>
                    <li className="nav_item"><NavLink to={'/locations'}>Локации</NavLink></li>
                    <li className="nav_item"><NavLink to={'/episodes'}>Эпизоды</NavLink></li>
                </ul>
            </nav>

            <div className="content">
                <Outlet />
            </div>
        </>
    )
}