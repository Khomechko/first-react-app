import style from "./style.module.scss";

export const HelloBanner = () => {
  return (
    <div className={style.helloBanner}>
      <h1 className="title">Наша команда</h1>
      <h2 className={style.subtitle}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </h2>
    </div>
  );
};
