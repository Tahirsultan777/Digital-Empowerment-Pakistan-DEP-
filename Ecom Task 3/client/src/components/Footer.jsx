// import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './FooterStyles.css';
const Footer = () => {
    return (
        <MDBFooter bgColor='light' className='MDBFooter'>
            <hr />
            <section className=''>
                <MDBContainer className='MDBContainer '>
                    <MDBRow className='MDBRow'>
                        <MDBCol className='MDBCol'>
                            <h4 className='text-uppercase'>
                                <MDBIcon icon='gem' className='me-3' />
                                E STORE
                            </h4>
                            <p>
                                Our store offers a curated selection of high-quality products, including protective cases, wireless chargers, stylish watch bands, premium audio solutions, and productivity enhancers.
                            </p>
                        </MDBCol>

                        <MDBCol md='2' lg='2' xl='2' className='MDBCol mx-auto mb-4'>
                            <h4 className='text-uppercase fw-bold mb-4'>Products</h4>
                            <p>
                                <a href='#!' className='text-reset'>Iphones</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>MacBooks</a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>Airpods</a>
                            </p>
                        </MDBCol>

                        <MDBCol md='3' lg='2' xl='2' className='UseFulLink'>
                            <h4 className='text-uppercase fw-bold mb-4'>Useful links</h4>
                            <a href='' className='socialApp me-4 text-reset'>
                                <MDBIcon fab icon='facebook-f' />
                            </a>
                            <a href='' className='socialApp me-4 text-reset'>
                                <MDBIcon fab icon='twitter' />
                            </a>
                            <a href='' className='socialApp me-4 text-reset'>
                                <MDBIcon fab icon='google' />
                            </a>
                            <a href='' className='socialApp me-4 text-reset'>
                                <MDBIcon fab icon='instagram' />
                            </a>
                            <a href='' className='socialApp me-4 text-reset'>
                                <MDBIcon fab icon='linkedin' />
                            </a>
                        </MDBCol>

                        <MDBCol className='MDBCol'>
                            <h4 className='text-uppercase'>Contact</h4>
                            <p>
                                <MDBIcon icon='home' />
                                Pakistan, Lahore
                            </p>
                            <p>
                                <MDBIcon icon='envelope' />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon='phone' /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon='print' /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                Copyright © 2024 Apple Inc. All rights reserved.
            </div>
        </MDBFooter>
    );
}

export default Footer;