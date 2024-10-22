import Reminder from "../../libs/Reminder";

const Wp = ({ wpData, count, setOpen }) => {
  return (
    <>
      <div className="openScreen">
        <a href={wpData?.link ? wpData?.link : "#!"}>
          <img src={wpData?.img} alt="wp" />
        </a>
        {count && (
          <Reminder
            count={count}
            shutdown={() => {
              setOpen(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default Wp;
