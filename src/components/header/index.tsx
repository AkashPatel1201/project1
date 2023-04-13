/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import Link from 'next/link';
import styles from './header.module.scss'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Header = ({ children }: any) => {
    return (
        <>
            {children}
            <div>
                <nav>
                    <ul className={styles.menubar}>
                        <li className={styles.list}>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/about">
                                About
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/service">
                                Service
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li className={styles.list}>
                            <Link href="/detail">
                                Detail
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}