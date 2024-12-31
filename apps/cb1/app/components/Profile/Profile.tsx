'use client';
import React, { useCallback, useState } from 'react';
import {
    Menu,
    List,
    ListItem,
    ListDivider,
    ActionItem,
} from '@element/react-components';
import Image from 'next/image';
import style from './user.module.css';

const items = [
    {
        text: 'Profile dashboard',
        icon: (
            <ActionItem
                icon="account_circle"
                label="Check account"
                className={style.icon}
            />
        ),
        href: '/profile'
    },
    {
        text: 'Change language',
        icon: (
            <ActionItem
                icon="language"
                label="Check language"
                className={style.icon}
            />
        ),
        href: 'https://github.platforms.engineering/element/element-vue',
        target: '_blank',
        language: {
            english: 'English',
            german: 'German',
        },
    },
    {
        text: 'Switch profile',
        icon: (
            <ActionItem
                icon="switch_account"
                label="Check profile"
                className={style.icon}
            />
        ),
        href: 'https://github.platforms.engineering/element/element-themes-v5',
        target: '_blank',
    },
    {
        text: 'Logout',
        icon: (
            <ActionItem icon="logout" label="Check logout" className={style.icon} />
        ),
        href: 'https://github.platforms.engineering/element/element-themes-v5',
        target: '_blank',
    },
];

function UserProfile() {
    const [open, setOpen] = useState(false);

    const openMenu = useCallback(() => {
        setOpen(!open);
    }, [open]);
    const closeMenu = useCallback(() => {
        setOpen(false);
    }, []);
    return (
        <div>
            <div>
                <Menu
                    trigger={
                        <Image
                            src="/UserIcon.png"
                            width={45}
                            height={45}
                            alt="Picture of the author"
                            style={{ marginLeft: '20px' }}
                            onClick={openMenu}
                            className={style.userIcon}
                        />
                    }
                    open={open}
                    surfaceOnly={false}
                    onClose={closeMenu}
                >
                    <div className={style.menu}>
                        <List>
                            {items.map((item, index) => {
                                const { text, icon, href, language, ...otherProps } = item;
                                return (
                                    <div key={'list' + index}>
                                        <ListItem {...otherProps} className='userSubMenuBox'>
                                            {icon}
                                            <span>{text}</span>
                                        </ListItem>

                                        {language && (
                                            <List>
                                                {Object.entries(language).map(([key, value]) => (
                                                    <div key={'lang'+key}>
                                                        <ListDivider />
                                                        <ListItem className={style.leftPadding}>{value}</ListItem>
                                                    </div>
                                                ))}
                                            </List>
                                        )}
                                         {index < items.length - 1 && <ListDivider />}
                                    </div>
                                )
                            })}
                        </List>
                    </div>
                </Menu>
            </div>
        </div>
    );
}

export default UserProfile;