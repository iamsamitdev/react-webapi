import {Link, useHistory} from 'react-router-dom'
import {SYS_NAME} from '../../constants/Constants'
import AuthLayout from '../../components/_layouts/auth/AuthLayout'
import DocumentTitle from 'react-document-title';
import useFormFields from '../../hooks/useFormFields'
import Swal from 'sweetalert2'

function SignUp() {

    let history = useHistory();

    const signup = () => {

        // console.log(inputs.fullname)
        // console.log(inputs.email)
        // console.log(inputs.username)
        // console.log(inputs.password)

        if(inputs.fullname.trim() !== "" && inputs.email.trim() !== "" && inputs.username.trim() !== "" && inputs.password.trim() !== ""){
            let timerInterval
            Swal.fire({
                html: 'ลงทะเบียนเรียบร้อย <b></b>',
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
                    history.push('/')
                }
            })
        }else{
            Swal.fire({
                title: 'มีข้อผิดพลาด!',
                text: 'ลงทะเบียนไม่สำเร็จ',
                icon: 'error',
                confirmButtonText: 'ลองใหม่อีกครั้ง',
                allowOutsideClick: false,
                allowEscapeKey: true
            })
        }

    }

    const {inputs, handleInputChange, handleSubmit} = useFormFields(signup)

    return (
        <AuthLayout>
            <DocumentTitle title={'ลงทะเบียน' + SYS_NAME} />
            <form className="card p-4 col-md-4 offset-md-4 my-form" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">ลงทะเบียน</h3>
                <div className="mb-3 row">
                <label htmlFor="fullname" className="col-md-4 col-form-label">
                    ชื่อ-สกุล
                </label>
                <div className="col-md-8">
                    <input
                    type="text"
                    className="form-control"
                    name="fullname"
                    onChange={handleInputChange} 
                    value={inputs.fullname}
                    required
                    />
                </div>
                </div>
                <div className="mb-3 row">
                <label htmlFor="email" className="col-md-4 col-form-label">
                    อีเมล์
                </label>
                <div className="col-md-8">
                    <input
                    type="text"
                    className="form-control"
                    name="email"
                    onChange={handleInputChange} 
                    value={inputs.email}
                    required
                    />
                </div>
                </div>
                <div className="mb-3 row">
                <label htmlFor="username" className="col-md-4 col-form-label">
                    ชื่อผู้ใช้
                </label>
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
                <label htmlFor="password" className="col-md-4 col-form-label">
                รหัสผ่าน
                </label>
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
                    value="ลงทะเบียน"
                    />
                </div>
                </div>
                <div className="mb-2 row btn-action">
                <label htmlFor="" className="col-md-4 col-form-label"></label>
                <div className="col-md-8">
                <Link to="/signin">เข้าสู่ระบบ</Link>
                </div>
                </div>
            </form>
        </AuthLayout>
    )
}

export default SignUp