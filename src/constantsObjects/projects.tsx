import rockburger from 'assets/img/projects/projetoRockBurger.png'
import bancoIter from 'assets/img/projects/projetoBancoInter.png'
import nubank from 'assets/img/projects/projetoNubank.png'
import portfolioV2 from 'assets/img/projects/projetoPortfolioV2.png'
import digitalBank from 'assets/img/projects/projetoDigitalBank.png'
import dashboard from 'assets/img/projects/projetoDashboard.png'
import aptto from 'assets/img/projects/projetoAptto.png'

export const ProjectsList = [
    {
        id: 0,
        foto: <img className="d-block w-100 border-shadow rounded" src={portfolioV2} alt="Apresetação do Portfólio v2" />,
        titulo: "Portfólio",
        paragrafo: "Projeto para um local onde eu possa expor os projetos realizados.",
        link: "https://www.behance.net/gallery/169435671/Projeto-Portfolio",
    },
    {
        id: 1,
        foto: <img className="d-block w-100 border-shadow rounded" src={rockburger} alt="Apresetação do Rockburger" />,
        titulo: "RockBurger",
        paragrafo: "Projeto realizando em curso, praticando Auto layout e Design System.",
        link: "https://www.behance.net/gallery/169432317/Projeto-RockBurguer",
    },
    {
        id: 2,
        foto: <img className="d-block w-100 border-shadow rounded" src={bancoIter} alt="Apresetação do Banco Inter" />,
        titulo: "Clone Banco Inter",
        paragrafo: "Clone do Banco Inter, praticando Auto Layout e aprimorando Style Guide.",
        link: "https://www.behance.net/gallery/169433225/Projeto-Clone-Banco-Inter",
    },
    {
        id: 3,
        foto: <img className="d-block w-100 border-shadow rounded" src={nubank} alt="Apresetação do Nubank" />,
        titulo: "Clone Nubank",
        paragrafo: "Clone do Nubank, praticando Auto Layout e aprimorando Style Guide.",
        link: "https://www.behance.net/gallery/169433751/Projeto-Clone-Nubank",
    },
    {
        id: 4,
        foto: <img className="d-block w-100 border-shadow rounded" src={digitalBank} alt="Digital Bank - Animação" />,
        titulo: "Digital Bank",
        paragrafo: "Projeto foi desenvolvimento com o foco treinar as animações no Figma.",
        link: "https://www.behance.net/gallery/169435313/Projeto-Digital-Bank",
    },
    {
        id: 5,
        foto: <img className="d-block w-100 border-shadow rounded" src={dashboard} alt="Dashboard" />,
        titulo: "Dashboard",
        paragrafo: "Prototipação com o uso de animações como o open e swap overlay",
        link: "https://www.behance.net/gallery/169434673/Projeto-Dashboard",
    },
    {
        id: 6,
        foto: <img className="d-block w-100 border-shadow rounded" src={aptto} alt="Estudo de caso - Aptto" />,
        titulo: "Aptto",
        paragrafo: "Estudo de caso para colocar em prática as teorias e técnicas de UX/UI.",
        link: "https://www.behance.net/gallery/162295479/Aptto-Estudo-de-caso",
    }
]