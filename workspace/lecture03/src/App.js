// import logo from './logo.svg';
import './App.css';
import {
  RecoilRoot, 
  atom, selector, 
  useRecoilState, 
  useRecoilValue
} from "recoil";

const textState = atom({
  key: "textState", 
  default: ""
});

const charCountState = selector({
  key: "charCountState", 
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  }, 
});

const addTen = selector({
  key: "addTen", 
  get: ({get}) => {
    const res = get(textState);

    return res;
  }
});

function AddTen() {
  const add10 = useRecoilValue(addTen);

  if (Number.parseInt(add10)){
    return <>add 10: {Number.parseInt(add10)+10}</>;
  } else {
    return <>add 10: </>;
  }
};

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}<br/></>;
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      {/* <CharacterCount /> */}
      <AddTen />
    </div>
  );
}

function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <h1>Hello GCU-Kakao</h1>
        <h2>Add 10</h2>
        <CharacterCounter />
      </div>
    </RecoilRoot>
  );
}

export default App;
