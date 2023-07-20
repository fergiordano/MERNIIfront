import '../css/footer.css'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBFooter  className=' footer1 text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div className=''>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                AyF Limpieza
                            </h6>
                            <p>
                                En esta seccion podras visitarnos en nuestras redes y contactarte con nosotros
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Redes</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Facebook
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Twitter
                                </a>
                            </p>
                        </MDBCol>

                        

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contacto</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                Argentina, Cordoba
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                correo@gmail.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> +54 3385123456
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> +54 3385123456
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2021 Copyright:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MDBootstrap.com
                </a>
            </div>
        </MDBFooter>
    );
}