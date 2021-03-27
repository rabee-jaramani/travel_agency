import React from 'react'

export default function FORM_V1_2(props) {
    return (
        <>
                        {/* ///////////////////////////////////////Start of form-v1-2/////////////////////////////////////////////////////////// */}
                        <section className='form-v1 form-v1-2 hide-display'>
            {/* <div className='img1-div' ></div> */}
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div id='bar2' className='progress-bar '></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>Why do you want to come to dubai?</div>
                <div className='options'>

                    <div className='option'  >
                        <input type="checkbox" class="btn-hidden" name="cb10" id="cb10"/>
                        <label for="cb10" onClick={props.why_dubai_handler}>
                        <img className='icon' alt='' src={props.life_style}></img>
                        Lifestyle
                        </label>
                    </div>

                    <div className='option' >
                        <input type="checkbox" class="btn-hidden" name="cb11" id="cb11"/>
                        <label for="cb11" onClick={props.why_dubai_handler}>
                        <img className='icon' alt='' src={props.Work_opportunities}></img>
                        Work opportunities
                        </label>
                    </div>
                </div>
                <div className='options'>

                <div className='option'  >
                    <input type="checkbox" class="btn-hidden" name="cb12" id="cb12"/>
                    <label for="cb12" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.education}></img>
                    Education
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb13" id="cb13"/>
                    <label for="cb13" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.education}></img>
                    Education
                    </label>
                </div>
                
                </div>
                <div className='options'>

                <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb14" id="cb14"/>
                    <label for="cb14" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.finance}></img>
                    Finance
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb15" id="cb15"/>
                    <label for="cb15" onClick={props.why_dubai_handler}>
                    <img className='icon tourism-icon' alt='' src={props.tourism}></img>
                    Tourism
                    </label>
                </div>
                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb16" id="cb16"/>
                    <label for="cb16" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.family}></img>
                    Family
                    </label>
                </div>
               </div>

               <div className='options'>
               <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb17" id="cb17"/>
                    <label for="cb17" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.business}></img>
                    Business
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb18" id="cb18"/>
                    <label for="cb18" onClick={props.why_dubai_handler}>
                    <img className='icon tourism-icon' alt='' src={props.security}></img>
                    Security
                    </label>
                </div>
                <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb19" id="cb19"/>
                    <label for="cb19" onClick={props.why_dubai_handler}>
                    <img className='icon' alt='' src={props.culture}></img>
                    Culture
                    </label>
                </div>
                </div>


            </div>
    

         
            <div className='next-back-div'>
                <div className='back-btn' onClick={props.back_toform_v1_1}>back</div>
            <div className='btn' onClick={props.to_form_v1_3}>Next</div>
            </div>


            </div>
            </section>
        </>
    )
}
