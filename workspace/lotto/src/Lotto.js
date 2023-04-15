import './Lotto.css';

import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue
  } from "recoil";
import { useState } from 'react';
    

  const number1 = atom({
    key: "number1",
    default: ""
  });

  const number2 = atom({
    key: "number2",
    default: ""
  });  

  const resultSet = atom({
    key: "resultSet",
    default : [12, 43, 41, 25, 9, 28, 15, 2, 31]
  })

  function InputNumber1() {
    const num1 = useRecoilValue(num1Selector);
  
    if(isNaN(num1)){
        return <>{num1}</>
    }
  }

  function InputNumber2() {
    const num2 = useRecoilValue(num2Selector);
  
    if(isNaN(num2)){
        return <>{num2}</>
    }
  }

  const num1Selector = selector({
    key : "num1Selector",
  get: ({get}) => {
    const num = get(number1);
    if(num.length === 0) {
      return "정수를 입력해주세요"
    } else {
        if(isNaN(num)) {
          return "입력이 숫자가 아닙니다.";
        } else {
          return Number(num);
        }    
    }  
  }
  })

  const num2Selector = selector({
    key : "num2Selector",
  get: ({get}) => {
    const num = get(number2);
    if(num.length === 0) {
      return "정수를 입력해주세요";
    } else {
        if(isNaN(num)) {
          return "입력이 숫자가 아닙니다.";
        } else {
          return Number(num);
        }    
    }  
  }
  })

  const resultSetSelector = selector({
    key:"resultSetSelector",
    get: ({get}) => {
      const list = get(resultSet);
      return list;
    }
  })

  function TextInputNum1() {
    const [numberState1, setNumberState1] = useRecoilState(number1);
  
    const onChange = (event) => {
      setNumberState1(event.target.value);
    }
  
    return (
      <div>        
        <b>Number1:  </b> <input type="text" value={numberState1} onChange={onChange} />
        <br />        
      </div>
    );
  }


  function TextInputNum2() {
    const [numberState2, setNumberState2] = useRecoilState(number2);
  
    const onChange = (event) => {
      setNumberState2(event.target.value);
    }
  
    return (
      <div>
        <br/>        
        <b>Number2:  </b><input type="text" value={numberState2} onChange={onChange} />
        <br />        
      </div>
    );
  }


  function InitializeLottoNumber() {        
    const num1 = parseInt(useRecoilValue(number1));
    const num2 = parseInt(useRecoilValue(number2));           
    const resultSetVar = useRecoilValue(resultSetSelector);    
  

    // 난수 생성
    if(!isNaN(num1) && !isNaN(num2)) {
        var tempList = [];        
        for(var i=0; i<7; i++) {
            tempList.push(Math.floor(Math.random() * 45) + 1);
        }        
        tempList.push(num1);
        tempList.push(num2);        
        var sortedList = bubble_sort(tempList);

        var count = 0;
        var resultStr = "꽝";        
        for(var i=0; i<9; i++) {                    
          if(Number(tempList[i]) === Number(resultSetVar[i])) {            
            count++;            
          }
        }

        if(count >= 3 && count < 9) {
          resultStr = "보너스";
        } else if(count === 9) {
          resultStr = "대박";
        }        

        return (
          <div>
            <br/><b>응모번호: </b>{sortedList.map((value3, key) => <u className='u_text'>{value3 + " "}</u>)}
            {/* <h3>응모 번호</h3>
            {tempList.map((value, key) => <u className="u_text">{value + " "}</u>)} */}
            <br/><b>당첨번호: </b>{resultSetVar.map((value2, key) => <u className='u_text'>{value2 + " "}</u>)}            
            <h3>{count} 개 당첨 ({resultStr})</h3>
            {/* <h3>정렬된 리스트</h3> */}
          </div>
        )
    }    
  }  


  function bubble_sort(original) {

    var list = [];

    for(var i=0; i<9; i++) {
      list.push(original[i]);
    }

    for(var i=0; i<9; i++) {
      for(var k=0; k<i; k++) {
        if(list[i] < list[k]) {
          var temp = list[i];
          list[i] = list[k];
          list[k] = temp;
        }
      }
    }
    return list;
  }

  export default function Lotto() {    
    const [flag, setFlag] = useState(false);    
    return(
        <div className="mainDiv">        
            <div className="childrenDiv">
            <RecoilRoot>
              <div>
                <TextInputNum1/>
                <InputNumber1/>
                <TextInputNum2/>
                <InputNumber2/>    
              </div>
              <div>
              <button className='button' onClick={() => {setFlag(!flag)}}> 로또 응모하기 </button>                
              </div>
              {flag ? <InitializeLottoNumber/> : <></>}                                            
            </RecoilRoot>        
            </div>    
        </div>
    );
  }