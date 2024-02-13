import { useState } from "react";
import { Header } from "./app.style";

function App() {
  const [themeLight, setThemeLight] = useState("light")

  const themeToggler = () => {
    themeLight === "light" ? setThemeLight("") : setThemeLight("light"); 
  }
  console.log(themeLight)

  return (
    <>
        <Header className={themeLight}>
          <a className="soon" href="#home"><h2>Jo<b>s</b>é <span><b>s</b>antos</span></h2></a>
          <nav>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#sobreMim">Sobre Mim</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#certificados">Certificados</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
          <label className="container">
            <input type="checkbox"  onClick={themeToggler}/>
            <span className="slider round">
              <div className="background"></div>
              <div className="star"></div>
              <div className="star"></div>
            </span>
          </label>
        </Header>
    </>
  )
}

export default App
