import React, { useState } from 'react';
import './App.css';


function App() {

  const questions = [
    {
      id:1,
      title: "Is this good product?",
      info:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."

    },
    {
      id: 2,
      title: "How much does it cost?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    },
    {
      id: 3,
      title: "When can I get it?",
      info:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
    }
  ]

  const [display,setDisplay] = useState(false);

  const display_info = ()=>{
      if(display === true){
        setDisplay(false)
      }
      else{
        setDisplay(true);
      }
  }


  return(
    <div>
      <div><h1>FAQ</h1></div>
      <div>
        {questions.map((question)=>(
          <div key={question.id}>{question.title}
          <button onClick={display_info}>Press</button>
            <div>
              {display && (
                <div>{question.info}</div>
              )}
            </div>
          </div>
          
        ))}
      </div>
    </div>

  );
 
}

export default App;
