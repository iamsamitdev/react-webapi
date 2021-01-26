import {SYS_NAME} from '../../../constants/Constants'
import DefaultLayout from '../../../components/_layouts/frontend/default/DefaultLayout'
import DocumentTitle from 'react-document-title';
function Service() {
    return (
        <DefaultLayout>
            <DocumentTitle title={'บริการของเรา' + SYS_NAME} />
            <div className="jumbotron py-5">
                <div className="container">
                    <h1 className="display-5 text-center">บริการของเรา</h1>
                </div>
            </div>
            <div className="container">

                {[...Array(12)].map((x, i) =>
                  <p key={i}>{ i+1 } Maecenas ac elementum tortor. In et justo in mi imperdiet eleifend ut nec justo. Sed turpis lectus, mattis in arcu sit amet, imperdiet maximus nulla. Nulla viverra elementum quam. Fusce vel odio dignissim, iaculis tellus eu, lobortis est. Vivamus lobortis nunc leo, eget euismod diam scelerisque nec. Etiam sed nunc metus. Nunc non turpis pharetra, egestas lacus sit amet, mattis ex. Praesent ut maximus nulla, quis lacinia massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent mollis nibh ac diam finibus, ut egestas justo pharetra</p>  
                )}

            </div>
        </DefaultLayout>
    )
}

export default Service