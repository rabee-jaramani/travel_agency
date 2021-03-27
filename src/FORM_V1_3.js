import React from 'react'
import OPTION from './OPTION'

export default function FORM_V1_3(props) {
    return (
        <>
             {/* ///////////////////////////////////////Start of form-v1-3/////////////////////////////////////////////////////////// */}
             <section className='form-v1 form-v1-3 hide-display'>
          
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div id='bar3' className='progress-bar '></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>What industries would you prefer towork in?</div>

                <div className='options options-grid'>
               {
                   props.industries_list.map((element)=>{
                       return <OPTION name={element.name}
                       img={element.img}
                       what_industries_handler={props.what_industries_handler}
                       cb={element.cb}
                       />
                   })
               }
                </div>

            </div>
            <div className='next-back-div'>
            <div className='back-btn' onClick={props.back_toform_v1_2}>back</div>
            <div className='btn' onClick={props.to_form_v1_8}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-3////////////////////////////////// */}

        </>
    )
}
