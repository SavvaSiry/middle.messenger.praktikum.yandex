import * as Handlebars from "handlebars";
import {tmpl} from "./profile.tmpl";

export const Profile = () => {
    return Handlebars.compile(tmpl)({})
}