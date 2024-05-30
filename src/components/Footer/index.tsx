import classes from './index.module.css';

export const Footer = () => (
  <footer className={classes.footer}>
    <p>
      Brought to you by{' '}
      <a
        href="https://github.com/SirPedr"
        target="_blank"
        className={classes.footerLink}
      >
        SirPedr
      </a>
      , who also attends by Avary Amary Adair, the coolest Storm Sorcerer ever
      seen.
    </p>
  </footer>
);
