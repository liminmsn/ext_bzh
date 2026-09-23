import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

export default function () {
  const [count, setCount] = useState(0);

  return <div className='w-full h-ful'>
    <img src={reactLogo} />
    test
  </div>
}
