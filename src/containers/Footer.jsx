import '../styles/footer.css'

export default function Footer({logo}) {
    return (
        <footer>
          <img src={logo} className='App-logo' alt='logo' />
        </footer>
    );
}