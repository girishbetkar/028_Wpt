export default function App() {
  return (
    <>
      <MyProject />
    </>
  );
}

function MyProject() {
  //const [chat, setChat] = { "useState" };
  return (
    <div>
      <div>
        <h1 className="bg-secondary p-3">MYChatApp</h1>
      </div>
      <div>
        <input
          className="form form-lg w-50 p-4 mx-2"
          type="text"
          value=""
          placeholder="Lets chat here"
        />

        <input className=" bg-secondary w-30 p-3" type="button" value="send" />
      </div>
    </div>
  );
}
