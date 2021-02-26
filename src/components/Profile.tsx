import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/Profile.module.css'

const Profile = () => {
    const {level} = useContext(ChallengesContext)


    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/RicardoBrito1938.png" alt="Ricardo Brito" />
            <div>
                <strong>Ricardo Teixeira</strong>                
                <p>
                <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}

export default Profile