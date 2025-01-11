import { useState, useRef, useEffect } from "react";
import Button from "../Common/Button/Button.jsx";
import { StyledElement } from "./FeedBackSection.styles.js";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState(false);

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") setShow(true);
        }}
        ref={input}
        type="text"
        className="control"
      />
    </div>
  );
}

export const FeedBackSection = () => {
  const [form, setForm] = useState({
    name: "",
    reason: "help",
    hasError: false,
    count: 0,
  });

  return (
    <section>
      <h2>Обратная связь</h2>
      <form style={{ marginBottom: "15px" }}>
        <label htmlFor="name">Ваше имя:</label>
        <StyledElement
          onChange={(event) => {
            setForm((prev) => ({
              ...prev,
              name: event.target.value,
              hasError: !event.target.value.trim() && true,
            }));
          }}
          type="text"
          id="name"
          value={form.name}
          style={{ border: form.hasError && "3px solid red" }}
        />

        <label htmlFor="reason">Причина обращения:</label>
        <StyledElement
          as="select"
          id="reason"
          value={form.reason}
          onChange={(event) =>
            setForm((prev) => ({
              ...prev,
              reason: event.target.value,
            }))
          }
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggestment">Предложения</option>
        </StyledElement>

        {/* <pre>{JSON.stringify(form, null, 2)}</pre> */}

        <Button disabled={form.hasError}>Отправить</Button>
      </form>
      <hr />
      <StateVsRef />
    </section>
  );
};
