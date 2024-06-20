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
    const svgImgClassName = isExpanded ? 'fa-solid fa-up-right-and-down-left-from-center' : "fa-solid fa-down-left-and-up-right-to-center"
    function imgIconChangeHandler(){    
        setIsExpanded(!isExpanded);
    }
    return(
        <>
            <div className="container" style={interactorStyle}>
                <div className="heading">
                    <h3><i className="fa-solid fa-feather"></i>{title}</h3>
                    <span onClick={imgIconChangeHandler}>
                    <i className={svgImgClassName}></i></span>
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