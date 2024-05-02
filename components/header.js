class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ' \
        <header id="header"> \
			<span class="align-left"> \
					<img src="images/logo.png" alt="ukwwa logo" /> \
					<ul class="icons align-left"> \
						<li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li> \
						<li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> \
						<li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li> \
					</ul> \
			</span> \
			<span> \
				<img src="images/header-images.jpg" alt="ukwwa banner" /> \
			</span> \
		</header> \
        '
    }
}

customElements.define("ukwwa-header", Header);
