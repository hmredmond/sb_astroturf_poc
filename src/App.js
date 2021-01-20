import logo from './logo.svg';
import styled, {css} from 'astroturf';
import moduleStyles from './App.module.scss';

const bottom = 10;
const height= 30;

const red = "#ff0000";

const Footer = styled('div')`
  @import 'styles';  

  position: absolute;
  bottom: ${bottom}px;
  width: 100%;
  padding: ${height/3}px;
  height: ${height}px;
  
  background-color:$yellow;  
  border:2px solid $lightBlue;

  &.variant-red{
    background-color:${red};  
    border:2px solid ${red};
  
  }
  

`;


const styles = css`
  .button{
    background-color: ${red};
  }
`;
let isVariant = true;
function App() {
 
  return (
    <div className="App">
      <header className={styles.button} >
        <img src={logo} className={moduleStyles.appLogo} alt="logo" />
        
        <div variant="secondary" css={css`
                  color: black;
                  border: 1px solid black;
                  background-color: white;

                  &.variant-primary {
                    color: blue;
                    border: 1px solid blue;
                  }

                  &.variant-secondary {
                    color: green;
                  }
                `}>inline css</div>
       </header>
      <Footer variant={isVariant ? "red" : ''}>footer area - styled with astroturf styled component</Footer>
     
    </div>
  );
}

export default App;
