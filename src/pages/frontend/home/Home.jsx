import {SYS_NAME} from '../../../constants/Constants'
import DocumentTitle from 'react-document-title';
import DefaultLayout from '../../../components/_layouts/frontend/default/DefaultLayout'
function Home() {
    return (
        <DefaultLayout>
            <DocumentTitle title={'หน้าหลัก' + SYS_NAME} />
            <div className="jumbotron py-5">
                <div className="container">
                    <h1 className="display-5 text-center">หน้าหลัก</h1>
                </div>
            </div>
            <div className="container">

                {[...Array(10)].map((x, i) =>
                  <p key={i}>{ i+1 } Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release</p>  
                )}

            </div>
        </DefaultLayout>
    )
}

export default Home