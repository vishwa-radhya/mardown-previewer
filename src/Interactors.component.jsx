import PropTypes from 'prop-types';
import { useState } from 'react';
const Interactors=(props)=>{
    const [isExpanded,setIsExpanded] = useState(true);

    const {isEditor,title,children}=props;

    const editorStyles={
        height:isExpanded ?'30vh' : '90vh',
    }
    const previewStyles={
        height:isExpanded ? '60vh' : '90vh',
        width: 'min(900px,95vw)',
    }
    const interactorStyle = isEditor ? editorStyles : previewStyles;
    const svgImg = isExpanded ? '../assets/expand.svg' : '../assets/shrink.svg'
    function imgIconChangeHandler(){    
        setIsExpanded(!isExpanded);
    }
    return(
        <>
            <div className="container" style={interactorStyle}>
                <div className="heading">
                    <h3><img src="../assets/icon.svg" alt="" />{title}</h3>
                    <img src={svgImg} alt="" onClick={imgIconChangeHandler} />
                </div>
                {children}
            </div>
        </>
    )
}
Interactors.propTypes={
        isEditor:PropTypes.bool,
        title:PropTypes.string,
        children:PropTypes.node,
}
export default Interactors;