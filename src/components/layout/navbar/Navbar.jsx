import "./navbar.css";
export const Navbar = () => {
    return (
        <nav className="conteiner-navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
    );
};