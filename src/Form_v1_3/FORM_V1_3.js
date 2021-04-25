import React from 'react'
import OPTION from '../Option_component/OPTION'

export default function FORM_V1_3(props) {
    return (
        <>
             {/* ///////////////////////////////////////Start of form-v1-3/////////////////////////////////////////////////////////// */}
             <section className='form-v1 form-v1-3 hide-display'>
          
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div id='bar3' className='progress-bar '><h4>Progress</h4></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>What industries would you prefer towork in?</div>

                <div className='options options-grid'>
               {
                   props.industries_list.map((element)=>{
                       return <OPTION name={element.name}
                       img={element.img}
                       on_click={props.what_industries_handler}
                       cb={element.cb}
                       chk_name={element.chk_name}
                       />
                   })
               }
                </div>

            </div>
            <div className='next-back-div'>
            <div className='back-btn' onClick={props.back_toform_v1_2}>back</div>
            <div className='btn' onClick={props.to_form_v1_4}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-3////////////////////////////////// */}

        </>
    )
}
