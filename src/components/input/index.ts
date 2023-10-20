import Block from "../../utils/Block";

interface InputProps {
    name: string,
    class: string,
    type: string,
    events: {
        blur: () => void;
    }
}

export class Input extends Block {
    constructor(props: InputProps) {
        super('input', props);
    }

    get isValid() {
        return true
    }

    get value() {
        return (this.element! as HTMLInputElement).value;
    }

    get name() {
        return (this.element! as HTMLInputElement).name;
    }

    protected componentDidMount() {
        this.element?.setAttribute("class", this.props.class)
        this.element?.setAttribute("name", this.props.name)
        this.element?.setAttribute("type", this.props.type)
    }

    render() {
        return this.compile('', this.props);
    }
}