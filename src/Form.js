import React, { useState } from 'react'
import nationality_json from './nationality.json'
import countries_json from './countries.json'
// importing the icons
import N0 from './images/no.png'
import YES from './images/yes.png'
import file from './images/file.png'

import life_style from './images/life_style.png'
import Work_opportunities from './images/Work_opportunities.png'
import education from './images/education.png'
import business from './images/business.png'
import culture from './images/culture.png'
import family from './images/family.png'
import finance from './images/finance.png'
import security from './images/security.png'
import tourism from './images/tourism.png'







export default function Form() {
    const [nationalities, setNationalities] = useState([]);
     //get countries from data
     const [countries, setCountries] = useState([]);
 
    // values for form-v1
    const [firstname, setFirstname] = useState([])
    const [lastname, setLastname] = useState([])
    const [birthdate, setBirthdate] = useState([])
    const [username, setUsername] = useState([])
    const [gender, setGender] = useState([])
    const [nationality, setNtionality] = useState([])
    const [countryofresidence, setCountryofresidence] = useState([])
    const [contactnumber, setContactnumber] = useState([])
    const [email, setEmail] = useState([])

    // form-v1-1
    const [visited_dubai, setVisited_dubai] = useState('');
    const [any_friends, setAny_friends] = useState('');
    const [want_to_stay, setWant_to_stay] = useState('')
 
    //formv1-2
    const [why_dubai, setWhy_dubai] = useState([])

   


    function get_nationalities(){
        var result=[];
              for(var i in nationality_json){
                  result.push([nationality_json[i]]);
              }
              setNationalities(result);
    }

    function get_countries(){
        var result=[];
              for(var i in countries_json){
                  result.push([i, countries_json[i]]);
              }
              var list_cnt=[];
              for(var j=0;j<result.length;j++){
                list_cnt.push(result[j][0]);
              }
              setCountries(list_cnt);
    }

    function toform_v1_1(){
        console.log(
            firstname+
            lastname+
            birthdate+
            username+
            gender+
            nationality+
            countryofresidence+
            contactnumber+
            email+
            visited_dubai+any_friends+want_to_stay
        )
        document.querySelector('.form-v1').classList.toggle('hide-display');
        document.querySelector('.form-v1-1').classList.toggle('hide-display');

    }
    function back_toform_v1_1(){
        document.querySelector('.form-v1-1').classList.toggle('hide-display');
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
    }
    function toform_v1_2(){
        // validation
        // if(visited_dubai && any_friends && want_to_stay){
        document.getElementById('bar2').style.width='25%'
        document.querySelector('.form-v1-1').classList.toggle('hide-display');
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        // }
        // else{
            // alert('Please answer the questions')
        // }

    }


    function to_form_v1_3(){
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        document.querySelector('.form-v1-3').classList.toggle('hide-display');

    }
    
    function why_dubai_handler(e){
        if(!why_dubai.includes(e.target.textContent))
        {
            setWhy_dubai([...why_dubai,e.target.textContent]);
        }
        else{
            console.log(why_dubai)
        }
        
       
    }
    // function backToform_v1(){
    //     document.querySelector('.form-v1').classList.add('hide-display');
    //     document.querySelector('.form-v1-1').classList.remove('hide-opacity');
    // }
    return (
        <>
            <section className='form-v1 '>
            <div className='img1-div' ></div>
            <h1 className='digg'>digg</h1>
            <h3>Apply now to work in Dubai </h3>
            <div class="input-div">
                <input type="text" onChange={(e)=>setFirstname(e.target.value)} required/>
                <label>First name</label>
            </div>
            <div class="input-div">
                <input type="text" onChange={(e)=>setLastname(e.target.value)} required/>
                <label>Last name</label>
            </div>
            <div class="input-div">
            <input type="date" id="dateOfBirth" onChange={(e)=>setBirthdate(e.target.value)} name="trip-start"
                    min="1920-01-01" max="2015-12-31"></input>
            <label>Date of birth</label>
            </div>
            <div class="input-div">
                <input type="text" onChange={(e)=>setUsername(e.target.value)} required/>
                <label>User name</label>
            </div>
            <div className='gender-div'>
                <p>Gender</p>
                <input type="checkbox" onChange={e=>setGender('Male')}/>
                <label>Male</label>

                <input type="checkbox" onChange={e=>setGender('Female')}/>
                <label>Female</label>

                <input type="checkbox" onChange={e=>setGender('Other')}/>
                <label>Other</label>
            </div>
            <select id='nationality' onClick={get_nationalities} onMouseOver={get_nationalities}  onChange={e=>setNtionality(e.target.value)}>
                        <option className='dropdown-placeholder' value=""
                    
                         disabled selected>Nationality</option>
                            {nationalities.map((country)=>{
                            return <option > {country} </option>
                            })}              
            </select>

            <select id='country' onClick={get_countries} onMouseOver={get_countries}  onChange={e=>setCountryofresidence(e.target.value)}>
                        <option className='dropdown-placeholder' value="" disabled selected>Country of risedence</option>
                            {countries.map((country)=>{
                            return <option > {country} </option>
                            })}              
             </select>
            <div className='contact'>
                <div className='contact-title'>How we can contact you?</div> 
            <div class="input-div">
                <input type="text" onChange={e=>setContactnumber(e.target.value)} required/>
                <label>Contact number</label>
            </div>
            <div class="input-div">
                <input type="text" onChange={e=>setEmail(e.target.value)} required/>
                <label>Email address</label>
            </div>
            </div>
            
           <div className='btn' onClick={toform_v1_1}>Apply Now</div>
           <div className='img2-div' ></div>
 {/* <img id='formv1_img2' src={formv1_img2}></img> */}
           
        
            </section>
{/* /////////////////////////////////End of form-v1////////////////////////////////////////////////////////////// */}

{/* ///////////////////////////////////////Start of form-v1-1/////////////////////////////////////////////////////////// */}
            <section className='form-v1 form-v1-1 hide-display'>
            {/* <div className='img1-div' ></div> */}
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div  className='progress-bar '></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>Have you ever visited Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>setVisited_dubai('no')} >
                        <input type="checkbox" class="btn-hidden" name="cb" id="cb"/>
                        <label for="cb">
                        <img className='icon' alt='' src={N0}></img>
                            No
                        </label>
                    </div>

                    <div className='option' onClick={()=>setVisited_dubai('yes')}>
                        <input type="checkbox" class="btn-hidden" name="cb1" id="cb1"/>
                        <label for="cb1">
                        <img className='icon' alt='' src={YES}></img>
                            Yes
                        </label>
                    </div>
                </div>

            </div>
            <div className='question-div'>
                <div className='question'> Do you have any friends or family in Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>setAny_friends('no')}>
                        <input type="checkbox" class="btn-hidden" name="cb3" id="cb3"/>
                        <label for="cb3">
                        <img className='icon' alt='' src={N0}></img>
                            No
                        </label>
                    </div>

                    <div className='option' onClick={()=>setAny_friends('yes')}>
                        <input type="checkbox" class="btn-hidden" name="cb4" id="cb4"/>
                        <label for="cb4">
                        <img className='icon' alt='' src={YES}></img>
                            Yes
                        </label>
                    </div>
                </div>

            </div>

            <div className='question-div'>
                <div className='question'> How long do you want to stay in stay in Dubai?</div>
                <div className='options'>

                    <div className='option' onClick={()=>setWant_to_stay('Upto 3 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb5" id="cb5"/>
                        <label for="cb5">
                        <img className='icon' alt='' src={file}></img>
                        Upto 3 months
                        </label>
                    </div>

                    <div className='option' onClick={()=>setWant_to_stay('3 to 6 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb6" id="cb6"/>
                        <label for="cb6">
                        <img className='icon' alt='' src={file}></img>
                        3 to 6 months
                        </label>
                    </div>
                </div>

                     <div className='options'>

                    <div className='option' onClick={()=>setWant_to_stay(' 6 to 12 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb7" id="cb7"/>
                        <label for="cb7">
                        <img className='icon' alt='' src={file}></img>
                        6 to 12 months
                        </label>
                    </div>

                    <div className='option' onClick={()=>setWant_to_stay(' +12 months')}>
                        <input type="checkbox" class="btn-hidden" name="cb8" id="cb8"/>
                        <label for="cb8">
                        <img className='icon' alt='' src={file}></img>
                        +12 months
                        </label>
                    </div>
                </div>

                <div className='options'>

                <div className='option' onClick={()=>setWant_to_stay(' +3 years')}>
                    <input type="checkbox" class="btn-hidden" name="cb9" id="cb9"/>
                    <label for="cb9">
                    <img className='icon' alt='' src={file}></img>
                    +3 years
                    </label>
                </div>

             
                </div>

            </div>
            <div className='next-back-div'>
                <div className='back-btn' onClick={toform_v1_1}>back</div>
            <div className='btn' onClick={toform_v1_2}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-1/////////////////////////////////// */}


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
                        <label for="cb10" onClick={why_dubai_handler}>
                        <img className='icon' alt='' src={life_style}></img>
                        Lifestyle
                        </label>
                    </div>

                    <div className='option' >
                        <input type="checkbox" class="btn-hidden" name="cb11" id="cb11"/>
                        <label for="cb11" onClick={why_dubai_handler}>
                        <img className='icon' alt='' src={Work_opportunities}></img>
                        Work opportunities
                        </label>
                    </div>
                </div>
                <div className='options'>

                <div className='option'  >
                    <input type="checkbox" class="btn-hidden" name="cb12" id="cb12"/>
                    <label for="cb12" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={education}></img>
                    Education
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb13" id="cb13"/>
                    <label for="cb13" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={education}></img>
                    Education
                    </label>
                </div>
                
                </div>
                <div className='options'>

                <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb14" id="cb14"/>
                    <label for="cb14" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={finance}></img>
                    Finance
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb15" id="cb15"/>
                    <label for="cb15" onClick={why_dubai_handler}>
                    <img className='icon tourism-icon' alt='' src={tourism}></img>
                    Tourism
                    </label>
                </div>
                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb16" id="cb16"/>
                    <label for="cb16" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={family}></img>
                    Family
                    </label>
                </div>
                <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb17" id="cb17"/>
                    <label for="cb17" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={business}></img>
                    Business
                    </label>
                </div>

                <div className='option'>
                    <input type="checkbox" class="btn-hidden" name="cb18" id="cb18"/>
                    <label for="cb18" onClick={why_dubai_handler}>
                    <img className='icon tourism-icon' alt='' src={security}></img>
                    Security
                    </label>
                </div>
                <div className='option' >
                    <input type="checkbox" class="btn-hidden" name="cb19" id="cb19"/>
                    <label for="cb19" onClick={why_dubai_handler}>
                    <img className='icon' alt='' src={culture}></img>
                    Culture
                    </label>
                </div>

                </div>


            </div>
    

         
            <div className='next-back-div'>
                <div className='back-btn' onClick={back_toform_v1_1}>back</div>
            <div className='btn' onClick={to_form_v1_3}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-2////////////////////////////////// */}


             {/* ///////////////////////////////////////Start of form-v1-3/////////////////////////////////////////////////////////// */}
             <section className='form-v1 form-v1-3 hide-display'>
          
            <div className='digg'>digg</div>

            <div className='progress-div'>
                <div id='bar3' className='progress-bar '></div>
            </div>

             <div className='questions-container'>

            <div className='question-div'>
                <div className='question'>What industries would you prefer towork in?</div>

                <div className='options'>

               
                </div>
                <div className='options'>

  
                
                </div>
                <div className='options'>

                

                </div>

            </div>
    

         
            <div className='next-back-div'>
                <div className='back-btn' onClick={back_toform_v1_1}>back</div>
            <div className='btn' onClick={to_form_v1_3}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-3////////////////////////////////// */}
        </>
    )
}
