import { Button } from 'antd';
import { increment, decrement } from '../store/slices/counterSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export default function Home() {
  const count = useAppSelector((state: any) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Счёт: {count}</h1>
      <Button onClick={() => dispatch(increment())}>+1</Button>
      <Button onClick={() => dispatch(decrement())} style={{ marginLeft: '10px' }}>
        -1
      </Button>
    </div>
  );
}