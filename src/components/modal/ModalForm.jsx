import { useState } from "react";
import { Button } from "react-bootstrap";
import FetchPost from "../fetch/FetchPost";

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
        <input value={formData.elementId} 
               type="text" 
               name="elementId" 
               placeholder="elementId" />
        <input
          onChange={onChangeInput}
          name={formData.rate}
          type="number"
          placeholder="rate"
        />
        <input
          onChange={onChangeInput}
          name={formData.comment}
          type="text"
          placeholder="comment"
        />
        <Button onClick={FetchPost(formData)}>Add Comment</Button>
      </div>
    </>
  );
};
export default ModalForm;
