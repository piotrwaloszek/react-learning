import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {infoContents} from '../../data/dataStore';
import styles from './Info.scss';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imagePicture={infoContents.image}/>
    <p className={styles.description}>{infoContents.description}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.node,
  description: PropTypes.node,
};

export default Info;