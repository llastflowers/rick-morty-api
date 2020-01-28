import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CharListElement from './CharListElement';
// import styles from './Character.css';

class Character extends Component {
    static propTypes = {
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      created: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      origin: PropTypes.string.isRequired,
      lastLocation: PropTypes.string.isRequired
    }
    render() {
      const { name, id, created, image, status, species, gender, origin, lastLocation } = this.props;
      return (
        <>
          <div>
            <h2>{name}</h2>
            <CharListElement
              title="id:" description={id} />
            <CharListElement
              title="created" description={created} />
          </div>
          <div>
            <img src={image}></img>
          </div>
          <div>
            <ul>
              <li><CharListElement
                title="STATUS" description={status} />
              </li>
              <li><CharListElement
                title="SPECIES" description={species} />
              </li>
              <li><CharListElement
                title="GENDER" description={gender} />
              </li>
              <li>
                <CharListElement
                  title="ORIGIN" description={origin} />
              </li>
              <li><CharListElement
                title="LAST LOCATION" description={lastLocation} />
              </li>
            </ul>
          </div>
        </>
      );
    }
}

export default Character;
