import { Link } from 'react-router-dom'
import './Presentation.scss'
import UxUi from '../JobTitle/UxUi'
import UiDeveloper from '../JobTitle/UiDeveloper'

function Presentation() {
    return (
        <section className="sct-pres">
            <div className="sct-pres__inner">
                <h1>Diez Audrey</h1>

                <UxUi />
                <UiDeveloper />
            </div>
        </section>
    )
}

export default Presentation
