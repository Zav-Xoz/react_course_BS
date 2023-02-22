import './Info.css';
import styles from './Info.module.css';
console.log(styles);
// {info: 'Info_info__9oExB', myOtherButton: 'Info_myOtherButton__6q41i'}

function Info() {
  return (
    <div className={styles.info}>
      <h1>Hello from the Info components</h1>
      <button className={styles.myOtherButton}>Click me Info component</button>
    </div>
  );
}

export default Info;
