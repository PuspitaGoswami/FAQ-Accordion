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
  const [selceted_id,setSelected_id] = useState([]);

  const display_info = (id)=>{
    console.log('id ', id);
  
    
    setDisplay(!display);

    if(selceted_id.includes(id)){
     setSelected_id(selceted_id.filter(selected=>selected !== id))
    }
    else{
       setSelected_id([...selceted_id,id]);
    }
    console.log('jhjhj', selceted_id);
  }


  return(
    <div className='container'>
  
      <div className='container-wrap'>
      <div className='heading-container'><h1>Frequently Asked Questions</h1></div>
        {questions.map((question)=>(
          <div className='wrapper'>
          <div className='question-container' key={question.id}>{question.title}
          <div>
         <button className='button' onClick={() => display_info(question.id)}> +</button>
         </div>
         </div>

            <div className='questions'>
              {selceted_id.includes(question.id) && (
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
