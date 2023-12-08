import React from 'react';

const Loading = () => {
    return(
        <div className='loading'>
            <img src={require('../assets/images/loading.gif')} className="loadingImg" alt="loading..." />
        </div>
    )
}
 
export default Loading;