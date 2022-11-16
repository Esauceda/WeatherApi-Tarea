import './Footer.css';
import UJCV from '../../src/resources/LogoUJCV.png'

export default function Footer(){
    return(
        <div>
            <nav>
                <ul className='footer'>
                    <li className='footerli'><img src={UJCV}/></li>
                    <li className='footerli'><a href="">UJCV</a></li>
                </ul>
            </nav>
        </div>
    );
}