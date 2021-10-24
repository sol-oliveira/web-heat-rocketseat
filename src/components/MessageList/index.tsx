import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'

export function MessageList() {
    return (
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />

            <ul className={styles.messageList}>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Neque porro quisquam est qui dolorem ipsum</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/diego3g.png" alt="uisque euismod" />
                        </div>
                        <span>Quisque euismod</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Neque porro quisquam est qui dolorem ipsum</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/diego3g.png" alt="uisque euismod" />
                        </div>
                        <span>Quisque euismod</span>
                    </div>
                </li>
                <li className={styles.message}>
                    <p className={styles.messageContent}>
                        Neque porro quisquam est qui dolorem ipsum</p>
                    <div className={styles.messageUser}>
                        <div className={styles.userImg}>
                            <img src="https://github.com/diego3g.png" alt="uisque euismod" />
                        </div>
                        <span>Quisque euismod</span>
                    </div>
                </li>
            </ul>
        </div>
    );

}