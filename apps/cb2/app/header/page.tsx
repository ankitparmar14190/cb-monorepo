'use client';
 import {
  TopAppBar,
  ActionItem,
  Tab,
  TabBar,
  NotificationBadge,
} from '@element/react-components';
import React, { useState, useCallback, useMemo } from 'react';
import style from './header.module.css';
import Image from 'next/image';
import UserProfile from '../userProfile/page';
 
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
 
const tabs = ['My News'];
 
export default function Header() {
    const pathname = usePathname(); // Get current pathname
  const router = useRouter();

  const [activeTabIndex, setActiveTabIndex] = useState(0);
 
  const onTabActivated = useCallback((index: any) => {
    setActiveTabIndex(index);
  }, []);
 
  const handleClickAllProducts = (event: any) => {
    event.preventDefault();
    router.push('/news');
  };
 
  return (
    <div style={{marginBottom: "70px"}}>
      <TopAppBar
        className={style.customAppBar}
        title={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/BayerLogo.png"
              width={60}
              height={60}
              alt="Bayer Logo"
              style={{
                marginRight: '20px',
                marginBottom: '5px',
                marginTop: '5px',
              }}
            />
            <p>CLUBBAYER</p>
            <ul className={style.navigationBar}>
                <li className={pathname === '/' ? 'active' : ""}><Link href="/">Home</Link></li>
                <li className={pathname === '/news' ? 'active' : ""}><Link href="/news">News</Link></li>
            </ul>
          </div>
        }
        actions={
          <>
            <ActionItem
              icon="search"
              label="Check Search"
              className={style.icon}
            />
            <ActionItem
              icon="add_shopping_cart"
              label="Check Notifications"
              className={style.icon}
            />
            <ActionItem
              icon="notifications"
              label="Check Notifications"
              className={style.icon}
            />
            <div className={style.profileImg}>
              <UserProfile />
            </div>
          </>
        }
      />
    </div>
  );
}
 