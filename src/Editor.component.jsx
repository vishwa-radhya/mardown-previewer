import PropTypes from 'prop-types';
import { useRef } from 'react';

const Editor=({markdownText,setMarkDownText})=>{

    const textAreaRef =useRef(null);
    function editorChangeHandler(event){
        setMarkDownText(event.target.value);
    }
    function textAreaFocusHandler(){
        textAreaRef.current.focus();
    }
    function textAreaBlurHandler(){
        textAreaRef.current.blur();
    }
    return(
        <>
        <textarea ref={textAreaRef} name="markdown-editor" id="editor" className="editorTa" onChange={(e)=>editorChangeHandler(e)} value={markdownText} onMouseEnter={textAreaFocusHandler} onMouseLeave={textAreaBlurHandler} />
        </>
    )

}
Editor.propTypes={
        markdownText:PropTypes.string,
        setMarkDownText:PropTypes.func,
}

export default Editor;