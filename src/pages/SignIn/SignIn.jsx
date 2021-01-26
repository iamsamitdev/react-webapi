import {useState} from 'react'
import {Link, useHistory, Redirect, useLocation} from 'react-router-dom'
import {SYS_NAME} from '../../constants/Constants'
import AuthLayout from '../../components/_layouts/auth/AuthLayout'
import DocumentTitle from 'react-document-title';
import useFormFields from '../../hooks/useFormFields'
import Swal from 'sweetalert2'
import authenticationAPI from '../../services/authentication/authenticationAPI'

function SignIn() {

    let history = useHistory();

    const [redirectToReferrer, setRedirectToReferrer] = useState(false)
    const { state } = useLocation()

    const signin = () => {
        // console.log(inputs.username);
        // console.log(inputs.password)

        // if (redirectToReferrer === true) {
        //     return <Redirect to='/backend/dashboard' />
        // }

        // ตรวจถ้า login ถูกต้อง
        if(inputs.username === "admin" && inputs.password === "1234"){
  
            let timerInterval
            Swal.fire({
                html: 'กำลังเข้าสู่ระบบ <b></b>',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                    }, 2000)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    // ส่งไปหน้าหลัก
                    // history.push('/')
                    authenticationAPI.authenticate(()=>{
                        setRedirectToReferrer(true)
                        history.push('/backend/dashboard')
                    })

                    if (redirectToReferrer === true) {
                        return <Redirect to={state?.from || '/'} />
                    }
                }
            })


        // history.push('/')
        // Swal.fire({
        //     title: 'เข้าระบบถูกต้อง',
        //     icon: 'success',
        //     confirmButtonText: 'เข้าสู่ระบบ',
        //     showCancelButton: true,
        //     allowOutsideClick: false,
        //     allowEscapeKey: true
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         history.push('/')
        //     }else if (result.isDenied) {

        //     }
        // })

      }else{
        Swal.fire({
            title: 'มีข้อผิดพลาด!',
            text: 'ข้อมูลเข้าระบบไม่ถูกต้อง',
            icon: 'error',
            confirmButtonText: 'ลองใหม่อีกครั้ง',
            allowOutsideClick: false,
            allowEscapeKey: true
        })
      }
    }

    const {inputs, handleInputChange, handleSubmit} = useFormFields(signin);

    return (
        <AuthLayout>
            <DocumentTitle title={'เข้าสู่ระบบ' + SYS_NAME} />
            <form className="card p-4 col-md-4 offset-md-4 my-form" onSubmit={handleSubmit}>
            <h3 className="text-center mb-4">เข้าสู่ระบบ</h3>
            <div className="mb-3 row">
                <label htmlFor="username" className="col-md-4 col-form-label">ชื่อผู้ใช้</label>
                <div className="col-md-8">
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={handleInputChange} 
                    value={inputs.username}
                    required
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="password" className="col-md-4 col-form-label">รหัสผ่าน</label>
                <div className="col-md-8">
                <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={handleInputChange} 
                    value={inputs.password}
                    required
                />
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="submit" className="col-md-4 col-form-label"></label>
                <div className="col-md-8 btn-action">
                <input
                    type="submit"
                    className="btn btn-primary"
                    name="submit"
                    id="submit"
                    value="เข้าสู่ระบบ"
                />
                </div>
            </div>
            <div className="mb-2 row btn-action">
                <label htmlFor="" className="col-md-4 col-form-label"></label>
                <div className="col-md-8"><Link to="/forgotpassword">ลืมรหัสผ่าน ?</Link></div>
            </div>
            <div className="mb-2 row btn-action">
                <label htmlFor="" className="col-md-4 col-form-label"></label>
                <div className="col-md-8"><Link to="/signup">ลงทะเบียน</Link></div>
            </div>
            </form>
        </AuthLayout>
    )
}

export default SignIn