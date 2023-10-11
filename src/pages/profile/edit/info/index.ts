import Handlebars from "handlebars";
import {tmpl} from "./profile.edit.info.tmpl";

export const ProfileEditInfo = () => {
    return Handlebars.compile(tmpl)({});
}
