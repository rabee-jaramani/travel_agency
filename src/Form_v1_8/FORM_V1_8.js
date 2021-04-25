import React from 'react'
import edit from '../images/edit.png'
export default function FORM_V1_8(props) {

    return (
        <>
         <section className='form-v1 form-v1-8 hide-display'>
          
            <div id='digg' className='digg'>digg</div>

            <div className='progress-div'>
                <div id='bar8' className='progress-bar '><h4>Progress</h4></div>
            </div>
            <div className='question-div'>
                <div className='question'>Complete - Review your application</div>
                <div className='basic-info'>
                    
                    <div className='main-title'>Basic Information</div>
                    <div className='label-info'>Name: </div>
                    <div className='info-value'>{props.firstname+' '+props.lastname}</div>
                    <br/>
                    <div className='label-info'>Date of birth: </div>
                    <div className='info-value'>{props.birthdate}</div>
                    <br/>
                    <div className='label-info'>Gender: </div>
                    <div className='info-value'>{props.gender}</div>
                    <br/>
                    <div className='label-info'>Nationality: </div>
                    <div className='info-value'>{props.nationality}</div>
                    <br/>
                    <div className='label-info'>Country of residence: </div>
                    <div className='info-value'>{props.countryofresidence}</div>
                    <br/>

                    <div className='label-info'>Contact number: </div>
                    <div className='info-value'>{props.contactnumber}</div>
                    <br/>

                    <div className='label-info'>Email: </div>
                    <br/>
                    <div className='info-value'>{props.email}</div>
                    <br/>

                </div>
               
                </div>
                {/* ///////////////////// */}
                <div className='basic-info'>
                    
                    <div className='main-title'>Questionnaire</div>
                    
                    <div className='question'>Have you ever visited Dubai?
                    <img className='edit-img' src={edit} alt=''/></div>
                  
                    {
                        props.visited_dubai==='no'?
                        <div className='final-choise'>
                        <img src={props.N0} alt=''/>
                        <label>No</label>
                        </div>
                        :
                        <div className='final-choise'>
                        <img src={props.YES} alt=''/>
                        <label>Yes</label>
                        </div>
                        
                       
                    }
                      <div className='question'>Do you have any friends or family in Dubai?<img className='edit-img' src={edit} alt=''/></div>
                     
                    {
                        props.any_friends==='no'?
                        <div className='final-choise'>
                            
                        <img src={props.N0} alt=''/>
                        <label>No</label>
                        </div>
                        :
                        <div className='final-choise'>
                        <img src={props.YES} alt=''/>
                        <label>Yes</label>
                        </div>
                        
                       
                    }
                     <div className='question'>How long do you want to stay in stay in Dubai?<img className='edit-img' src={edit} alt=''/></div>
                    
                        <div className='final-choise'>
                        <img src={props.file}alt=''/>
                        <label>{props.want_to_stay}</label>
                        </div>

                        <div className='question'>Why do you want to come to Dubai?<img className='edit-img' src={edit} alt=''/></div>
                      
                        {props.why_dubai.map((el)=>{
                            return(
                             <div className='final-choise'>
                             <img src={props.file}alt=''/>
                             <label>{el}</label>
                             </div>
                            )
                        })}

                       
                        <div className='question'>What industries would you prefer towork in?<img className='edit-img' src={edit} alt=''/></div>
                        {props.what_industries.map((e)=>{
                            return(
                             <div className='final-choise'>
                             <img src={props.file}alt=''/>
                             <label>{e}</label>
                            
                             </div>
                            )
                        })}

                    <div className='question'>Do you have any finantial savings?
                    <img className='edit-img' src={edit} alt=''/></div>
                    
                    {
                        <div className='final-choise'>
                        <img src={props.N0} alt=''/>
                        <label>{props.savings}</label>
                        </div>
                    }
                     
                </div>
                {/* //////////////// */}
                <div className='next-back-div'>
                <div className='back-btn' onClick={props.back_to_form_v1_4}>back</div>
                <div className='btn complete-btn' onClick={()=>alert('Your Application has been submitted.')}>Complete Application</div>
                </div>
          </section>
        </>
    )
}
