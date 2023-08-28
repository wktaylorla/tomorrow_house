import { useSelector } from 'react-redux';

import useAppDispatch from '../hooks/redux/useAppDispatch';

import { selectCounterValue } from '../features/counter/counterSelectors';
import { increment } from '../features/counter/counterSlice';

function Home() {
  const count = useSelector(selectCounterValue);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default Home;
