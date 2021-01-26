import {SYS_NAME} from '../../../constants/Constants'
import DefaultLayout from '../../../components/_layouts/frontend/default/DefaultLayout'
import DocumentTitle from 'react-document-title';
function About() {
    return (
        <DefaultLayout>
            <DocumentTitle title={'เกี่ยวกับเรา' + SYS_NAME} />
            <div className="jumbotron py-5">
                <div className="container">
                    <h1 className="display-5 text-center">เกี่ยวกับเรา</h1>
                </div>
            </div>
            <div className="container">

                {[...Array(8)].map((x, i) =>
                  <p key={i}>{ i+1 } There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words </p>  
                )}

            </div>
        </DefaultLayout>
    )
}

export default About
