import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/atom/counter";
const App = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
};

function Counter() {
  return (
    <div>
      <CurrentCounter />
      <Increase />
      <Decrease />
    </div>
  );
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom);
  function increase() {
    setCount((e) => e + 1);
  }
  return <button onClick={increase}>Increase</button>;
}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom);
  function decrease() {
    setCount((e) => e - 1);
  }
  return <button onClick={decrease}>Increase</button>;
}

function CurrentCounter() {
  const count = useRecoilValue(counterAtom); //subscribe to that atom
  return <div>{count}</div>;
}

export default App;
