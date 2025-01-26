import './globals.css';

export const metadata = {
  title: 'Botol Website',
  description: 'A hydration product website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar">
            <div className="logo">BOTOL</div>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a className="cta" href="/inquiry">Inquiry Now</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
