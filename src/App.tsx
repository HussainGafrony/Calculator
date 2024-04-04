
import './App.css';
import ButtonBox from './components/ButtonBox';
import HandleOperation from './components/HandleOperation';
import InputValue from './components/InputValue';
import Wrapper from './components/Wrapper';
import CalcProvider from './context/CalcContext';

const btnValues: (string | number)[][] = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],

]

function App() {
  return (
    <CalcProvider>
      <Wrapper>
        <InputValue />
        <ButtonBox>
          {btnValues.flat().map((btn, i): any => (
            <HandleOperation HandleOperation value={btn} optclass={btn} key={i} >
            </HandleOperation>

          ))}
        </ButtonBox>
      </Wrapper>
    </CalcProvider >
  );
}

export default App;
