import React from 'react';
import { connect } from 'react-redux';
import { fetchCategories, fetchFact } from '../../../store/actions/asyncActions'
import { saveFact } from '../../../store/actions/actions';

class Lookup extends React.Component {
    state = {
        joke: 'Loading...',
        jokeRaw: undefined,
        selectedCategory: undefined
    }

    componentDidMount() {
        this.props.fetchCategories()
        this.getNewFact()
    }

    onSelect = (event) => {
        this.setState({selectedCategory: event?.target?.value}, this.getNewFact)
    }

    onSave = () => {
        if (this.props.allSaved[this.state.jokeRaw.id]) {
            return alert('You have already saved this fact :)')
        }
        this.props.saveFact(this.state.jokeRaw)
        // this.getNewFact()
    }

    getNewFact = async () => {
        const fact = await fetchFact(this.state.selectedCategory)
        this.setState({jokeRaw: {...fact} })
        this.setState({joke: fact.value })
    }

    render() {
        return (
            <div className="lookup-root">
                <center>
                    <select name="categories" id="categories" onChange={this.onSelect}>
                        {this.props.categories.map(({ label, value }) => (
                            <option key={label} value={value}>{label}</option>
                        ))}
                    </select>
                    <p>{this.state.joke}</p>
                </center>
                
                <div className="action-buttons">
                    <button onClick={this.getNewFact}>Get another</button>
                    <button onClick={this.onSave}>Save!</button>
                </div>
    
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    allSaved: state.savedFacts
});

const mapDispatchToProps = (dispatch) => ({ 
    fetchCategories: () => dispatch(fetchCategories()),
    saveFact: (fact) => dispatch(saveFact(fact))
});

export default connect(mapStateToProps, mapDispatchToProps)(Lookup);