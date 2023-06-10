import '../styles/textbook.css'


export default function TextBook ({logo, header = 'заголовок', description = 'описание', price = 'цена'}) {
    return (
        <div id='textbook'>
                <img src={logo} />
            <div id='main'>
                <a id='name' href='./index.html'>
                    {header}
                </a>
                <a id='description' href='./index.html'>
                    {description}
                </a>
            </div>
            <div id='price'>
                <p>{price} &#8381;</p>
            </div>           
        </div>
    );
}