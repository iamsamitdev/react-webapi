import Navbar from '../../../_shared/backend/Navbar/Navbar'
import Footer from '../../../_shared/backend/Footer/Footer'
import Sidebar from '../../../_shared/backend/Sidebar/Sidebar'
function DefaultLayout({children}) {
    return (
        <>
        <Navbar />
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default DefaultLayout