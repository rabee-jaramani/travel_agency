import React from 'react'
import { $ }  from 'react-jquery-plugin'

export default function FORM_V1(props) {
    // $(document).ready(function(){
    //     $('input:checkbox').click(function() {
    //         $('input:checkbox').not(this).prop('checked', false);
    //     });
    // });
    // the selector will match all input controls of type :checkbox
// and attach a click event handler 
$("input:checkbox").on('click', function() {
    // in the handler, 'this' refers to the box clicked on
    var $box = $(this);
    if ($box.is(":checked")) {
      // the name of the box is retrieved using the .attr() method
      // as it is assumed and expected to be immutable
      var group = "input:checkbox[name='" + $box.attr("name") + "']";
      // the checked state of the group/box on the other hand will change
      // and the current value is retrieved using .prop() method
      $(group).prop("checked", false);
      $box.prop("checked", true);
    } else {
      $box.prop("checked", false);
    }
  });
    return (
        <>
            <section className='form-v1 f-v-1' id='form-v1'>
            <div className='img1-div' ></div>
            <h1 id='digg1' className='digg'>digg</h1>
            <h3 id='apply-now-title'>Apply now to work in Dubai </h3>
            <div class="input-div" id='f1'>
                <input type="text" onChange={(e)=>props.setFirstname(e.target.value)} required/>
                <label>First name</label>
            </div>
            <div id='lname' class="input-div">
                <input  type="text" onChange={(e)=>props.setLastname(e.target.value)} required/>
                <label>Last name</label>
            </div>
            <div class="input-div">
            <input type="date" id="dateOfBirth" onChange={(e)=>props.setBirthdate(e.target.value)} name="trip-start"
                    min="1920-01-01" max="2015-12-31"></input>
            <label>Date of birth</label>
            </div>
            <div id='username' class="input-div">
                <input type="text" onChange={(e)=>props.setUsername(e.target.value)} required/>
                <label>User name</label>
            </div>
            <div className='gender-div'>
            

                <p>Gender</p>
                <input type="checkbox"  name='gender1'  onChange={()=>props.setGender('Male')}/>
                <label>Male</label>

                <input type="checkbox" name='gender1'  onChange={()=>props.setGender('Female')}/>
                <label>Female</label>

                <input type="checkbox"  name='gender1' onChange={()=>props.setGender('Other')}/>
                <label>Other</label>
            </div>
            <select id='nationality' onClick={props.get_nationalities} onMouseOver={props.get_nationalities}  onChange={e=>props.setNtionality(e.target.value)}>
                        <option className='dropdown-placeholder' value=""
                    
                         disabled selected>Nationality</option>
                            {props.nationalities.map((country)=>{
                            return <option > {country} </option>
                            })}              
            </select>

            <select id='country' onClick={props.get_countries} onMouseOver={props.get_countries}  onChange={e=>props.setCountryofresidence(e.target.value)}>
                        <option className='dropdown-placeholder' value="" disabled selected>Country of risedence</option>
                            {props.countries.map((country)=>{
                            return <option > {country} </option>
                            })}              
             </select>
            <div className='contact'>
                <div className='contact-title'>How we can contact you?</div> 
            <div class="input-div">
                <input type="text" onChange={e=>props.setContactnumber(e.target.value)} required/>
                <label>Contact number</label>
            </div>
            <div class="input-div">
                <input type="text" onChange={e=>props.setEmail(e.target.value)} required/>
                <label>Email address</label>
            </div>
            </div>
            
           <div id='apply-btn' className='btn' onClick={props.toform_v1_1}>Apply Now</div>
           <div className='img2-div' ></div>
           
        
            </section>
            <section className='sec2'></section>
{/* /////////////////////////////////End of form-v1////////////////////////////////////////////////////////////// */}

        </>
    )
}
