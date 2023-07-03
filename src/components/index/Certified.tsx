import { CertifiedList } from "constantsObjects/certifieds";


export default function Certified() {
    const certifieds = CertifiedList.filter(e => e.id >= 0).reverse();
    return (
        <>

            <div className="container mt-5 mb-5" id="certified"> 

                <div className="row d-flex mb-3" data-aos="fade-right">
                    <div className="col-4 col-lg-8">
                        <h4 className="pt-1">Certificados</h4>
                    </div>
                </div>
                <div className="row" data-aos="fade-up">
                {certifieds.map((certified) => (
                <div key={certified.id} className="col-lg-2 col-md-4 col-sm-6 col-6 mb-4 card-centralizado largura">
                   <a href={certified.link} target="_blank" rel="noreferrer" aria-label={certified.titulo} style={{ textDecoration: "none" }}>  
                        <div className="card cards" style={{ width: "12rem", height: "15rem" }}>
                            <div className="card-body shadow">  
                                    <div className="text-center mb-2"> 
                                        {certified.foto}
                                    </div>
                                    <div className="text-center" style={{ opacity: "0.5" }}>
                                        {certified.subtitulo}
                                    </div>
                                    <div className="text-center card-titulo texto-corrido-bold m-2 ">
                                        {certified.titulo}
                                    </div>
                                    <div className="text-center" style={{ opacity: "0.5" }}>
                                         {certified.paragrafo}
                                    </div>
                                
                            </div>
                        </div>
                    </a>
                </div>
                    
                

                    ))}
                    </div>
                    
            </div>


        </>
    )
}