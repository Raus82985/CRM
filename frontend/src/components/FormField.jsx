const FormField = ({ label, type, name, value, onChange }) => {
    return (
      <div className="mb-4">
        <label className="block mb-2 font-bold">{label}</label>
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
    );
  };
  
  export default FormField;
  