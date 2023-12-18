import "../Styles/QueryBar.css"
import "../Styles/QueryBarMobile.css"
import lupa from "../Images/lupa.png"
import menu from "../Images/menu.png"

export default function QueryBar() {
  return (
    <section className="container_query_bar">
      <div className="container_space"></div>
      <div className="container_menu">
        <div className="container_all">
            <img src={menu} alt="Menu Geral" className="menu_all" />
        </div>
        <div className="container_menu">
            <ul className="menu">
                <li className="menu_option" id="menu_la">Lançamentos do Ano</li>
                <li className="menu_option">Recomendações</li>
                <li className="menu_option">Notícias</li>
                <li className="menu_option">Últimas Reviews</li>
            </ul>
        </div>
      </div>
      <div className="container_query_input">
        <img src={lupa} alt="Ícone de Lupa" className="query_glass_icon" width="20px"/>
        <input className="query_input" placeholder="O que está procurando?"></input>
      </div>
    </section>
  );
}
