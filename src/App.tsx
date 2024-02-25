import { useEffect, useState } from "react";
import  { ThemeProvider } from "styled-components";
// import dev from "./img/Dev.png";
import { Header, lightTheme, darkTheme, SectionMain } from "./app.style";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: light)').matches);
  const [isMenuBurguer, setIsMenuBurguer] = useState("desativado")

  useEffect(() => {
    const darkThemeQuery = window.matchMedia('(prefers-color-scheme: light)');
    
    // Função de callback que será chamada quando a preferência de mídia mudar
    const handleThemeChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    setIsDarkMode(darkThemeQuery.matches);

    // Adicionar o listener para detectar mudanças na preferência de mídia
    darkThemeQuery.addEventListener('change', handleThemeChange);

    // Remover o listener quando o componente for desmontado para evitar memory leaks
    return () => {
      darkThemeQuery.removeEventListener('change', handleThemeChange);
    };
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenuBurguer = () => {isMenuBurguer === "desativado" ? setIsMenuBurguer("ativado") : setIsMenuBurguer("desativado")}

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header>
          <a className="soon" href="#home"><h2>Jo<b>s</b>é <span><b>s</b>antos</span></h2></a>
          <div className={`containerNav ${isMenuBurguer}`}>
            <div className={`menuHamburguer`}
            onClick={ toggleMenuBurguer }>
              <span></span>
            </div>
            <nav>
              <ul>
                <li><a href="#home" onClick={ toggleMenuBurguer }>Início</a></li>
                <li><a href="#sobreMim" onClick={ toggleMenuBurguer }>Sobre Mim</a></li>
                <li><a href="#habilidades" onClick={ toggleMenuBurguer }>Habilidades</a></li>
                <li><a href="#projetos" onClick={ toggleMenuBurguer }>Projetos</a></li>
                <li><a href="#certificados" onClick={ toggleMenuBurguer }>Certificados</a></li>
                <li><a href="#contato" onClick={ toggleMenuBurguer }>Contato</a></li>
              </ul>
            </nav>
          </div>
          <label className="container">
            <input type="checkbox"  onClick={toggleDarkMode} checked={!isDarkMode}/>
            <span className="slider round">
              <div className="background"></div>
              <div className="star"></div>
              <div className="star"></div>
            </span>
          </label>
        </Header>
        <SectionMain>
          <div className="infoMain">
            <p className="text1">Olá Mundo, me chamo</p>
            <h1>José Santos</h1>
            <p className="text2Main">E eu sou <span className="magicText"></span></p>
          </div>
          <div className="containerImgMain">
            <div className="imgMain"></div>
          </div>
        </SectionMain>
      </ThemeProvider>
    </>
  )
}

export default App
