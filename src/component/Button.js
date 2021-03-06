import React from 'react';

function Button({button, filter}) {
    return ( 
        <div className="buttons">
            {
                button.map((cat, i)=>{
                    return <button key={i} className="btn btn-category" type="button" onClick={() => filter(cat)}>{cat}</button>
                })
            }
        </div>
     );
}

export default Button;