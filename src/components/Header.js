const Header = () => {
    return (
        <header>
            <div class="header-info">
                <img src="img/header-image.jpg" alt="Ken Ellingsen" />
                <div class="name-title">
                    <h1>Ken Ellingsen</h1>
                    <h3>Front End Developer</h3>
                </div>
            </div>
            <div class="navbar">
                <a href="#" class="nav-item">Home</a>
                <a href="projects/index.html" class="nav-item dropdown">Projects</a>
                <div class="dropdown-content hide">
                    <a href="projects/index.html#react-projects">React</a>
                    <a href="projects/index.html#javascript-projects">JavaScript</a>
                    <a href="projects/index.html#html-css-projects">HTML/CSS</a>
                    <a href="repo-gallery/index.html">Repo Gallery</a>
                </div>
                <a href="#about" class="nav-item">About</a>
                <a href="#skills" class="nav-item">Skills</a>
                <a href="#contact" class="nav-item">Contact</a>
            </div>
        </header>
    )
};

export default Header;