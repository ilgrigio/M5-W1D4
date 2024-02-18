import { useState } from "react";
import { Button } from "react-bootstrap";

const ModalForm = () => {
  const [formData, setFormData] = useState({
    elementId: "",
    rate: 0,
    comment: "",
  });
  console.log(formData);
  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <input value="" type="text" name="elementId" placeholder="elementId" />
        <input
          onChange={onChangeInput}
          name="rate"
          type="number"
          placeholder="rate"
        />
        <input
          onChange={onChangeInput}
          name="comment"
          type="text"
          placeholder="comment"
        />
        <Button onClick={fetchPost(setFormData)}>Add Comment</Button>
      </div>
    </>
  );
};
export default ModalForm;
