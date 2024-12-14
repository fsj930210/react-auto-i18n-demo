import styles from './index.less';
import { a, b, c } from '@/constants';
export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <h2>欢迎</h2>
      <h2>来到</h2>
      <h2>中国</h2>
      <h2>重庆</h2>

      <div>88888</div>
      {window?.navigator?.language}
      <p>
        {a}
        {b}
        {c}
      </p>
    </div>
  );
}
