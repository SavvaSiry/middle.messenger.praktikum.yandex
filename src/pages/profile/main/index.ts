import * as Handlebars from "handlebars";
import {tmpl} from "./profile.main.tmpl";

export const Profile = () => {
    return Handlebars.compile(tmpl)({})
}
