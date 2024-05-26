'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname();
  const [count, setCount] = useState(0);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === '/about-us' ? '🔥' : ''}
        </li>
        <li>
          <button onClick={() => setCount((c) => c + 1)}>{count}</button>
        </li>
      </ul>
    </nav>
  );
}

// 페이지 접속할 때 일어나는 일
// about-us 클릭 -------> SSR ------> Boring HTML --------> :)사용자가 볼 수 있음 --------> 뒤에서는 init(Boring HTML) to react(being interactive)
