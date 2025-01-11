import { useEffect, useState, useCallback } from "react";
import Button from "../Common/Button/Button.jsx";
import { Modal } from "../Common/Modal/Modal.jsx";
import { useInput } from "../hooks/useInput.js";

export const EffectSection = () => {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const input = useInput();

  async function fetchUsers() {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section>
      <h2>Effects</h2>
      <Button onClick={() => setModal(!modal)}>Open the modal window</Button>
      <Modal open={modal}>
        <h3>Some modal shit</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum
          eaque similique consequuntur sed, dicta esse fuga, eius, aliquid iure
          totam dolores nemo? Id nesciunt consequuntur voluptatum, perferendis
          dolore blanditiis.
        </p>
        <Button onClick={() => setModal(false)}>Close the modal</Button>
      </Modal>
      {loading && <p>Loading...</p>}
      {users && (
        <>
          <input type="text" value={input.value} onChange={input.onChange}/>
          <ul>
            {users
              .filter((user) => user.name.toLowerCase().includes(input.value.toLowerCase()))
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
};
