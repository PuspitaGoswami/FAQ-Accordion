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
  const [selceted_id,setSelected_id] = useState(null);

  const display_info = (id)=>{
    setSelected_id(id);
      if(display === true){
        setDisplay(false)
      }
      else{
        setDisplay(true);
      }
  }


  return(
    <div className='container'>
    
      <div className='container-wrap'>
      <div className='heading-container'><h1>Frequently Asked Questions</h1></div>
        {questions.map((question)=>(
          <div>
          <div className='question-container' key={question.id}>{question.title}
         <button className='button' onClick={() => display_info(question.id)}>Press</button>
         </div>

            <div className='questions'>
              {display && selceted_id === question.id && (
                <div className='answer'>{question.info}</div>
              )}
            </div>
         </div>
          
        ))}
      </div>
    </div>

  );
 
}

export default App;
