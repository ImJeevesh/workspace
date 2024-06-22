import styles from './web-context.module.scss';

export function WebContext() {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebContext!</h1>
    </div>
  );
}

export default WebContext;
