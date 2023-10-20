import Block from '../../utils/Block';

import { Button } from '../../components/button';
import { Input } from '../../components/input'

export class Example extends Block {


    constructor() {
        super('div', { title: 'Home Page'});
    }

    init() {
        this.children.button = new Button({
            label: 'Кликни меня',
            events: {
                click: () => {
                    let formData = {}
                    Object.entries(this.children).forEach((child) => {
                        if (child[1] instanceof Input) {
                            formData[child[1].name] = child[1].value
                        }
                    })
                    console.log(formData)
                }
            },
        });
        this.children.input1 = new Input({
            name: "form_input",
            class: "login-form__input",
            events: {
                blur: () => {
                    if (this.children.input instanceof Input)
                        console.log(this.children.input.isValid)
                },
            }
        });
        this.children.input2 = new Input({})
    }

    render() {
        return this.compile(`
      <h1>{{title}}</h1>
      {{{button}}}
      {{{input1}}}
      
      {{{input2}}}
    `, this.props);
    };
}