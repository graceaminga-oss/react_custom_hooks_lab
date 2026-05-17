import { useLocalStorage } from "../hooks/useLocalStorage";

function Form() {
  const [name, setName] = useLocalStorage("name", null);
  const [serviceNumber, setServiceNumber] = useLocalStorage("serviceNumber", null);

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          data-testid="name"
          value={name ?? ""}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="serviceNumber">Service Number:</label>
        <input
          id="serviceNumber"
          data-testid="serviceNumber"
          value={serviceNumber ?? ""}
          onChange={(e) => setServiceNumber(e.target.value)}
        />
      </form>

      <h4>
        {name ? `Welcome, ${name}!` : "Enter your name"}
      </h4>
    </>
  );
}

export default Form;