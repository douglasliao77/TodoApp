import './Banner.css';

export function Banner( { text }) {
    return (
        <div className="banner">
          <h1>{text}</h1>
        </div>
      );
}