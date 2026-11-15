import { file } from "/Application/Ollama/Gui/Module/File.js";
import { uuid } from "/Module/Web.js";
import { history } from "/Application/Ollama/Gui/Module/History.js";
import { microphone } from "/Application/Ollama/Gui/Module/Microphone.js";
import { getSection } from "/Module/Section.js";
import create from "/Module/Create.js";
import user from "/Module/User.js";
import hljs from '/Highlight/es/highlight.js';
import apache from '/Highlight/es/languages/apache.js';
import awk from '/Highlight/es/languages/awk.js';
import bash from '/Highlight/es/languages/bash.js';
import c from '/Highlight/es/languages/c.js';
import cpp from '/Highlight/es/languages/cpp.js';
import css from '/Highlight/es/languages/css.js';
import dockerfile from '/Highlight/es/languages/dockerfile.js';
import excel from '/Highlight/es/languages/excel.js';
import go from '/Highlight/es/languages/go.js';
import graphql from '/Highlight/es/languages/graphql.js';
//import html from '/Highlight/es/languages/html.js';
import http from '/Highlight/es/languages/http.js';
import javascript from '/Highlight/es/languages/javascript.js';
import json from '/Highlight/es/languages/json.js';
import markdown from '/Highlight/es/languages/markdown.js';
import php from '/Highlight/es/languages/php.js';
import php_template from '/Highlight/es/languages/php-template.js';
import python from '/Highlight/es/languages/python.js';
import raxon from '/Highlight/es/languages/raxon.js';
import rust from '/Highlight/es/languages/rust.js';
import shell from '/Highlight/es/languages/shell.js';
import sql from '/Highlight/es/languages/sql.js';
import wasm from '/Highlight/es/languages/wasm.js';
import x86asm from '/Highlight/es/languages/x86asm.js';
import xml from '/Highlight/es/languages/xml.js';
import xquery from '/Highlight/es/languages/xquery.js';
import yaml from '/Highlight/es/languages/yaml.js';

let input = {};

input.init = (section_id) => {
    const section = getSection(section_id);
    if(!section){
        return;
    }
    console.log(section);
}

export { input }