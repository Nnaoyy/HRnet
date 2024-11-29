type Item = { name: string; abbreviation: string } | string;

interface Props {
    label: string;
    array: Item[];
    onChange: (option: { label: string; value?: string }) => void;
  }
  
  const Select: React.FC<Props> = ({ label, array, onChange }) => {
    
    const options = array.map((item) => ({
      label: typeof item === "string" ? item : item.name,
      value: typeof item === "string" ? item : item.abbreviation,
    }));
    
    return (
      <div >
        <label htmlFor={label}>{label}</label>
        <select  
            name="state" 
            id="state"
            onChange={(selectedOption) =>
                onChange(selectedOption as { label: string; value?: string })
              }
        >
        {options.map((option) => (
            <option label={option.label} value={option.value}>{option.label}</option>
        ))}
        </select>
      </div>
    );
  };
  
  export default Select;