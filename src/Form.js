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
import FORM_V1 from './FORM_V1'
import FORM_V1_1 from './FORM_V1_1'
import FORM_V1_8 from './FORM_V1_8'
import FORM_V1_2 from './FORM_V1_2'
import FORM_V1_3 from './FORM_V1_3'




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



    function get_nationalities(e){
        
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

    // function to check the regular expressions
    function check_regex(letters){
        if((/^(?! )[A-Za-z\s]*$/.test(letters))){
            return true;
            }
        return false;
    }

    function toform_v1_1(){
        if(firstname==='' || lastname==='' ||  birthdate==='' || username==='' || gender==='' || 
         nationality===''||  countryofresidence===''||  contactnumber===''||  email==='' )    
               {
                alert('all fields are mandatory');
                 }else
        if(!check_regex(firstname)||!check_regex(lastname)){
            alert('Name and last name can be letters only');
        }
        else{
            
            setTimeout(()=>{document.querySelector('.form-v1').classList.toggle('hide-display')},500);
            setTimeout(()=>{ document.querySelector('.form-v1-1').classList.toggle('hide-display')},500);
           document.querySelector('.f-v-1').classList.toggle('form-anim');
           document.querySelector('.sec2').classList.toggle('hide-display');
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
        if(visited_dubai && any_friends && want_to_stay){
        document.querySelector('.form-v1-2').classList.toggle('hide-display');
        document.querySelector('.form-v1-3').classList.toggle('hide-display');

        }
        else{
            alert('Please answer the questions')
        }

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


        <FORM_V1_2
        why_dubai_handler={why_dubai_handler}
        life_style={life_style}
        Work_opportunities={Work_opportunities}
        education={education}
        finance={finance}
        tourism={tourism}
        family={family}
        business={business}
        security={security}
        culture={culture}
        back_toform_v1_1={back_toform_v1_1}
        to_form_v1_3={to_form_v1_3}

        />

            <FORM_V1_3
            industries_list={industries_list}
            back_toform_v1_2={back_toform_v1_2}
            to_form_v1_8={to_form_v1_8}
            what_industries_handler={what_industries_handler}
            />
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
