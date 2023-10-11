import Handlebars from "handlebars";
import {tmpl} from "./profile.edit.pass.tmpl";

export const ProfileEditPass = () => {
    return Handlebars.compile(tmpl)({});
}
