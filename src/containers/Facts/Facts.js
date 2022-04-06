import Lookup from '../../components/Facts/Lookup/Lookup';
import SavedList from '../../components/Facts/SavedList/SavedList';
import { useSelector } from 'react-redux'
import { getAllSaved } from '../../store/selectors/selectors';

function Facts() {
  const savedFacts = useSelector(state => getAllSaved(state))

  return (
    <div>
      <Lookup />
      {savedFacts.length ? <SavedList saved={savedFacts} /> : null}
    </div>
  );
}

export default Facts;
