// import logo from './logo.svg';
import './App.css';
import Lotto from './Lotto.js';
import {
  RecoilRoot, 
  atom, selector, 
  useRecoilState, 
  useRecoilValue
} from "recoil";

// const textState1 = atom({
//   key: "textState1", 
//   default: ""
// });

// const textState2 = atom({
//   key: "textState2", 
//   default: ""
// });

// const num1 = selector({
//   key: "num1", 
//   get: ({get}) => {
//     const num1 = get(textState1);
//     return num1;
//   }
// });

// const num2 = selector({
//   key: "num2", 
//   get: ({get}) => {
//     const num2 = get(textState2);
//     return num2;
//   }
// });

// function TextInput1() {
//   const [text, setText] = useRecoilState(textState1);

//   const onChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       Number1 <input type="text" value={text} onChange={onChange} />
//       <br />
//     </div>
//   );
// }

// function TextInput2() {
//   const [text, setText] = useRecoilState(textState2);

//   const onChange = (event) => {
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       Number2: <input type="text" value={text} onChange={onChange} />
//       <br />
//     </div>
//   );
// }


// // 로또 당첨 결과
// function Result() {
//   // 랜덤으로 9개 번호 배열에 저장
//   const randNumber = Math.floor(Math.random() * 44) + 1;
//   console.log("hi", randNumber);


//   // 랜덤으로 7개 번호 배열에 저장

//   // 7 + 2

//   // 정답 9개 정렬
//   // 사용자 9개 정렬
//   // 비교
//   // 정답 출력


//   return ;
// }

// function Lotto() {
//   return (
//     <div>
//       <TextInput1 />
//       <TextInput2 />
//       <Result />
//     </div>
//   )
// }

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <br />
        <h1>👾 LOTTO 👾</h1>
        <Lotto />
      </div>
    </RecoilRoot>
  );
}

export default App;
