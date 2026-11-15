import { file } from "/Application/Ollama/Gui/Module/File.js";
import { uuid } from "/Module/Web.js";
import { history } from "/Application/Ollama/Gui/Module/History.js";
import { getSection } from "/Module/Section.js";


let input = {};

input.init = (section_id) => {
    const section = getSection(section_id);
    if(!section){
        return;
    }
    console.log(section);
}

export { input }