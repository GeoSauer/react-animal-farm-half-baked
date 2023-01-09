import { animals } from '../../data';
import classes from './Animal.css';
import useSound from 'use-sound';

export default function Animal(props) {
  const [play] = useSound(`${process.env.PUBLIC_URL}/animals/${props.type}.mp3`);

  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <button onClick={play}>
        <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      </button>
      <span className="name">{props.name}</span>
      <span>{props.says}</span>
    </div>
  );
}
