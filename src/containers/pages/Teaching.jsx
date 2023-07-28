import "../../styles/teaching.css";
import logo from "../../assets/images/topbar_logo.svg";
import { Link } from "react-router-dom"

export default function Teaching() {
    return (
        <div className="teaching">
            <div className="header">
                <img src={logo} alt="logo" />
                <h1>Преподавание</h1>
            </div>
            <nav>
                <ul>
                    <li><Link to="/">Курсы</Link></li>
                    <li><a href="#">Преподаватели</a></li>
                </ul>
            </nav>
            <section>
                <h2>Станьте преподавателем</h2>
                <p>Поделитесь своими знаниями и опытом с другими</p>
                <p>Присоединяйтесь к нашей команде преподавателей</p>
            </section>
        </div>
    );
}