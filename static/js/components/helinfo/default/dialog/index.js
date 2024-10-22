import { DialogWarp, DialogCont } from "./style";

const Dialog = (props) => {
  return (
    props.visble && (
      <DialogWarp onClick={() => props.onClose()}>
        <DialogCont>
          <span className="close" onClick={() => props.onClose()} />
          {props.children}
        </DialogCont>
      </DialogWarp>
    )
  );
};

export default Dialog;
