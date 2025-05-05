import React from 'react';
import styles from './Home.module.css';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo à minha página React + TypeScript!</h1>
        <p className={styles.description}>
          Esta é uma estrutura básica com CSS modular.
        </p>
      </div>
    </>
  );
};

export default Home;
