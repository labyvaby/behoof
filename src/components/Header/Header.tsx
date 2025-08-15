import Container from '../Сontainer/Container';
import logo from '../../assets/logo.svg';
import './style.scss';

export default function Header() {
  return (
    <header className="header">
      <Container>
        <img src={logo} alt="logo" />
      </Container> 
       <div className="header__content">  
        <h1>Behoof</h1>
        <p>Behoof is a platform for creating and sharing interactive educational content.</p>
       </div>
    </header>
  );
}
 
