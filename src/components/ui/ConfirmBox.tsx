import { ConfirmProps } from "../../hooks/useConfirm";

interface ModalProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  confirm: ConfirmProps;
  close?: () => void;
}
export default function ConfirmBox({ close, confirm }: ModalProps) {
  if (!confirm.visible) return null;
  return (
    <div
      className="modal fade show"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      style={{ display: "block", paddingRight: "17px" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {confirm.title}
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">{confirm.subtitle}</div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={close}
            >
              Close
            </button>
            <button
              onClick={confirm.onSubmit}
              type="button"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
