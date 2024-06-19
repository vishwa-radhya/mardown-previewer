import PropTypes from 'prop-types';
import {marked} from 'marked';

const Preview=({markdownText})=>{
    const htmlContent =marked(markdownText);
    return(
        <>
            <div className="preview-text" id='preview' dangerouslySetInnerHTML={{__html: htmlContent}}>
            </div>
        </>
    )
}
Preview.propTypes={
        markdownText:PropTypes.string,
}
export default Preview;