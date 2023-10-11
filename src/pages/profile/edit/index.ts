import Handlebars from "handlebars";
import {tmpl} from "./profile.edit.tmpl";

export const ProfileEdit = () => {
    return Handlebars.compile(tmpl)({});
}
