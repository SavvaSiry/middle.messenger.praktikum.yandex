import * as Handlebars from "handlebars";
import {tmpl} from "./signin.tmpl";

export const Signin = () => {
    return Handlebars.compile(tmpl)({})
}
