import { useState, useEffect } from 'react'
import Link from 'next/link'

const Layout = (props) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Default to logged out state for SSR
  let headerLinks = (<Link href="/submit"><a>Submit</a></Link>);

  if (isClient && window.document.cookie.indexOf('isLoggedIn') !== -1) {
    headerLinks = (
      <>
        <Link href="/review"><a>Review Photo</a></Link>
        <Link href="/logout"><a>Log out</a></Link>
      </>
    );
  }

  return (
    <>
      <header className="flex h-12 items-center border-b border-black">
        <div className="flex-grow">
          <Link href="/"><a>Diverse UI</a></Link>
        </div>
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
