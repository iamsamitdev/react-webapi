import {useState , useEffect, useRef} from 'react'
// import useFormFields from '../../../hooks/useFormFields'
import { useForm } from "react-hook-form"
import DefaultLayout from "../../../components/_layouts/backend/default/DefaultLayout"
import DocumentTitle from 'react-document-title'
import api from '../../../services/productAPI'
import $ from "jquery"

function Stock() {

    // ==========================================================================
    // ส่วนของการบันทึกข้อมูลเข้า API
    // ===========================================================================
    // เรียกใช้ hook สำหรับการอ่านข้อมูลจากฟอร์ม
    const { register, handleSubmit, reset, errors } = useForm()
    const product_name = useRef()
    
    const onSubmit = (data, e) => {
        // e.target.reset() // reset after form submit
        // console.log(data) 
        // let items = [...products]
        // items.push(data)
        // setProducts(products.push(...data))

        
        api.addNewProduct(data).then(res => {

            console.log(res)

            // สั่งปิดตัว popup
            // $('#modelId').modal('hide')

            // Reset field
            reset()

            // focus field
            product_name.current.focus() // focus field

            // อ่านข้อมูลใหม่
            // readAllProduct()                           

        })
        
        
    }

    // ==========================================================================
    // ส่วนของการอ่านข้อมูลจาก API
    // ===========================================================================
    // สร้างตัวแปรมารับข้อมูลที่อ่านจาก API
    const [products, setProducts] = useState([])

    // อ่านข้อมูลสินค้า
    const readAllProduct = () => {
        api.getAllProduct().then(res => {
            // console.log(res.data)
            setProducts(res.data)
        })
    }

    // กำหนดให้มีการอัพเดทข้อมูลทุกครั้งที่มีการเรียกหน้าจอนั้นๆ
    useEffect(() => {
        readAllProduct()
    },[])
    

    return (
        <DefaultLayout>
            <DocumentTitle title="Stock" />

            <div className="row">
                <div className="col-md-6">
                    <h1 className="mb-3">Stock</h1>
                </div>
                <div className="col-md-6 text-right">
                    <a href="#" data-toggle="modal" data-target="#modelId" className="btn btn-success">Add product</a>
                </div>
            </div>
            

            <table className="table">
                <thead>
                    <tr>
                        <th>Img</th>
                        <th>Name</th>
                        <th>Barcode</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th className="text-right">Manage</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map((product,index) => (
                        <tr key={index}>
                            <td><img src={product.product_image} height="50" alt=""/></td>
                            <td>{product.product_name}</td>
                            <td>{product.product_barcode}</td>
                            <td>{product.product_price}</td>
                            <td>{product.product_date}</td>
                            <td className="text-right" style={{width:'200px'}}>
                                <a href="#" className="btn btn-sm btn-warning">Edit</a>&nbsp;
                                <a href="#" className="btn btn-sm btn-danger">Delete</a>
                            </td>
                        </tr>
                        ))
                    }
                    
                </tbody>
            </table>


            <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title">Add new product</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        <div className="container">
                            <form id="addProductForm" onSubmit={handleSubmit(onSubmit)}>

                                <div className="form-group row">
                                    <label htmlFor="product_name" className="col-md-3 col-form-label">Name</label>
                                    <div className="col-md-9">
                                        <input type="text" 
                                        className="form-control" 
                                        id="product_name"
                                        name="product_name" 
                                        // ref={register({ required: true })} 
                                        ref={(e) => {
                                            register(e)
                                            product_name.current = e // you can still assign to ref
                                          }}
                                        />
                                        {errors.product_name && <p className="error">This is required</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="product_barcode" className="col-md-3 col-form-label">Barcode</label>
                                    <div className="col-md-9">
                                        <input type="text" 
                                        className="form-control" 
                                        name="product_barcode" 
                                        ref={register({ required: true })}
                                        />
                                        {errors.product_barcode && <p className="error">This is required</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="product_price" className="col-md-3 col-form-label">Price</label>
                                    <div className="col-md-9">
                                        <input type="text" 
                                        className="form-control" 
                                        name="product_price" 
                                        ref={register({ required: true })}
                                        />
                                        {errors.product_price && <p className="error">This is required</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="product_qty" className="col-md-3 col-form-label">Qty</label>
                                    <div className="col-md-9">
                                        <input type="text" 
                                        className="form-control" 
                                        name="product_qty" 
                                        ref={register({ required: true })}
                                        />
                                        {errors.product_qty && <p className="error">This is required</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="product_detail" className="col-md-3 col-form-label">Description</label>
                                    <div className="col-md-9">
                                        <textarea name="product_detail" 
                                        className="form-control" 
                                        rows="5" 
                                        ref={register({ required: true })}
                                        />
                                        {errors.product_detail && <p className="error">This is required</p>}
                                    </div>
                                </div>

                                <div className="form-group row">
                                    <label htmlFor="product_image" className="col-md-3 col-form-label">Image URL</label>
                                    <div className="col-md-9">
                                        <input type="text" 
                                        className="form-control" 
                                        name="product_image" 
                                        ref={register({ required: true })}
                                        />
                                        {errors.product_image && <p className="error">This is required</p>}
                                    </div>
                                </div>
                                
                                <div className="form-group row">
                                    <label htmlFor="" className="col-md-3 col-form-label"></label>
                                    <div className="col-md-9">
                                        <input type="submit" className="btn btn-primary" value="Submit" /> &nbsp;
                                        <input type="button" className="btn btn-warning" value="Reset" 
                                        onClick={() => {
                                            reset()
                                            product_name.current.focus()
                                        }} />
                                    </div>
                                </div>

                            </form>
                        </div>

                    </div>
                </div>
                </div>
            </div>


        </DefaultLayout>
    )
}

export default Stock
