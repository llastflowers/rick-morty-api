import React, { Component } from 'react';
import styles from './Character.css';
import Header from './Header.js';
import Character from './Character.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className={styles.wrapper}>
          <div className={styles.Character}>
            <Character
              name={'Alexander'}
              id={12}
              created={'2 years ago'}
              image={'./src/assets/12.jpeg'}
              status={'Dead'}
              species={'Human'}
              gender={'Male'}
              origin={'Earth (C-137)'}
              lastLocation={'Anatomy Park'}
            />
            <Character
              name={'Colossus'}
              id={68}
              created={'2 years ago'}
              image={'./src/assets/68.jpeg'}
              status={'Dead'}
              species={'Human'}
              gender={'Male'}
              origin={'Post-Apocalyptic Earth'}
              lastLocation={'Post-Apocalyptic Earth'}
            />
            <Character
              name={'David Letterman'}
              id={91}
              created={'2 years ago'}
              image={'./src/assets/91.jpeg'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              origin={'Earth (C-500A)'}
              lastLocation={'Earth (C-500A)'}
            />
            <Character
              name={'Tuberculosis'}
              id={96}
              created={'2 years ago'}
              image={'./src/assets/96.jpeg'}
              status={'Dead'}
              species={'Disease'}
              gender={'unknown'}
              origin={'Anatomy Park'}
              lastLocation={'Anatomy Park'}
            />
            <Character
              name={'Hepatitis A'}
              id={98}
              created={'2 years ago'}
              image={'./src/assets/98.jpeg'}
              status={'Dead'}
              species={'Disease'}
              gender={'unknown'}
              origin={'Anatomy Park'}
              lastLocation={'Anatomy Park'}
            />
            <Character
              name={'Tophat Jones'}
              id={358}
              created={'2 years ago'}
              image={'./src/assets/358.jpeg'}
              status={'Dead'}
              species={'Humanoid, Leprechaun'}
              gender={'Male'}
              origin={'unknown'}
              lastLocation={'Interdimensional Cable'}
            />
            <Character
              name={'Regular Tyrion Lannister'}
              id={407}
              created={'2 years ago'}
              image={'./src/assets/407.jpeg'}
              status={'Alive'}
              species={'Human'}
              gender={'Male'}
              origin={'Interdimensional Cable'}
              lastLocation={'Interdimensional Cable'}
            />
            <Character
              name={'SEAL Team Rick'}
              id={465}
              created={'2 years ago'}
              image={'./src/assets/465.jpeg'}
              status={'Dead'}
              species={'Human'}
              gender={'Male'}
              origin={'unknown'}
              lastLocation={'Citadel of Ricks'}
            />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
