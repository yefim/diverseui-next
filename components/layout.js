import Link from 'next/link'

const Layout = (props) => (
  <>
    <header className="flex">
      <div className="flex-grow">Diverse UI</div>
      <Link href="/about">About</Link>
      <a href="https://github.com/reneepadgham/diverseui-sketch-plugin#readme">Sketch Plugin</a>
      <Link href="/submit">Submit</Link>
    </header>
    {props.children}
    <footer className="flex">
      <p>&copy; Diverse UI 2020 | Terms of Service</p>
      <p>Made with 💖 and ☕️ in San Francisco by Renee and Yefim.</p>
    </footer>
  </>
);

export default Layout;
