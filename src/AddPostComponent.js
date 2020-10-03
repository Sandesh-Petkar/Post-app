import { red } from '@material-ui/core/colors';
import React from 'react'
import './AddPostComponent.css'

const Addpost = (props) => {
    console.log('--- in addPost --- ', props);
    return(
        <div>
            <div className="title-box">
                
                <input
                    type='text'
                    id="title"
                    name="title"
                    placeholder='Title'
                    value={props.title}
                    onChange={props.handleChange}
                    className={
                        (props.titleError.length > 0)?
                        'title-error-box':
                        'title-normal-box'
                    }
                /> 
                {
                    (props.titleError.length > 0)
                    ? <div style={{color:'red'}} >{props.titleError}</div>
                    :  null
                }
                <br/>
            </div>
            
            <div>
                
                <textarea
                name="desc"
                placeholder='Enter-text here'
                id="desc"
                className="text-box"
                value={props.desc}
                onChange={props.handleChange}
                className={
                    (props.descError.length > 0)?
                    'text-error-box':
                    'text-normal-box'
                }
                ></textarea>
                {
                    (props.descError.length > 0)
                    ? <div style={{color:'red'}}>{props.descError}</div>
                    :  null
                }
                
            </div>
           

            <button className='pub-button' onClick={props.onPublishPost}>Publish</button>

        </div>
    )
}

export default Addpost