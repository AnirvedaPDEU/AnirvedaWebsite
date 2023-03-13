import React, {useState, useEffect} from "react"
import {Link, useLocation} from "react-router-dom"

// Auth0
export default function Navbar() {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState(location.pathname)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setCurrentPath(location.pathname)
    if (currentPath === "/mockrbi/play") {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [currentPath])

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="w-20">
          <Link to="/">
            <img src="/images/logos/logo.webp" alt="Anirveda Logo" />
          </Link>
        </div>
        {visible && (
          <div className="text-right">
            <h2 className="text-lg text-secondary">email</h2>
            <h3 className="mt-2 cursor-pointer text-primary">Logout</h3>
          </div>
        )}
      </div>
    </div>
  )
}
