import {NavLink} from 'react-router-dom'

function Sidebar() {
    return (
        <div className="card" style={{marginTop:'50px'}}>
            <ul className="list-group list-group-flush">
                <NavLink to='/backend/dashboard'><li className="list-group-item">Dashboard</li></NavLink>
                <NavLink to='/backend/stock'><li className="list-group-item">Stock</li></NavLink>
                <NavLink to='/backend/report'><li className="list-group-item">Report</li></NavLink>
                <NavLink to='/backend/setting'><li className="list-group-item">Settings</li></NavLink>
                <NavLink to='/backend/account'><li className="list-group-item">Account</li></NavLink>
                <NavLink to='/backend/logout'><li className="list-group-item">Logout</li></NavLink>
            </ul>
        </div>
    )
}

export default Sidebar
