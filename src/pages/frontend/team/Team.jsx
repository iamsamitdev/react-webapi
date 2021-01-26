import {SYS_NAME} from '../../../constants/Constants'
import DefaultLayout from '../../../components/_layouts/frontend/default/DefaultLayout'
import DocumentTitle from 'react-document-title';
function Team() {
    return (
        <DefaultLayout>
            <DocumentTitle title={'ทีมงาน' + SYS_NAME} />
            <div className="jumbotron py-5">
                <div className="container">
                    <h1 className="display-5 text-center">ทีมงาน</h1>
                </div>
            </div>
            <div className="container">

                {[...Array(20)].map((x, i) =>
                  <p key={i}>{ i+1 } Nunc blandit arcu at lorem tincidunt, in ultricies dolor ultrices. Pellentesque varius, quam vitae mattis gravida, ante purus bibendum sem, quis vulputate risus quam in purus. Nam venenatis est eu diam consequat fringilla. Nulla auctor turpis nec nunc auctor, in accumsan sem suscipit. Integer in dui tempor, accumsan justo quis, maximus justo. Maecenas vel commodo massa. Fusce non arcu hendrerit, aliquet dolor id, gravida enim. Pellentesque sed risus nec nunc aliquam facilisis sed sollicitudin augue. Vivamus ultrices est condimentum vestibulum dignissim</p>  
                )}

            </div>
        </DefaultLayout>
    )
}

export default Team