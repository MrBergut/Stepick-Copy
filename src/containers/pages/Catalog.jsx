import "../../styles/catalog.css"
import logo from "../../assets/images/topbar_logo.svg"

export default function Catalog() {
    return (
        <div className='catalog'>
            <img src={logo} alt="logo" />
            <h1>Каталог</h1>
                <section>
                    <h2>Курсы по программированию</h2>
                    <p>Изучите различные языки программирования и технологии</p>
                    <p>Начните свою карьеру в IT-индустрии с нашими курсами</p>
                </section>
        </div>
    );
}