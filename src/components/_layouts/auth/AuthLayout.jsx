import Navbar from '../../_shared/frontend/Navbar/Navbar'
import Footer from '../../_shared/frontend/Footer/Footer'
function AuthLayout({children}) {
    return (
        <>
            <Navbar />
            <div className="d-flex align-items-center auth-content">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default AuthLayout
