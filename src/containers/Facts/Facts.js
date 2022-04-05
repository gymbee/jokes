import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {fetchCategories, fetchFact} from '../../store/actions/asyncActions'
import { saveFact } from '../../store/actions/actions';
import { getAllSaved } from '../../store/selectors/selectors';

function Facts() {
  const [jokeRaw, setJokeRaw] = useState();
  const [joke, setJoke] = useState('Yaay');
  const categories = useSelector(state => state.categories)
  const savedFacts = useSelector(state => getAllSaved(state))
  const dispatch = useDispatch()

  async function getNewJoke(event) {
    const category = event.target.value
    const fact = await fetchFact(category)
    setJokeRaw({...fact})
    setJoke(fact.value)
  }

  function save() {
    dispatch(saveFact(jokeRaw))
  }

  useEffect(() => {
    dispatch(fetchCategories(dispatch))
  });

  return (
    <div>
      <select name="categories" id="categories" onChange={getNewJoke}>
        {categories.map(x => <option key={x} value={x}>{x}</option>)}
      </select>
      <p>{joke}</p>

      <hr />

      <button onClick={save}>Save fact</button>

      <hr />

      {savedFacts.map(fact => <div key={fact.id}>{fact.value}</div>)}
    </div>
  );
}

export default Facts;
