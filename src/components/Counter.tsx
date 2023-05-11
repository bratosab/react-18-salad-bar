
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../app/counterSlice'
import { RootState } from '../app/store.ts' ;

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
      <button
          aria-label="Decrement value"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          incrementByAmount
        </button>
      </div>
    </div>
  )
}