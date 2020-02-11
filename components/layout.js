import Link from 'next/link'

const Layout = (props) => {
  // Default to logged out state for SSR
  let headerLinks = (<Link href="/submit"><a>Submit</a></Link>);

  if (typeof window !== 'undefined' &&
      window.document.cookie.indexOf('isLoggedIn') !== -1) {
    headerLinks = (
      <>
        <Link href="/review"><a>Review Photo</a></Link>
        <Link href="/logout"><a>Log out</a></Link>
      </>
    );
  }

  return (
    <>
      <header className="flex">
        <div className="flex-grow">Diverse UI</div>
        <Link href="/about"><a>About</a></Link>
        <a href="https://github.com/reneepadgham/diverseui-sketch-plugin#readme">Sketch Plugin</a>
        {headerLinks}
      </header>
      {props.children}
      <footer className="flex">
        <p>&copy; Diverse UI 2020 | Terms of Service</p>
        <p>Made with 💖 and ☕️ in San Francisco by Renee and Yefim.</p>
      </footer>
    </>
  );
};

export default Layout;
