import DefaultLayout from "../../../components/_layouts/backend/default/DefaultLayout"
import { Bar, Line } from 'react-chartjs-2';
import DocumentTitle from 'react-document-title';

function Dashboard() {
    
    // ตัวแปรสำหรับเก็บข้อมูล chart
    const state = {
        labels:['มกราคม','กุมภาพันธ์','มีนาคม','เมษายน','พฤษภาคม'],
        datasets:[
            {
                label:'ยอดขาย',
                data:[65,98,80,72,54],
                backgroundColor:'rgba(75,192,192,1)',
                borderWidht:2,
            }
        ]
    }

    return (
        <DefaultLayout>
            <DocumentTitle title="Dashboard" />
            <h1 className="mb-3">Dashboard</h1>
            <div class="row">
                <div class="col-md-6">
                    <Bar
                    height={300}
                    data={state} 
                    options={{
                        maintainAspectRatio:false,
                        title:{
                            display:true,
                            text:'Monthly Report',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }} />  
                </div>
                <div class="col-md-6">
                    <Line height={300}
                    data={state} 
                    options={{
                        maintainAspectRatio:false,
                        title:{
                            display:true,
                            text:'Monthly Report',
                            fontSize:20
                        },
                        legend:{
                            display:true,
                            position:'right'
                        }
                    }} />
                </div>
            </div>
        </DefaultLayout>
    )
}

export default Dashboard
