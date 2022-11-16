import './MenuBar.css';
import Cloud from '../../src/resources/1.png'

export default function MenuBar(){
    return(
        <div>
            <nav>
                <ul>
                    <li><img src={Cloud}/></li>
                    <li><a href="">Open Weather API</a></li>
                </ul>
            </nav>
        </div>
    );
}