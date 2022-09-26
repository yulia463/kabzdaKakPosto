import React, {useState} from "react";
type CalculatorPropsType={

}
export const Calculator=()=>{

    let [ sum, setSum ] = useState('');
    // useState возврщает массив: можно запистаь так:
    // const useStateCalculator = useState('');
    // // console.log('use state calculator', useStateCalculator);
    // let sum = useStateCalculator[0];
    // let setSum = useStateCalculator[1];
    return(
        <div>
            <div
                style={{
                    height: '30px',
                    width:'200px',
                    border:'2px solid black'
                }}
            >
                {sum}
            </div>
          <button onClick={()=>{setSum(sum+'1')}}>1</button>
          <button onClick={()=>{setSum(sum+'2')}}>2</button>
          <button onClick={()=>{setSum(sum+'3')}}>3</button>
          <button onClick={()=>{setSum(sum+'4')}}>4</button>
          <button onClick={()=>{setSum(sum+'5')}}>5</button>
          <button onClick={()=>{setSum(sum+'6')}}>6</button>
          <button onClick={()=>{setSum(sum+'7')}}>7</button>
          <button onClick={()=>{setSum(sum+'8')}}>8</button>
          <button onClick={()=>{setSum(sum+'9')}}>9</button>
          <button onClick={()=>{setSum(sum+'0')}}>0</button>
          <button onClick={()=>{setSum(sum+'+')}}>+</button>
          <button onClick={()=>{setSum('')}}>c</button>

        </div>
    )
}