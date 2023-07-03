import perfil from 'assets/img/profile/perfil.jpg';
import Contato from 'components/Contato';

import { ReactComponent as Figma } from 'assets/img/skills/figma.svg';
import { ReactComponent as Photoshop } from 'assets/img/skills/photoshop.svg';
import { ReactComponent as Illustrator } from 'assets/img/skills/illustrator.svg';
import { ReactComponent as JavaScript } from 'assets/img/skills/javaScript.svg';
import { ReactComponent as Html } from 'assets/img/skills/html.svg';
import { ReactComponent as Css } from 'assets/img/skills/css.svg';



export default function Home() {
    return (
        <>
        
        <div className="container-fluid rounded pb-5 pt-5" id="about" style={{background: "#fff"}}>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-12 col-lg-5" data-aos="fade-right">
                        <div className="ml-5 ml-auto borda-shadow d-flex justify-content-center">
                            <img className="d-block w-75 rounded" src={perfil} alt="Foto de Perfil"/>
                        </div>
                    </div>
                    <div className="col-12 col-lg-5 pt-4 mt-5" data-aos="fade-left">
                        <div className="d-flex justify-content-start">
                            <h4 className="mb-2">
                                SOBRE MIM
                            </h4>
                        </div>
                        <p className="pt-2 texto-corrido" style={{opacity: "0.5"}}>
                            Atuo como UX Designer desde setembro de 2021. Estou habituado a trabalhar com metodologias ágeis tanto Scrum como Kanban, com Design Thinking, pesquisas, wireframes e protótipos. Atualmente participo do projeto Mappiá no Banco do Brasil, o qual busca
                            o aprimoramento do produto rural brasileiro com soluções de inteligência artificial.
                        </p>
                        
                        <Contato />

                        <h5 className="mb-2">
                            Minhas principais habilidades
                        </h5>
                        <div className="mb-3 d-flex">
                            <Figma width={30} className="me-2"/>
                            <Photoshop width={30} className="me-2"/>
                            <Illustrator width={30} className="me-2"/>
                            <JavaScript width={30} className="me-2" />
                            <Html width={30} className="me-2"/>
                            <Css width={30} className="me-2"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    )
}