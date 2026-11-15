import { file } from "/Application/Ollama/Gui/Module/File.js";
import { uuid } from "/Module/Web.js";
import create from "/Module/Create.js";
import { history } from "/Application/Ollama/Gui/Module/History.js";
import { getSection } from "/Module/Section.js";


let input = {};

input.init = (section_id) => {
    const section = getSection(section_id);
    if(!section){
        return;
    }
    const content = section.select('.content');
    if(content){
        content.html('');
    }
    const repository = create('div');

}

export { input }