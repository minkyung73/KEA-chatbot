// import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot, 
  atom, selector, 
  useRecoilState, 
  useRecoilValue
} from "recoil";

const textState1 = atom({
  key: "textState1", 
  default: ""
});

const textState2 = atom({
  key: "textState2", 
  default: ""
});

const num1 = selector({
  key: "num1", 
  get: ({get}) => {
    const num1 = get(textState1);
    return num1;
  }
});

const num2 = selector({
  key: "num2", 
  get: ({get}) => {
    const num2 = get(textState2);
    return num2;
  }
});

function TextInput1() {
  const [text, setText] = useRecoilState(textState1);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      Number1 <input type="text" value={text} onChange={onChange} />
      <br />
    </div>
  );
}

function TextInput2() {
  const [text, setText] = useRecoilState(textState2);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      Number2: <input type="text" value={text} onChange={onChange} />
      <br />
    </div>
  );
}


function Operator() {
  const n1 = useRecoilValue(num1);
  const n2 = useRecoilValue(num2);

  if (isNaN(Number.parseInt(n1)) || isNaN(Number.parseInt(n2))){
    return (
      <div className="OperatorBox">
        <div className="InnerBox">
          <h3>Operator</h3>
          Add(+): <br />
          Sub(-): <br />
          Mul(*): <br />
          Div( / ): <br />
        </div>
        <div>
          <h3>Result</h3>
        </div>
      </div>
    )
  } else {
    return (
      <div className="OperatorBox">
        <div>
          <h3>Operator </h3>
          Add(+): <br />
          Sub(-): <br />
          Mul(*): <br />
          Div( / ): <br />
        </div>
        <div>
          <h3> Result</h3>
          {Number.parseInt(n1) + Number.parseInt(n2)} <br />
          {Number.parseInt(n1) - Number.parseInt(n2)} <br />
          {Number.parseInt(n1) * Number.parseInt(n2)} <br />
          {Number.parseInt(n1) / Number.parseInt(n2)} <br />
        </div>
      </div>
    )
  } 
}

function Calculator() {
  return (
    <div>
      <TextInput1 />
      <TextInput2 />
      <Operator />
    </div>
  )
}

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <br />
        <h1 style={{backgroundColor: "yellowgreen"}}>GCU Calculator</h1>
        <Calculator />
      </div>
    </RecoilRoot>
  );
}

export default App;
