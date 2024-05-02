class Sidebar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ' \
            <div id="sidebar"> \
                <div class="inner"> \
                        <nav id="menu"> \
                            <header class="major"> \
                                <h2>UKWWA</h2> \
                            </header> \
                            <ul> \
                                <li><a href="index.html">Home</a></li> \
                                <li><a href="what-is-accreditation.html">What is Accreditation?</a></li> \
                                <li><a href="who-can-apply.html">Who Can Apply?</a></li> \
                                <li><a>Accreditation (not implemented)</a></li> \
                                <li><a href="certification.html">Certification</a></li> \
                                <li><a>Foreign Credential Evaluation (not implemented)</a></li> \
                                <li><a href="about-us.html">About Us</a></li> \
                                <li><a href="our-mission.html">Our Mission</a></li> \
                                <li><a href="contact-us.html">Contact Us</a></li> \
                            </ul> \
                        </nav> \
                        <section> \
                            <header class="major"> \
                                <h2>Get in touch</h2> \
                            </header> \
                            <ul class="contact"> \
                                <li class="icon solid fa-envelope"><a href="#">info@ukwwa.org</a></li> \
                                <li class="icon solid fa-phone">+44 0000 0000000</li> \
                                <li class="icon solid fa-home">...address...<br /> \
                                Address, AD 00000</li> \
                            </ul> \
                        </section> \
                        <footer id="footer"> \
                            <p class="copyright">&copy; UKWWA. All rights reserved.</p> \
                        </footer> \
                </div> \
            </div> \
        '
    }
}

customElements.define("ukwwa-sidebar", Sidebar);




