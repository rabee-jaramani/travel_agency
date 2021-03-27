import React from 'react'

export default function FORM_V1_1(props) {
    return (
        <>
           <section className='form-v1 form-v1-1 hide-display'>
           
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div  className='progress-bar '></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>Have you ever visited Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>props.setVisited_dubai('no')} >
                        <input type="checkbox" class="btn-hidden" name="cb" id="cb"/>
                        <label for="cb">
                        <img className='icon' alt='' src={props.N0}></img>
                            No
                        </label>
                    </div>

                    <div className='option' onClick={()=>props.setVisited_dubai('yes')}>
                        <input type="checkbox" class="btn-hidden" name="cb1" id="cb1"/>
                        <label for="cb1">
                        <img className='icon' alt='' src={props.YES}></img>
                            Yes
                        </label>
                    </div>
                </div>

            </div>
            <div className='question-div'>
                <div className='question'> Do you have any friends or family in Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>props.setAny_friends('no')}>
                        <input type="checkbox" class="btn-hidden" name="cb3" id="cb3"/>
                        <label for="cb3">
                        <img className='icon' alt='' src={props.N0}></img>
                            No
                        </label>
                    </div>

                    <div className='option' onClick={()=>props.setAny_friends('yes')}>
                        <input type="checkbox" class="btn-hidden" name="cb4" id="cb4"/>
                        <label for="cb4">
                        <img className='icon' alt='' src={props.YES}></img>
                            Yes
                        </label>
                    </div>
                </div>

            </div>

            <div className='question-div'>
                <div className='question'> How long do you want to stay in stay in Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>props.setWant_to_stay('Upto 3 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb5" id="cb5"/>
                        <label for="cb5">
                        <img className='icon' alt='' src={props.file}></img>
                        Upto 3 months
                        </label>
                    </div>

                    <div className='option' onClick={()=>props.setWant_to_stay('3 to 6 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb6" id="cb6"/>
                        <label for="cb6">
                        <img className='icon' alt='' src={props.file}></img>
                        3 to 6 months
                        </label>
                    </div>
                </div>

                     <div className='options'>

                    <div className='option' onClick={()=>props.setWant_to_stay(' 6 to 12 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb7" id="cb7"/>
                        <label for="cb7">
                        <img className='icon' alt='' src={props.file}></img>
                        6 to 12 months
                        </label>
                    </div>

                    <div className='option' onClick={()=>props.setWant_to_stay(' +12 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb8" id="cb8"/>
                        <label for="cb8">
                        <img className='icon' alt='' src={props.file}></img>
                        +12 months
                        </label>
                    </div>
                </div>

                <div className='options'>

                <div className='option' onClick={()=>props.setWant_to_stay(' +3 years')}>
                    <input type="checkbox" class="btn-hidden" name="cb9" id="cb9"/>
                    <label for="cb9">
                    <img className='icon' alt='' src={props.file}></img>
                    +3 years
                    </label>
                </div>

             
                </div>

            </div>
            <div className='next-back-div'>
                <div className='back-btn' onClick={props.toform_v1_1}>back</div>
            <div className='btn' onClick={props.toform_v1_2}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-1/////////////////////////////////// */}
 
        </>
    )
}
