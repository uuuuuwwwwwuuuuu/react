import React, {Component} from 'react';
import './randomChar.scss';
import GetResource from '../../services/getResource';
import Spinner from '../spinner/spinner';
import ErrorMessage from '../errorMessage/errorMessage';


export default class RandomChar extends Component {
    service = new GetResource();

    state = {
        char: {},
        loading: true,
        timerId: null
    }

    componentDidMount() {
        this.updateCharacter();
        this.setState({
            timerId: setInterval(this.updateCharacter, 4000)
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.timerId);
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            error: false
        });
    }

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updateCharacter = () => {
        let id = Math.floor(Math.random()*140 + 25);
        this.service.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    render() {
        const {char, loading, error} = this.state;

        const errorMessage = error ? <ErrorMessage message={'Error loading character information'} /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? <View char={char} /> : null;

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );

    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <div className='random-char '>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </div>
    )
}