import Navbar from '../../../_shared/frontend/Navbar/Navbar'
import Footer from '../../../_shared/frontend/Footer/Footer'
function DefaultLayout({children}) {
    return (
        <>
            <Navbar />
            <div className="content">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default DefaultLayout
