<svelte:head>
    <title>Home</title>
</svelte:head>

<script>
    let openBool = false;
    let replaceCross = false;

    function openMenu() {
        openBool = !openBool;
    }

    function setCross() {
        replaceCross =! replaceCross;
    }
</script>

<main>
    <div>
        <header>
            <div class="navbar">
                <div class="logo"><a href="/">Umeå Logistikgrupp <span>AB</span>.</a></div>
                <ul class="links">
                    <li><a href="/">Hem </a><i class="fa-duotone fa-house" style="color: var(--main-color);"></i></li>
                    <li><a href="/fonsterputts-info">Bilder </a><i class="fa-regular fa-image" style="color: var(--main-color);"></i></li>
                    <li><a href="/hacktrimning-info">Tjänster </a><i class="fa-solid fa-info" style="color: var(--main-color);"></i></li>
                    <li><a href="/kontakta">Kontakta </a><i class="fa-duotone fa-phone" style="color: var(--main-color);"></i></li>
                </ul>
                <div on:click={() => {openMenu(); setCross()}} class="toggle_btn">
                    <i class="fa-duotone fa-bars-sort" class:fa-xmark={replaceCross} />
                </div>
            </div>
            <div style="z-index: 1000; position: absolute;" class="dropdown_menu" class:open={openBool}>
                <li><a href="/">Hem <i class="fa-duotone fa-house" style="color: var(--main-color);"></i></a></li>
                <li><a href="/fonsterputts-info">Bilder <i class="fa-regular fa-image" style="color: var(--main-color);"></i></a></li>
                <li><a href="/hacktrimning-info">Tjänster <i class="fa-solid fa-info" style="color: var(--main-color);"></i></a></li>
                <li><a href="http://ulmaskinodiamant.se/" target="_blank">Butik <i class="fa-duotone fa-shop" style="color: var(--main-color);"></i></a></li>
                <li><a href="/kontakta">Kontakta <i class="fa-duotone fa-phone" style="color: var(--main-color);"></i></a></li>
                
            </div>
            <section class="about">
                <div class="about-us">
                    <h1>Välkommen till Umeå Logistikgrupp <span id="big-text">AB</span> | Allt för <span id="big-text">Fastigheten</span></h1>
                </div>
            </section>
        </header>
        <div id="erbjudanden" class="erbjudande">
            <section class="tjanst">
                <h1 class="target-h1">Ett urval av våra <span>Tjänster</span></h1>
                <p id="snabbt-om-oss">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nemo recusandae eveniet fugiat nihil vitae optio eaque corporis numquam. Perferendis!
                </p>
                <div class="red-line" id="red-line">
                    <span></span>
                </div>
                <div class="tjanst-container">
                    <div class="img-tjanster" style="background-image: url(./sandning-main.JPG);"></div>
                    <div class="tjanster">
                        
                         <h1>Sandning <i class="fa-duotone fa-handshake-angle" style="color: var(--main-color);"></i></h1>
                         <p>
                            Vi erbjuder sandning av fastigheter, vägar etc..
                         </p>
                         <a href="/fonsterputts-info">Läs mer</a>
                    </div>
                    <div class="img-tjanster" style="background-image: url(./sopning-main.png);"></div>
                    <div class="tjanster">
                        <h1>Sopning <i class="fa-duotone fa-broom" style="color: var(--main-color);"></i></h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident eligendi cum in ipsam esse.
                        </p>
                        <a href="/hacktrimning-info">Läs mer</a>
                    </div>
                    <div class="img-tjanster" style="background-image: url(./specialtransport.JPG);"></div>
                    <div class="tjanster">
                        <h1>Bemanning <i class="fa-duotone fa-handshake-angle" style="color: var(--main-color);"></i></h1>
                        <p>
                            Vi erbjuder personal inom fastighetsskötsel till samtliga av våra tjänster för uthyrning.
                        </p>
                        <a href="/takskottning-info">Läs mer</a>
                    </div>
                    <div class="img-tjanster" style="background-image: url(./snorojning-main.JPG);"></div>
                    <div class="tjanster">
                        <h1>Snöröjning <i class="fa-duotone fa-snowplow" style="color: var(--main-color);"></i></h1>
                        <p>
                            Vi tillhandahåller traktorer och personal för snöröjning av fastigheter, vägar etc.
                        </p>
                        <a href="/takskottning-info">Läs mer</a>
                    </div>
                    <div class="img-tjanster" style="background-image: url(./specialtransport.JPG);"></div>
                    <div class="tjanster">
                        <h1>Transporter <i class="fa-duotone fa-truck-moving" style="color: var(--main-color);"></i></h1>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia provident eligendi cum in ipsam esse.
                        </p>
                        <a href="/takskottning-info">Läs mer</a>
                    </div>
                </div>
            </section>
            <section>
                <div class="butik-info">
                    <h1>Effektiv Håltagningsprocess, kvalitativa Hydraulslangar, lämpliga Oljor och Smörjmedel</h1>
                    <p>Vi på UL Maskin och Diamant är <span>lösningen</span>!</p>
                </div>
                <div class="blue-line">
                    <span></span>
                </div>
                <div class="butik-container">
                    <div class="butik-img">
                        <div class="butik-img-text">
                            <h1><span>UL</span> Maskin och Diamant</h1>
                            <p>Vi pressar dina hydralslangar, återförsäljare av Tyrolit samt att du även hittar dina oljor och smörjmedel från PAYBACK LUBRICANTS hos oss.</p>
                            <a href="http://ulmaskinodiamant.se/" target="_blank">Besök vår butik!</a>
                        </div>
                    </div>
                </div>
            </section>
            <div class="back-container">
                <a href="/" class="back"><i class="fa-solid fa-arrow-up" style="color: var(--main-color);"></i> Till Toppen <i class="fa-solid fa-arrow-up" style="color: var(--main-color);"></i></a>
            </div>
            <section class="footer">
                <h4>Följ oss på sociala medier!</h4>
                <p>Se våra nyaste uppdateringar på FaceBook och Instagram</p>
                <div class="sociala-medier">
                    <a href="https://www.facebook.com/rasmus.mikaelsson.5/" target="_blank"><i class="fa-brands fa-facebook fa-lg"></i></a>
                    <a href="https://www.instagram.com/umealogistikgrupp/" target="_blank"><i class="fa-brands fa-instagram fa-lg"></i></a>
                </div>
                <p class="maker">Gjord av <a href="https://www.instagram.com/rasmus.mikaelsson05/">Rasmus Mikaelsson</a></p>
            </section>
        </div>
    </div>
</main>

<style>
    main {
        height: 100vh;
        background: #000;
        background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url("./banner-main.JPG");
        background-size: cover;
        
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: white;
        font-size: 1rem;

        transition: all 0.2s ease;
    }

    a:hover {
        color: var(--main-color);
    }

    /* Header */
    header {
        position: relative;
        /* margin: 0 2rem; */
        height: 100vh;
    }

    .navbar {
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(15px);
        width: 100%;
        height: 60px;
        padding: 0 2rem;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .navbar li {
        float: left;
        position: relative;
        width: auto;
    }

    .navbar .logo a {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .navbar .logo span {
        color: var(--main-color);
    }

    .navbar .links {
        display: flex;
        gap: 2.5rem;
    }

    .navbar .toggle_btn {
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        display: none;
    }

    /* Tjänster Sektion */
    .tjanst {
        background-color: #fef5ed;
    }

    .target-h1 {
        padding: 100px 25px 29px;
        margin: 0 10vw;
    }

    .target-h1, .target-h1 span {
        color: black;
        font-size: 42px;
        font-weight: bold;
        text-align: left;
    }

    .target-h1 span {
        color: var(--main-color);
    }
    
    #snabbt-om-oss {
        padding: 0 25px 50px;
        margin: 0 10vw;
        font-size: 18px;
    }

    .tjanst-container {
        display: flex;
        padding: 50px;
    }

    .tjanster {
        margin: 0 25px;
        /* padding: 25px; */
        border-radius: 10px;
        background-color: white;
        box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.362);
        width: 300px;
        overflow: hidden;
    }

    
    .tjanster p {
        margin-bottom: 25px;
    }

    .tjanster a {
        color: var(--main-color);
    }
    
    .tjanster a::after {
        content: '';
        width: 0;
        height: 2px;
        background-color: var(--main-color);
        display: block;
        transition: all 0.8s;
        max-width: 56px;
    }

    .tjanster a:hover::after {
        width: 100%;
        max-width: 56px;
    }

    .img-tjanster {
        
    }

    /* Erbjudande 100vh */
    .erbjudande {
        height: 100vh;
        background-color: #fef5ed;
    }

    /* Dropdown Menu */
    .dropdown_menu {
        display: none;
        right: 2rem;
        top: 80px;
        width: 300px;
        height: 0;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.2s ease;
    }

    .dropdown_menu.open {
        height: fit-content;
    }

    .dropdown_menu li {
        padding: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* About Section */
    .about {
        margin: 50vh 10vw 0;
        padding: 0 25px;
        margin-right: 500px;
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(15px);
        border-radius: 10px;
        overflow: hidden;
    }

    .about-us h1,
    .about-us #big-text {
        color: white;
        font-size: 42px;
        font-weight: bold;
        text-align: left;
        margin: 10px 0;
    }

    .about-us #big-text {
        color: var(--main-color);
    }

    .butik-info span {
        color: var(--secondary-color);
    }

    .butik-img-text a::after {
        content: '';
        width: 0;
        height: 2px;
        background-color: var(--secondary-color);
        display: block;
        transition: all 0.8s;
        max-width: 117px;
    }

    .butik-img-text a:hover::after {
        width: 100%;
        max-width: 117px;
    }

    /* Back to topp */
    .back-container {
        display: flex;
        align-items: center;
    }
    .back {
        margin: 50px auto 50px;
        text-decoration: none;
        font-weight: 500;
        color: var(--main-color);
    }

    /* Footer Design */
    .footer {
        background: #fef5ed;
        margin-bottom: 25px;
        width: 100%;
        text-align: center;
        margin-top: 50px;
    }

    .footer h4 {
        margin-bottom: 25px;
        font-weight: 600;
    }

    .footer .maker {
        margin: 25px 0;
        font-weight: bold;
    }

    .footer p {
        padding: 0 0 25px;
    }
    .sociala-medier > a > i {
        color: var(--main-color);
        margin: 0 13px;
        cursor: pointer;
        padding: 18px 10px;
    }
    
    /* Invetrt sort icon */
    .fa-bars-sort {
        transform: scaleX(-1);
        -moz-transform: scaleX(-1);
        -webkit-transform: scaleX(-1);
        -ms-transform: scaleX(-1);
    }

    /* Responsivenes */
    @media (max-width: 992px) {
        .navbar .links {
            display: none;
        }

        .navbar .toggle_btn {
            display: block;
        }

        .dropdown_menu {
            display: block;
        }

        .about {
            margin: 55vh 2rem 0;
        }
        .about-us h1,
        .about-us span {
            color: white;
            font-size: 25px;
            text-align: left;
            margin: 10px 0;
        }

        .about-us #big-text {
            font-size: 26px;
            color: var(--main-color);
        }

        .target-h1 {
            text-align: center;

            padding: 100px 75px 0;
            padding-bottom: 25px;
        }

        .target-h1,
        .target-h1 span {
            font-size: 25px;
        }

        .tjanst #snabbt-om-oss {
            display: flex;
            justify-content: center;
            text-align: center;
            margin: 0 10vw;
        }

        .red-line {
            margin: auto;
            background: #ba1019;
            height: 1px;
            width: 20%;
        }

        .tjanst-container {
            display: flex;
            flex-direction: column;
            margin: 50px 0 0;
            padding: 0 25px 0;
            position: relative;
        }

        .img-tjanster {
            z-index: 0;
            transform: translateX(-25px);
            height: 280px;
            width: 100vw;
            background-image: url("./test.JPG");
            background-size: cover;
            background-position: center;
        }

        .tjanster {
            width: fit-content;
            transform: translateY(-40px);
            margin: 0 0 25px;
            padding: 25px;
            border-radius: 10px;
            background-color: white;
        }

        .tjanster p {
            margin-bottom: 25px;
        }

        .tjanster a {
            color: var(--main-color);
            /* max-width: 2px; */
        }

        .butik-info {
            text-align: center;
            padding: 50px 75px 0;
        }

        .butik-info h1 {
            margin-bottom: 25px;
        }

        .butik-info p {
            text-align: center;
            margin-bottom: 50px;
        }

        .butik-container {
            background-color: #fef5ed;
            padding: 0 25px;
        }

        .butik-img {
            z-index: 3;
            background-image: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5)), url("./butik-main.JPG");
            background-size: cover;
            background-position: center;
            color: white;
            box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.362);
            border-radius: 10px;
            height: 65vh;
            padding: 100% 25px 0;
            margin: 50px 0;
            overflow: hidden;
        }

        .butik-img-text {
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(15px);
            padding: 10px;
            border-radius: 10px;
        }

        .butik-img-text span {
            color: var(--secondary-color);
        }

        .butik-img-text p {
            margin: 10px 0 25px;
        }

        .butik-img-text a {
            color: var(--secondary-color);
        }

        .blue-line {
            margin-left: 40%;
            background: var(--secondary-color);
            height: 1px;
            width: 20%;
        }

        .footer {
            margin-top: 0;
        }

        .footer h4 {
            font-size: 20px;
        }

        .footer a {
            text-decoration: underline;
            color: var(--main-color);
        }
    }

    :root {
        --main-color: #ba1019;
        --background-color: #24262b;
        --secondary-color: rgb(0, 115, 255);
    }
</style>