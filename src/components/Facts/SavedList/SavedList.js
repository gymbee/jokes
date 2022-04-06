import React from 'react';
import {useDispatch} from 'react-redux'
import { deleteSavedFact, editFact } from '../../../store/actions/actions';

function SavedList(props) {
  const dispatch = useDispatch()

  function onEdit(id, oldVersion) {
    const newVersion = window.prompt('Edit the fact', oldVersion)
    if (newVersion === null) return
    else if (newVersion === oldVersion) {
      alert('Fact is so true, that newVersion === oldVersion')
      onEdit(id, newVersion)
    }
    else if (props.saved.some(_entry => _entry.value === newVersion)) {
      alert('Fact must be unique!')
      onEdit(id, newVersion)
    } else {
      dispatch(editFact({id, value: newVersion}))
    }
  }

  function onDelete(id) {
    if (window.confirm('Are you sure you want to delete this fact? You will disappoint Chuck.')) {
      dispatch(deleteSavedFact(id))
    }
  }

  return (
    <div className="saved-list-root">
      <hr />
      {props.saved.map(({id, value}) => (
        <div key={id} className="item-container">
          <div className="item-container__value">{value}</div>
          <div className="item-container__actions">
            <button onClick={() => onEdit(id, value)}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SavedList;
