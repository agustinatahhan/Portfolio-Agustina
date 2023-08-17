import style from "./BgWindow.module.css";

const BgWindow = () => {
  return (
    <div className={style.special}>
      <div className={`${style.textContent} ${style.full}`}>
        <h2>Skilss</h2>
      </div>
    </div>
  );
};

export default BgWindow;
