import * as Handlebars from "handlebars";
import {tmpl} from "./error404.tmpl";

export const Error404 = () => {
    return Handlebars.compile(tmpl)({})
}