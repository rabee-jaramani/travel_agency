import React from 'react'
import OPTION from '../Option_component/OPTION'
import {financial_list} from './finantial'
export default function FORM_V1_4(props) {
    return (
        <>
            <section className='form-v1 form-v1-4 hide-display'>
          
          <div className='digg'>digg</div>

          <div className='progress-div'>
              <div id='bar4' className='progress-bar '><h4>Progress</h4></div>
          </div>

           <div className='questions-container'>

          <div className='question-div'>
              <div className='question'>Do you have any financial savings?</div>

              <div className='options options-grid' id='coins-grid'>
             {
                 financial_list.map((element)=>{
                     return <OPTION name={element.name}
                     img={element.img}
                     savings_handler={props.savings_handler}
                     cb={element.cb}
                     />
                 })
             }
              </div>

          </div>
          <div className='next-back-div'>
          <div className='back-btn' onClick={props.back_toform_v1_3}>back</div>
          <div className='btn' onClick={props.to_form_v1_8}>Next</div>
          </div>


          </div>
          </section>
        </>
    )
}
