import { useEffect, useState } from "react";
import  { ThemeProvider } from "styled-components";
import { Header, lightTheme, darkTheme } from "./app.style";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(window.matchMedia('(prefers-color-scheme: light)').matches);

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

  return (
    <>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <Header>
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
            <input type="checkbox"  onClick={toggleDarkMode} checked={!isDarkMode}/>
            <span className="slider round">
              <div className="background"></div>
              <div className="star"></div>
              <div className="star"></div>
            </span>
          </label>
        </Header>
      </ThemeProvider>
    </>
  )
}

export default App
