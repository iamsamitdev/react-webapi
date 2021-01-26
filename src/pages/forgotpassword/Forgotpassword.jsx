import {Link, useHistory} from 'react-router-dom'
import {SYS_NAME} from '../../constants/Constants'
import AuthLayout from '../../components/_layouts/auth/AuthLayout'
import DocumentTitle from 'react-document-title';
import useFormFields from '../../hooks/useFormFields'
import Swal from 'sweetalert2'

function Forgotpassword() {

    let history = useHistory();

    const signin = () => {

        // ตรวจถ้า login ถูกต้อง
        if(inputs.email === "admin@gmail.com"){
  
            let timerInterval
            Swal.fire({
                html: 'กำลังส่งข้อมูลไปที่อีเมล์ของท่าน <b></b>',
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
            text: 'ไม่พบอีเมล์ที่ลงทะเบียนไว้ในระบบ',
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
            <DocumentTitle title={'ลืมรหัสผ่าน' + SYS_NAME} />
            <form className="card p-4 col-md-4 offset-md-4" onSubmit={handleSubmit}>
                <h3 className="text-center mb-4">ลืมรหัสผ่าน</h3>
               
                <div className="mb-3 row">
                    <label htmlFor="email" className="col-md-4 col-form-label">
                    อีเมล์ที่ใช้ลงทะเบียน
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
                    <label htmlFor="submit" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8 btn-action">
                    <input
                        type="submit"
                        className="btn btn-primary"
                        name="submit"
                        id="submit"
                        value="ส่งข้อมูล"
                    />
                    </div>
                </div>
                <div className="mb-2 row btn-action">
                    <label htmlFor="" className="col-md-4 col-form-label"></label>
                    <div className="col-md-8"><Link to="/signin">เข้าสู่ระบบ</Link></div>
                </div>
            </form>
        </AuthLayout>
    )
}

export default Forgotpassword