import './styles/content.css'
import TextBook from './textbook';
import pylogo from '../assets/images/icons8python87.png'
import cpluslogo from '../assets/images/icons8c87.png'
import csharplogo from '../assets/images/icons8csharp87.png'
import css3 from '../assets/images/icons8css387.png'
import javascriptlogo from '../assets/images/icons8javascript87.png'
import reactjslogo from '../assets/images/icons8reactnative87.png'


export default function Content() {
    return (
        <div className='content'>
            <div className='textbook-list'>
                <TextBook logo={pylogo} header='Учим Питон' description='Стоимость' price='2 620' />
                <TextBook logo={cpluslogo} header='Учим С++' description='Стоимость' price='7 460' />
                <TextBook logo={csharplogo} header='Учим С#' description='Стоимость' price='5 680' />
                <TextBook logo={css3} header='Учим CSS3' description='Стоимость' price='1 570' />
                <TextBook logo={javascriptlogo} header='Учим JavaScript' description='Стоимость' price='3 700' />
                <TextBook logo={reactjslogo} header='Учим React Native' description='Стоимость' price='2 790' />
            </div>
        </div>
    );
}