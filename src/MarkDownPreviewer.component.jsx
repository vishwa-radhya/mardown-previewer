import Editor from './Editor.component';
import Preview from './Preview.component';
import Interactors from './Interactors.component';
import {  useState } from 'react';
const MarkDownPreviewer=()=>{
    const upD='# Welcome to my React Markdown Previewer.\n## This is a h2 element\n\n[This a link](\'https://github.com/\')\n\n`array.map(()=>{})`\n\n```\nfunction hi(){\n\n\tconsole.log(\'hi\');\n\n\t}\n```\n\n- list item\n\t- list item\n\n>blockquote\n\n**bolded tex**\n\n![image](https://www.svgrepo.com/show/530661/genetic-data.svg)'
    const [markdownText,setMarkDownText]=useState(upD);
    return(
        <>
        <h1><span>MARKDOWN PREVIEWER</span></h1>
        <Interactors isEditor={true} title='Editor'>
            <Editor markdownText={markdownText} setMarkDownText={setMarkDownText} />
        </Interactors>
        <Interactors isEditor={false} title='Preview'>
            <Preview markdownText={markdownText} />
        </Interactors>
        </>
    );

};
export default MarkDownPreviewer;