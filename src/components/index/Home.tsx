import perfil from 'assets/img/bg-header.svg';

export default function Home() {
    return (
        <>
            <div className="container-fluid rounded pt-3 pb-5 mt-5 mb-5" id="home">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-lg-5 col-md-12 col-sm-12 align-self-center" data-aos="fade-right">
                            <div className="d-flex justify-content-left">
                                <h4 className="mb-2">
                                    Olá, eu sou
                                </h4>
                            </div>
                            <div className="d-flex justify-content-left">
                                <h1 className="titulo-maior">
                                    Pedro Neto
                                </h1>
                            </div>
                            <div className="d-flex justify-content-left">
                                <h4 className="mb-2" style={{color: "#B00020"}}>
                                    UX/UI Designer
                                </h4>
                            </div>
                            <p className="pt-2 texto-corrido">
                                “É a maneira como você experimenta o mundo, é a maneira como você experimenta sua vida, é a maneira que você experimenta um serviço, ou um aplicativo ou um sistema de computador” - Don Norman
                            </p>
                            {/* <div className="">
                                <a className="btn btn-principal my-2 my-sm-0" href="#projects" rel="noreferrer">
                                    Meus projetos
                                </a>
                            </div> */}
                        </div>
                        <div className="col-lg-7 col-md-9 d-none d-md-block d-md-none d-lg-block text-center" data-aos="fade-left">
                            <div className="d-flex justify-content-end">
                                <img className="d-block w-100" src={perfil} alt="Foto Principal"/>
                            </div>
                        </div>
                    </div>
                </div>
    
            </div>

        </>
    )
}