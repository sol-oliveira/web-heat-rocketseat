import { useContext, useEffect } from 'react';
import { VscGithubInverted } from 'react-icons/vsc';
import { AuthContext } from '../../contexts/auth';

import styles from './styles.module.scss';

type AuthResponse = {
    token: string;
    user: {
        id: string;
        avatar_url: string;
        name?: string;
        login: string;
    }
}

export function LoginBox() {
    const { signInUrl, user } = useContext(AuthContext);
    return (
        <div className={styles.loginBoxWrapper}>
            <strong>Entre e compartilhe a sua mensagem</strong>
            <a href={signInUrl} className={styles.signInWithGithub}>
                <VscGithubInverted size={24} />
                Entrar com Github
            </a>
        </div>
    )
}