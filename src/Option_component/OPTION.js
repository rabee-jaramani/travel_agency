import React from 'react'

export default function OPTION(props) {
  
    return (
        <>
            <div className='option'>
                    <input type="checkbox" class="btn-hidden" name={props.cb} id={props.cb}/>
                    <label for={props.cb} onClick={props.what_industries_handler}>
                    <img className='icon tourism-icon' alt='' src={props.img}></img>
                    {props.name}
                    </label>

                </div>
        </>
    )
}
