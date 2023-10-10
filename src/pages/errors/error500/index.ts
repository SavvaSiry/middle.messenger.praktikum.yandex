import * as Handlebars from "handlebars";
import {tmpl} from "./error500.tmpl";

export const Error500 = () => {
    return Handlebars.compile(tmpl)({})
}