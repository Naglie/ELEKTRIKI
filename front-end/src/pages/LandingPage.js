import React, { useRef } from 'react';
import Cover from '../components/Cover';
// import About from '../components/About';
// import Requirements from '../components/Requirements';
// import Contacts from '../components/Contacts';
// import Partners from '../components/Partners';
// import Gallery from '../components/Gallery';
// import Form from '../components/Form';

export default function LandingPage() {
    const coverRef = useRef();
    const aboutRef = useRef();
    const reqRef = useRef();
    const contactRef = useRef();
    const partnerRef = useRef();
    const galleryRef = useRef();
    const formRef = useRef();

    function carouselClick() {
        galleryRef.current.scrollIntoView({behavior: 'smooth'});
    }

    return (
        <>
            <section ref={coverRef}>
                <Cover />
            </section>
            {/* <section ref={aboutRef}>
                <About />
            </section>
            <section ref={reqRef}>
                <Requirements />
            </section>
            <section ref={contactRef}>
                <Contacts />
            </section>
            <section ref={partnerRef}>
                <Partners />
            </section>
            <section ref={galleryRef}>
                <Gallery />
            </section>
            <section ref={formRef}>
                <Form />
            </section> */}
        </>
    )
}
