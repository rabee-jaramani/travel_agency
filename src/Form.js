import React, { useState } from 'react'
import nationality_json from './nationality.json'
import countries_json from './countries.json'
import {industries_list} from './industries'
// importing some icons
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
import OPTION from './OPTION'
import FORM_V1 from './FORM_V1'
import FORM_V1_1 from './FORM_V1_1'
import FORM_V1_8 from './FORM_V1_8'




export default function Form() {
    const [nationalities, setNationalities] = useState([]);
     //get countries from data
     const [countries, setCountries] = useState([]);

    // values for form-v1
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [username, setUsername] = useState('')
    const [gender, setGender] = useState('')
    const [nationality, setNtionality] = useState('')
    const [countryofresidence, setCountryofresidence] = useState('')
    const [contactnumber, setContactnumber] = useState('')
    const [email, setEmail] = useState('')

    // form-v1-1
    const [visited_dubai, setVisited_dubai] = useState('');
    const [any_friends, setAny_friends] = useState('');
    const [want_to_stay, setWant_to_stay] = useState('')
 
    //formv1-2
    const [why_dubai, setWhy_dubai] = useState([]);

    //form-v1-3
    const [what_industries, setWhat_industries] = useState([]);



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
        // validation
        if(!firstname==''&&
            !lastname==''&&
            !birthdate==''&&
            !username==''&&
            !gender==''&&
            !nationality==''&
            !countryofresidence==''&
            !contactnumber==''&
            !email=='' )    
               {
        document.querySelector('.form-v1').classList.toggle('hide-display');
        document.querySelector('.form-v1-1').classList.toggle('hide-display');
        }
        else{
            alert('all fields are mandatory')
        }

    }
    function back_toform_v1_1(){
        document.querySelector('.form-v1-1').classList.toggle('hide-display');
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
    }
    function toform_v1_2(){
        // validation
        if(visited_dubai && any_friends && want_to_stay){
        document.getElementById('bar2').style.width='25%'
        document.querySelector('.form-v1-1').classList.toggle('hide-display');
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        }
        else{
            alert('Please answer the questions')
        }

    }
    function  back_toform_v1_2(){
        // validation
        // if(visited_dubai && any_friends && want_to_stay){
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        document.querySelector('.form-v1-3').classList.toggle('hide-display');

        // }
        // else{
            // alert('Please answer the questions')
        // }

    }
   


    function to_form_v1_3(){
        document.getElementById('bar3').style.width='37.5%';
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        document.querySelector('.form-v1-3').classList.toggle('hide-display');

    }
    function to_form_v1_8() {
        document.getElementById('bar8').style.width='95%';
        document.querySelector('.form-v1-3').classList.toggle('hide-display');
        document.querySelector('.form-v1-8').classList.toggle('hide-display');

        
        
    }
    function back_toform_v1_3() {
        document.querySelector('.form-v1-3').classList.toggle('hide-display');
        document.querySelector('.form-v1-8').classList.toggle('hide-display');
    }
    
    function why_dubai_handler(e){
        if(!why_dubai.includes(e.target.textContent))
        {
            if(why_dubai.length===-1){
                setWhy_dubai([e.target.textContent]);
            }
            setWhy_dubai([...why_dubai,e.target.textContent]);
        }
        else{
            console.log(why_dubai)
        }   
    }
    function what_industries_handler(e) {
        if(!what_industries.includes(e.target.textContent))
        {
            if(what_industries.length===-1){
                setWhat_industries([e.target.textContent]);
            }
            setWhat_industries([...what_industries,e.target.textContent]);
        }
        else{
            console.log(what_industries)
        }   
    }
    // function backToform_v1(){
    //     document.querySelector('.form-v1').classList.add('hide-display');
    //     document.querySelector('.form-v1-1').classList.remove('hide-opacity');
    // }
    return (
        <>
        <FORM_V1
            setFirstname={setFirstname}
            setLastname={setLastname}
            setBirthdate={setBirthdate}
            setUsername={setUsername}
            setGender={setGender}
            get_nationalities={get_nationalities}
            setNtionality={setNtionality}
            get_countries={get_countries}
            setCountryofresidence={setCountryofresidence}
            nationalities={nationalities}
            countries={countries}
            setContactnumber={setContactnumber}
            setEmail={setEmail}
            toform_v1_1={toform_v1_1}
        />
        <FORM_V1_1
        setVisited_dubai={setVisited_dubai}
        N0={N0}
        YES={YES}
        setAny_friends={setAny_friends}
        setWant_to_stay={setWant_to_stay}
        toform_v1_1={toform_v1_1}
        toform_v1_2={toform_v1_2}
        file={file}
        />

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
               </div>

               <div className='options'>
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

                <div className='options options-grid'>
               {
                   industries_list.map((element)=>{
                       return <OPTION name={element.name}
                       img={element.img}
                       what_industries_handler={what_industries_handler}
                       cb={element.cb}
                       />
                   })
               }
                </div>

            </div>
            <div className='next-back-div'>
            <div className='back-btn' onClick={back_toform_v1_2}>back</div>
            <div className='btn' onClick={to_form_v1_8}>Next</div>
            </div>


            </div>
            </section>
            {/* /////////////////////////End of formv1-3////////////////////////////////// */}

            <FORM_V1_8
             N0={N0}
             YES={YES}
            firstname={firstname}
            lastname={lastname}
            birthdate={birthdate}
            gender={gender}
            nationality={nationality}
            countryofresidence={countryofresidence}
            contactnumber={contactnumber}
            email={email}
            back_toform_v1_3={back_toform_v1_3}
            visited_dubai={visited_dubai}
            any_friends={any_friends}
            want_to_stay={want_to_stay}
            file={file}
            why_dubai={why_dubai}
            what_industries={what_industries}

            />
        </>
    )
}
