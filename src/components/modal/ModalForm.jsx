import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import FetchPost from "../fetch/FetchPost";

const ModalForm = (bookId) => {
  console.log(bookId);
  const [formData, setFormData] = useState({
    elementId: bookId,
    rate: 0,
    comment: "",
  });

  useEffect(() => {
    setFormData((prevData) => ({ ...prevData, elementId: bookId }));
  }, [bookId]);

  console.log(formData);
  const onChangeInput = (ev) => {
    const { name, value } = ev.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="d-flex flex-column gap-3">
        <input
          value={formData.elementId.bookId}
          type="text"
          name="elementId"
          placeholder="elementId"
        />
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
        <Button onClick={() => FetchPost(formData)}>Add Comment</Button>
      </div>
    </>
  );
};
export default ModalForm;
